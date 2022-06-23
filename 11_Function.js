// Functions in JavaScript

// A JavaScript function is a block of code designed to perform a particular task.

//  1️⃣Function Definition 

// A function definition (also called a function declaration, or function statement) 
// consists of the function

// Example:= 
// function sum(){
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }


// 2️⃣Calling functions
// Defining a function does not execute it.
// A JavaScript function is executed when "something" invokes it (calls it).

// function sum(){          Function parameter
//   var a = 10, b = 40;
//   var total = a+b;
//   console.log(total);
// }
// sum();                    Function Argument


// 3️⃣ Function Parameter vs Function Arguments 
// Function parameters are the names listed in the function's definition. 
// Function arguments are the real values passed to the function.


// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// sum();
// sum(20,30);
// sum(50,50);
// sum(5,6)



// 4️⃣ Function expressions
// "Function expressions simply means 
// create a function and put it into the variable "

// function sum(a,b){
//   var total = a+b;
//   console.log(total);
// }

// var funExp = sum(5,15);




// 5️⃣ Return Keyword
// When JavaScript reaches a return statement, 
// the function will stop executing.

// Functions often compute a return value.
// The return value is "returned" back to the "caller"

// function sum(a,b){
//   return total = a+b;
// }
// var funExp = sum(5,25);
// console.log('the sum of two no is ' + funExp );



// 6️⃣ Anonymous Function

// A function expression is similar to and has the same syntax 
// as a function declaration One can define "named" 
// function expressions (where the name of the expression might 
// be used in the call stack for example) 
// or "anonymous" function expressions.


// var funExp = function(a,b){
//   return total = a+b;
// }
// var sum = funExp(15,15);
// console.log(sum);
