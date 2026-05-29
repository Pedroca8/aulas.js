//                01234567
let umaStrings = "Um Texto";

console.log(umaStrings[7]);
console.log(umaStrings.split(' '));
console.log(umaStrings.toUpperCase());
console.log(umaStrings.toLowerCase());
console.log(umaStrings.indexOf('texto'));
console.log(umaStrings.indexOf('o', 3));
console.log(umaStrings.match(/[a-z]/));
console.log(umaStrings.search(/x/));
console.log(umaStrings.replace(/u/, '@'));
console.log(umaStrings.lastIndexOf('um', 3));
console.log(umaStrings.length);
console.log(umaStrings.slice(3, 8));
console.log(`nessa parte tem ${umaStrings}`);
