// Topic: OOP
// https://www.youtube.com/playlist?list=PL4cUxeGkcC9i5yvDkJgt60vNVWffpblB7

class mobilePhone {
    // constructor:
    constructor (brand, color, sim, apps = []) {
        // properties:
        this.brand = brand;
        this.color = color;
        this.sim = sim;
        this.apps = apps;
    }
    
    // methods:
    installApp (appName) {
        this.apps.push(appName);
        console.log(`App "${appName}" installed successfully.`);
        return this; // if you want to chain
    }

    // text () {
    // }

    // call () {
    // }

    displayDetails () {
        console.log("Mobile Phone Details:");
        console.log("Brand:", this.brand);
        console.log("Color:", this.color);
        console.log("Sim:", this.sim);
        console.log("Apps:", this.apps.length > 0 ? this.apps.join(', ') : "None");
        return this;
    }
}

// instantiate
mobile1 = new mobilePhone("Samsung", "Pink", "Globe"); // you don't need var :o
mobile1.installApp("Messenger").installApp("YouTube").displayDetails();

mobile2 = new mobilePhone("iPhone", "Black", "Smart");
mobile2.installApp("Facebook").displayDetails();

/**Inheritance**/
class Animal {
    constructor (name) {
        this.name = name;
    }

    eat () {
        console.log(`${this.name} is eating.`);
    }

    makeSound () {
        console.log("Some generic sound");
    }
}

// since dog is an animal (literal); make it a subclass/child class/inherit the properties of the animal class (superclass)
class Dog extends Animal {
    constructor (name, breed) {
        super(name); // super keyword will detect that this is referring to the superclass property
        // super will use the property from superclass instead of making/overwriting a new property (with `this`)
        this.breed = breed;
    }

    makeSound () { // will overwrite the superclass' property
        console.log("Ed...ward...onii-san");
    }   
    
    fetch () {
        console.log("Fetching the ball");
    }
}

const myDog = new Dog("Nina", "chimera"); // Animal need an argument, so Dog inherits that need
myDog.eat();
myDog.makeSound();
myDog.fetch();

const myCat = new Dog("CatDog", "cat na dog");
myCat.fetch();
