let num1 = 1;
let num7 = 2;
let num2 = 2.5;
let num3 = 1500;
let num4 = 10;
let num5 = 15.0003230203203023203;

num1 += num7; //num1 = num1 + num7

console.log(num1);
console.log(`${num1.toString()} ${num2}`);
console.log(num1.toString() + num2);
console.log(typeof num1);
console.log(num3.toString(2))
console.log(num5.toFixed(4))
console.log(Number.isFinite(num4))
console.log(Number.isInteger(num4))
console.log(Number.isNaN(num4))
let temp = 'ola' + num1;
console.log(Number.isNaN(temp))



