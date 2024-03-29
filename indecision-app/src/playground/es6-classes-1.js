class Person {
    constructor(name='Anonymous',age=0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi! This is ${this.name}!`;
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    constructor(name,age, major){
        super(name,age);
        this.major = major;
    }
    hasMajor(){
        return !!this.major;
    }
    getDescription(){
        let description = super.getDescription();
        if(this.hasMajor())
            description += ` His major is ${this.major}`;
        return description;
    }
}

class Traveler extends Person{
    constructor(name,age,homeLocation){
        super(name,age);
        this.homeLocation = homeLocation;
    }
    hasHomeLocation(){
        return !!this.homeLocation;
    }
    getGreeting(){
        let greeting = super.getGreeting();
        if(this.hasHomeLocation()){
            greeting+= ` I am visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}
// const me = new Student('Andrew Kead',26,'Computer Science');
// console.log(me.getDescription());

// const other = new Student();
// console.log(other.getDescription());
const me = new Traveler('Andrew Kead',26,'Ohio');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());