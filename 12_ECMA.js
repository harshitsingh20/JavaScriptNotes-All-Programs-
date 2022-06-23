// 👻 Now It's Time for Modern JavaScript 😍😍 

// 🙏🙏 Features of ECMAScript 2015 also known as ES6 🙏🙏


// 1️⃣ LET VS CONST vs VAR

// Let:- In this we can change the inner value(Variable Name).This is used in  block of statement.

// Const:- In this we cannot change the inner value( Variable Name).This is used in  block of statement.

// Var:- In this we can easily access the inner and outer elements.

// var => Function scope 
// let and const => Block Scope 


// 2️⃣ Template literals (Template strings) 

// JavaScript program to print table for given number (8)?

// output :  8 * 1 = 8 
//   8 * 2 = 16(8*2)
//  => 8 * 10 = 80


// for(let num = 1; num<= 10; num++){
//     let tableOf = 12;
//   console.log( ` ${tableOf} * ${num} = ${tableOf * num}` );
// }



// 3️⃣  Default Parameters
// Default function parameters allow named parameters to be 
// initialized with default values if no value or undefined is passed.

// function mult(a,b=5){
//   return a*b;
// }

// console.log(mult(3));



// 4️⃣ Destructuring in ES6
// The destructuring assignment syntax is a JavaScript expression 
// that makes it possible to unpack values from arrays, 
// or properties from objects, into distinct variables.

//  ➡ Array Destructuring  🏁

// const myBioData = ['Harshit', 'Singh', 21];

// let myFName = myBioData[0];
// let myLName = myBioData[1];
// let myAge = myBioData[2];


// let [myFName,myAge, myLName] = myBioData;
// console.log(myAge);

// we can add values too 

// let [myFName,myLName,myAge, myDegree="MCS"] = myBioData;
// console.log(myDegree);



// 5️⃣ Object Properties 

// ➡ we can now use Dynamic Properties 

// let myName = "Harshit";
// const myBio = {
//   [myName] : "hello how are you?",
//   [20 + 1] : "is my age"
// }

// console.log(myBio);



// 6️⃣ Fat Arror Function :- In this we call the function after the execution.

// const sum = () => `the sum of the two number is ${(a=5)+(b=6)}`;

// console.log(sum()); 

// OR

// const sum = () => {
//   var a = 20
//   var b = 30
//   return a+b
// }
// console.log(sum());



// 7) Object Destructuring

// let myBioData = {
//   myFName: "Harshit",
//   myLName: "Singh",
//   myAge: 23
// }
// let {myFName, myLName, myAge, myDegree = "MCS"} = myBioData

// console.log(myAge);


// 8) Spread Operators (...)

// const color = ["red", "blue", "yellow", "pink"]
// const color2 = ["red", "blue", "yellow", "pink", "black", "orange"]

// const myFav = ["black", "orange", ...color]
// console.log(myFav);



// ES7 features 

// 1: array include 
// const colors = ['red', 'green', 'blue', 'white', 'pink'];
// const isPresent = colors.includes('purple');
// console.log(isPresent);


// 2: **


// 3: Expointial Operators



// ES8 features 

// 1: String padding (Adding Space)

const mess = "My name is Harshit".padStart(25);
const mess2 = "My name is Harshit".padEnd(25);
console.log(mess);
console.log(mess2);

// 2: Object.values()

const abc = {
    name: "Harshit",
    age: 23
}
console.log(Object.values(abc));


// ECMA 2014

// use strict

"use strict"

let a = 20
console.log(a);