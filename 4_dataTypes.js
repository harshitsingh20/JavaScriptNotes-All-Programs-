// Section 4👉 Data Types in JavaScript

// Six datatype that are Primitives are: -

// 1) undefined

var har;
console.log(har);
console.log(typeof(har));

// 2) Boolean

var iAmhar = false;
console.log(iAmhar);

// 3) Number

var myAge = 21;
console.log(myAge);

// 4) String

var myName = "String Data type";
console.log(myName);
console.log(typeof(myName));

// 5) BigInt

// ES2020
// #1: BigInt:-to represent whole numbers larger than 2^53 - 1

// let oldNum = Number.MAX_SAFE_INTEGER;
// // console.log(oldNum);
console.log( 9007199254740991n + 12n );
// const newNum = 9007199254740991n + 12n;

// console.log(newNum);
// console.log(typeof newNum);


// 6) Symbol


// Typeof() Function :- This Function is used to tell which type of the datatype.