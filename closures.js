function foo() {
    var bar;
    quux = 5;
    function zip() {
        bar = true;
        var quux = 10;
    }
    return zip;
}
