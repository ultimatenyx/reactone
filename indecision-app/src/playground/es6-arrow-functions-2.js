//arguments object - no longer bound with arrow functions
const add = function(a,b){
    console.log(arguments);
    return a+b;
}
console.log(add(34,56,1000));

// this keyword - no longer bound

const user = {
    name:"Tony",
    cities:['Manhattan','New York','Hogwarts'],
    printPlacesLived: function(){
        // console.log(this.name);
        // console.log(this.cities);
        this.cities.forEach((city)=> {
            console.log(this.name+' has lived in '+city);
        });
    },
    printPlacesLivedTwo(){
        // console.log(this.name);
        // console.log(this.cities);
        // this.cities.forEach((city)=> {
        //     console.log(this.name+' has lived in '+city);
        // });
        return this.cities.map((city)=> this.name +' has lived in '+city);
    }
}
user.printPlacesLived();
console.log(user.printPlacesLivedTwo());

// Challenge
const multiplier = {
    numbers:[2,3,6,7,8],
    multiplyBy:3,
    multiply(){
        return this.numbers.map((num) => this.multiplyBy*num);
    }
};
console.log(multiplier.multiply());