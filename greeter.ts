class Greeter{
    name:string;

    constructor(name:string)
    {
        this.name=name;

    }
    greet()
    {
        return `Happy Birthday to ${this.name}`
    }
}

var greeting=new Greeter('Naveen');
document.write(greeting.greet());