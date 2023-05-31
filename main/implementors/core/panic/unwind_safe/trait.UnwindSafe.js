(function() {var implementors = {
"kempt":[["impl&lt;Key, Value&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.Map.html\" title=\"struct kempt::map::Map\">Map</a>&lt;Key, Value&gt;<span class=\"where fmt-newline\">where\n    Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,\n    Value: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,</span>",1,["kempt::map::Map"]],["impl&lt;'key, Owned, Borrowed: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"kempt/map/enum.SearchKey.html\" title=\"enum kempt::map::SearchKey\">SearchKey</a>&lt;'key, Owned, Borrowed&gt;<span class=\"where fmt-newline\">where\n    Borrowed: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Owned: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,</span>",1,["kempt::map::SearchKey"]],["impl&lt;Key, Value&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.Field.html\" title=\"struct kempt::map::Field\">Field</a>&lt;Key, Value&gt;<span class=\"where fmt-newline\">where\n    Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,\n    Value: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a>,</span>",1,["kempt::map::Field"]],["impl&lt;'a, 'key, Key, Value, BorrowedKey&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"enum\" href=\"kempt/map/enum.Entry.html\" title=\"enum kempt::map::Entry\">Entry</a>&lt;'a, 'key, Key, Value, BorrowedKey&gt;",1,["kempt::map::Entry"]],["impl&lt;'a, Key, Value&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.OccupiedEntry.html\" title=\"struct kempt::map::OccupiedEntry\">OccupiedEntry</a>&lt;'a, Key, Value&gt;",1,["kempt::map::OccupiedEntry"]],["impl&lt;'a, 'key, Key, Value, BorrowedKey&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.VacantEntry.html\" title=\"struct kempt::map::VacantEntry\">VacantEntry</a>&lt;'a, 'key, Key, Value, BorrowedKey&gt;",1,["kempt::map::VacantEntry"]],["impl&lt;'a, Key, Value&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.Iter.html\" title=\"struct kempt::map::Iter\">Iter</a>&lt;'a, Key, Value&gt;<span class=\"where fmt-newline\">where\n    Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Value: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>",1,["kempt::map::Iter"]],["impl&lt;'a, Key, Value&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.IterMut.html\" title=\"struct kempt::map::IterMut\">IterMut</a>&lt;'a, Key, Value&gt;",1,["kempt::map::IterMut"]],["impl&lt;Key, Value&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.IntoIter.html\" title=\"struct kempt::map::IntoIter\">IntoIter</a>&lt;Key, Value&gt;<span class=\"where fmt-newline\">where\n    Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Value: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>",1,["kempt::map::IntoIter"]],["impl&lt;'a, Key, Value&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.Values.html\" title=\"struct kempt::map::Values\">Values</a>&lt;'a, Key, Value&gt;<span class=\"where fmt-newline\">where\n    Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Value: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>",1,["kempt::map::Values"]],["impl&lt;'a, Key, Value&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.ValuesMut.html\" title=\"struct kempt::map::ValuesMut\">ValuesMut</a>&lt;'a, Key, Value&gt;",1,["kempt::map::ValuesMut"]],["impl&lt;Key, Value&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.IntoValues.html\" title=\"struct kempt::map::IntoValues\">IntoValues</a>&lt;Key, Value&gt;<span class=\"where fmt-newline\">where\n    Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Value: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>",1,["kempt::map::IntoValues"]],["impl&lt;'a, Key, Value&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.UnwindSafe.html\" title=\"trait core::panic::unwind_safe::UnwindSafe\">UnwindSafe</a> for <a class=\"struct\" href=\"kempt/map/struct.Drain.html\" title=\"struct kempt::map::Drain\">Drain</a>&lt;'a, Key, Value&gt;<span class=\"where fmt-newline\">where\n    Key: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,\n    Value: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.69.0/core/panic/unwind_safe/trait.RefUnwindSafe.html\" title=\"trait core::panic::unwind_safe::RefUnwindSafe\">RefUnwindSafe</a>,</span>",1,["kempt::map::Drain"]]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()