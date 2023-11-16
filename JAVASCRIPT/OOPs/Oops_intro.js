class Student {
    constructor(name ,age){
        console.log(`Hi i am ${name} and am ${age}`);
    }
     method1(name) {
         return (this.name + " Whats! ups") ;    
    }
}
let s =new Student("Uday Sharma",19);
console.log(s.method1("Uday"))


 //----------- Inheritence --------------//
 class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

//------------ polymorphism -------------------//
class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!