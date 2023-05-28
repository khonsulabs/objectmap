use std::any::type_name;
use std::collections::{BTreeMap, HashMap};
use std::hash::Hash;
use std::ops::AddAssign;

use criterion::{
    black_box, criterion_group, criterion_main, BatchSize, Bencher, BenchmarkId, Criterion,
};
use fnv::FnvBuildHasher;
use objectmap::ObjectMap;
use rand::distributions::Standard;
use rand::prelude::Distribution;
use rand::seq::SliceRandom;
use rand::thread_rng;

fn btree_lookup<Key>(bench: &mut Bencher, keys: &[Key])
where
    Key: Clone + Ord,
{
    let set = keys
        .iter()
        .map(|key| (key.clone(), ()))
        .collect::<BTreeMap<_, _>>();
    let mut keys = keys.iter().cycle();

    bench.iter(|| {
        let key = black_box(keys.next().expect("cycled"));
        assert!(set.get(key).is_some());
    });
}

fn hash_lookup<Key>(bench: &mut Bencher, keys: &[Key])
where
    Key: Eq + Hash + Clone,
{
    let set = keys
        .iter()
        .map(|key| (key.clone(), ()))
        .collect::<HashMap<_, _, FnvBuildHasher>>();
    let mut keys = keys.iter().cycle();

    bench.iter(|| {
        let key = black_box(keys.next().expect("cycled"));
        assert!(set.get(key).is_some());
    });
}

fn object_lookup<Key>(bench: &mut Bencher, keys: &[Key])
where
    Key: Clone + Ord,
{
    let set = keys
        .iter()
        .map(|key| (key.clone(), ()))
        .collect::<ObjectMap<Key, ()>>();
    let mut keys = keys.iter().cycle();

    bench.iter(|| {
        let key = black_box(keys.next().expect("cycled"));
        assert!(set.get(key).is_some());
    });
}

fn lookup<Key>(c: &mut Criterion, keys: &[Key])
where
    Key: Eq + Hash + Clone + Ord + Default + From<u8> + TryFrom<usize> + AddAssign,
{
    let mut group = c.benchmark_group(format!("lookup {}", type_name::<Key>()));
    for limit in [5, 10, 25, 50, 75, 100, 500, 1000] {
        if Key::try_from(limit).is_err() {
            break;
        }
        group.bench_with_input(BenchmarkId::new("hash", limit), &keys[..limit], hash_lookup);
        group.bench_with_input(
            BenchmarkId::new("btree", limit),
            &keys[..limit],
            btree_lookup,
        );
        group.bench_with_input(
            BenchmarkId::new("object", limit),
            &keys[..limit],
            object_lookup,
        );
    }
}

fn btree_fill<Key>(bench: &mut Bencher, (keys, starting_size): &(&[Key], usize))
where
    Key: Clone + Ord,
{
    bench.iter_batched(
        || &keys[..*starting_size],
        |keys: &[Key]| {
            let mut map = BTreeMap::new();
            for key in keys {
                map.insert(key.clone(), ());
            }
        },
        BatchSize::LargeInput,
    );
}

fn hash_fill<Key>(bench: &mut Bencher, (keys, starting_size): &(&[Key], usize))
where
    Key: Eq + Hash + Clone,
{
    bench.iter_batched(
        || &keys[..*starting_size],
        |keys: &[Key]| {
            let mut map =
                HashMap::with_capacity_and_hasher(*starting_size, FnvBuildHasher::default());
            for key in keys {
                map.insert(key.clone(), ());
            }
        },
        BatchSize::LargeInput,
    );
}

fn object_fill<Key>(bench: &mut Bencher, (keys, starting_size): &(&[Key], usize))
where
    Key: Clone + Ord,
{
    bench.iter_batched(
        || &keys[..*starting_size],
        |keys: &[Key]| {
            let mut map = ObjectMap::with_capacity(*starting_size);
            for key in keys {
                map.insert(key.clone(), ());
            }
        },
        BatchSize::LargeInput,
    );
}

fn fill<Key>(c: &mut Criterion, keys: &[Key], name: &str)
where
    Key: Eq + Hash + Clone + Ord + TryFrom<usize>,
    Standard: Distribution<Key>,
{
    let mut group = c.benchmark_group(format!("{name} {}", type_name::<Key>()));
    for limit in [5, 10, 25, 50, 75, 100, 500, 1000] {
        if Key::try_from(limit * 2).is_err() {
            break;
        }

        group.bench_with_input(BenchmarkId::new("hash", limit), &(keys, limit), hash_fill);
        group.bench_with_input(BenchmarkId::new("btree", limit), &(keys, limit), btree_fill);
        group.bench_with_input(
            BenchmarkId::new("object", limit),
            &(keys, limit),
            object_fill,
        );
    }
}

fn generate_keys<Key>(max: Key, shuffle: bool) -> Vec<Key>
where
    Key: Eq + Hash + Copy + Ord + Default + From<u8> + AddAssign,
{
    let mut keys = Vec::new();
    let mut key = Key::default();
    while keys.len() < 10000 && key <= max {
        keys.push(key);
        key += Key::from(1);
    }
    if shuffle {
        keys.shuffle(&mut thread_rng());
    }
    keys
}

fn suite_for_key<Key>(c: &mut Criterion, max: Key)
where
    Key: Eq + Hash + Copy + Ord + Default + From<u8> + TryFrom<usize> + AddAssign,
    Standard: Distribution<Key>,
{
    let keys = generate_keys::<Key>(max, true);
    fill::<Key>(c, &keys, "fill-rdm");
    lookup::<Key>(c, &keys);
    let keys = generate_keys::<Key>(max, false);
    fill::<Key>(c, &keys, "fill-seq");
}

fn criterion_benchmark(c: &mut Criterion) {
    suite_for_key::<u8>(c, u8::MAX);
    suite_for_key::<usize>(c, usize::MAX);
    suite_for_key::<u128>(c, u128::MAX);
}

criterion_group!(benches, criterion_benchmark);
criterion_main!(benches);
