
// The normal Way
const square = function(x){
    return x*x;
}
// The other normal way
function squareNormal(x){
    return x*x;
}

// Arrow function - explicit return
const squareArrow = (x) => {
    return x*x;
};
// Arrow function concise version - implicit return
const squareArrowConcise = (x) => x*x;

console.log(square(8));
console.log(squareNormal(3));
console.log(squareArrow(9));
console.log(squareArrowConcise(10));

//Challenge - getFirstName
//Normal Arrow method
const getFirstName = (fname) => {
    return fname.split(' ')[0];
};

const getFirstNameConcise = (fname) => fname.split(' ')[0];

console.log(getFirstName('Harry Potter'));
console.log(getFirstNameConcise('Hermione Granger'));
