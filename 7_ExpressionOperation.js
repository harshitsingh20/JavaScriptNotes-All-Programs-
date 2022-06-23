// Section 5👉Operators in JavaScript

// 1️⃣ Assignment Operator
// An assignment operator assigns a value to its left operand 
// based on the value of its right operand. 
// The simple assignment operator is equal (=)

var x = 5; 
var y = 5;

console.log("is both the x and y are equal or not" + x == y );


// 2️⃣Arithmetic operators
// An arithmetic operator takes numerical values 
// (either literals or variables) as their operands and 
// returns a single numerical value.

console.log(3+3);
console.log(10-5);
console.log(20/5);
console.log(5*6);

console.log("Remainder Operator " + 27%4);


// 🙄Increment and Decrement operator
// Operator: x++ or ++x or x-- or --x
// If used postfix, with operator after operand (for example, x++), 
// the increment operator increments and returns the value before incrementing.

var num = 15;
var newNum = num-- + 5;
console.log(num);
console.log(newNum);

// Postfix increment operator means the expression is evaluated 
// first using the original value of the variable and then the 
// variable is incremented(increased).


// If used prefix, with operator before operand (for example, ++x), 
// the increment operator increments and returns the value after incrementing.


var num1 = 15;
var newNum1 = --num1 + 5; 
console.log(num1);
console.log(newNum1);


// 3️⃣Comparison operators
// A comparison operator compares its operands and 
// returns a logical value based on whether the comparison is true.

var a1 = 30;
var b1 = 10;

// Equal (==)
console.log(a1 == b1);

// Not equal (!=)
console.log(a1 != b1);

// Greater than (>)
console.log(a1 > b1);

// Greater than or equal (>=)
console.log(a1 >= b1);

// Less than (<)
console.log(a1 < b1);

// Less than or equal (<=)
console.log(a1 <= b1);



// 4️⃣ Logical operators
// Logical operators are typically used with Boolean (logical) values; 
// when they are, they return a Boolean value.

// Logical AND (&&)
// The logical AND (&&) operator (logical conjunction) for a set of 
// operands is true if and only if all of its operands are true.

var a2 = 30;
var b2 = -20;
console.log(a2 > b2 && b2 > -50 && b2 < 0);

// Logical OR (||)
// The logical OR (||) operator (logical disjunction) for a set of 
// operands is true if and only if one or more of its operands is true.

console.log((a2 < b2) || (b2 > 0) || (b2 > 0));

// Logical NOT (!)
// The logical NOT (!) operator (logical complement, negation) 
// takes truth to falsity and vice versa.

console.log(!((a2>0) || (b2<0)));
console.log(!true);




// 5️⃣ String Concatenation(operators)
// The concatenation operator (+) concatenates two string values together, 
// returning another string that is the union of the two operand strings.


var myNamee = "Harshit";
console.log(myNamee + " Singh");