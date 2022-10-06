const multiplier={
    numbers:[1,2,5,6,8],
    multiplyBy:6,
    multiply(){
        return this.numbers.map((number)=>number*this.multiplyBy);
    }
}
console.log(multiplier.multiply());