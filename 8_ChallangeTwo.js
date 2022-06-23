// Challenge Time

// Important Question

// 1) What will be the output of 3**3? 

console.log(3**3);

// 2) What will be the output, when we add a number and a string?

console.log(5 + "Harshit");

// 3) Write a program to swap two numbers? Whith using third variable

var a=5;
var b=10;
var c;

c = b;
b = a;
a = c;

console.log(a);
console.log(b);



// 4) Write a program to swap two numbers? Whithout using third variable

var a1 = 10;
var b1 = 20;

a1 = a1 + b1;
b1 = a1 - b1;
a1 = a1 - b1;

console.log(a1);
console.log(b1);



// What is the Difference between == vs === ?

// In == it's checks only values not data type

var num1 = 5;
var num2 = '5';
console.log(num1 == num2 );     //Return : True


// In === it's checks both values and data types

console.log(num1 === num2 );     //Return: False