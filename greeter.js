var Greeter = (function () {
    function Greeter(name) {
        this.name = name;
    }
    Greeter.prototype.greet = function () {
        return "Happy Birthday to " + this.name;
    };
    return Greeter;
}());
var greeting = new Greeter('Naveen');
document.write(greeting.greet());
