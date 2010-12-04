module("Control.ScrollBar");

test("Basic requirements", function () {
    expect(1);
    ok(Control.ScrollBar, "Control.ScrollBar");
});

test("options", function () {
    expect(1);
    var s = new Control.ScrollBar("scrollbar_container", "scrollbar_track", { active_class_name: "scrollbar_test" });
    ok($('scrollbar_container').hasClassName('scrollbar_test'), "an active class name.");
});

test("Add ScrollBar instance", function () {
    expect(1);
    var originalLength = Control.ScrollBar.instances.length;
    var s = new Control.ScrollBar("scrollbar_container", "scrollbar_track", { active_class_name: "scrollbar_test" });
    equals(Control.ScrollBar.instances.length-originalLength, 1, "number of new instances.");
});
