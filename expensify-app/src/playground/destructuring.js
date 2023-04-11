//
// Object Destructuring
//

// const person = {
//     name:"Dhandrew",
//     age:26,
//     location:{
//         city:'Goul',
//         temp:93
//     }
// };

// console.log(`${person.name} is ${person.age} year(s) old.`);
// can be written as 
/*
const name = person.name;
const age = person.age;
console.log(`${name} is ${age} year(s) old.`);
*/
/*
//Using ES6 destructuring
const {name:firstname='Anonymous',age} = person;
console.log(`${firstname} is ${age} year(s) old.`);

const {city,temp: temperature} = person.location;
if(city && temperature)
    console.log(`It is ${temperature} in ${city}`);


const book = {
    title: "Ego is the Enemy",
    author:"Ryan Holiday",
    publisher: {
        name:'Penguin'
    }
}
const {name: publisherName = 'Self-Publish'} = book.publisher;
console.log(publisherName);
*/
//==================================================================
//
// Array Destructuring
//==================================================================
const address = ['221B Baker Street','London',,'19417'];
// console.log(`You are in ${address[1]} ${address[2]}`);
const [, city, state='New York', zip] = address;
console.log(`You are in ${city} ${state}`);

const item = ['Coffee (hot)','$2.00','$2.50','$2.75'];
const [itemName,,mediumPrice] = item;
console.log(`A medium ${itemName} costs ${mediumPrice}`);