// Hoisting in JS: - print first and then execute, but it gives undefined value

console.log(myName);
var myName;
myName = "Harshit Singh"

// Scope chain: - is used to resolve the values of variable names in JS.

// Lexcing Scoping: - inner function can access the parent function or outer function, vice-versa is not true

// eg:- 
let a = "Hello" //Global Scope
const first = () => {
    let b = "How are you";
    const second = () => {
        let c = "I am Fine";
        console.log(a + b + c);
    }
    second()
    // console.log(a+b+c); // Can't use c
}
first()



// Closures in Js: - It is the combination of function bundled together with refrence to its surrounding state.

// It is same like lexical Scope


const outerPar = (a) => {
    let b = 20;
    const innerPar = () => {
        sum = a + b;
        console.log(`The sum of two number is ${sum}`);
    }
    innerPar();
}
outerPar(5)


// .dir: - displays an interactive list of the properties of the specified JavaScript object. 




// Synchronous in JavaScript

// const fun2 = () => {
//     console.log("Function 2 is Called");
// }
// const fun1 = () => {
//     console.log("Function 1 is Called");
//     fun2()
//     console.log("Function 1 is called Again");
// }
// fun1()



// Asynchronous in JavaScript

// const fun2 = () => {
//     setTimeout(() => {
//         console.log("Function 2 is called");
//     }, 2000);
// }

// const fun1 = () => {
//     console.log("Function 1 is Called");
//     fun2()
//     console.log("Function 1 is called Again ");
// }
// fun1()



// Event Loop in JavaScript


// Eexuting Stack:- Just like Stack

// const fun2 = () => {
//     setTimeout(() => {
//         console.log("Function 2 is called");
//     }, 2000);
// }

// const fun1 = () => {
//     console.log("Function 1 is Called");
//     fun2()
//     console.log("Function 1 is called Again ");
// }
// fun1()