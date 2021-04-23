/// way 1 normal function
function square(num){
    const squareNum = num * num;
    return squareNum
} 
const number = square(10);
console.log(number);

/// way 2 assigning a default value in the function
function noValue(x , y = 10){
    const sum = x + y;
    return sum;
}
const result = noValue(100);
console.log(result);

/// way 3 assigning a default value by condition
function withoutValue(x , y){
    if(y == undefined){
        y = 1;
    }
    const multiply = x * y;
    return multiply;
}
const multiplicationResult = withoutValue(100);
console.log(multiplicationResult);



