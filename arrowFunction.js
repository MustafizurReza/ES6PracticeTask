/// normal function
function easy(num){
    const squareIt = num * num;
    return squareIt;
}
const square = easy(10);
console.log(square);

/// anotherWay 
const plus = (x , y) => x + y;
const result = plus(100,10);
console.log(result); 

const doubleIt = (num) => num * 2;
const Result = doubleIt(99);
console.log(Result);  

const noPara = () => 10;
const noValue = noPara();
console.log(noValue);