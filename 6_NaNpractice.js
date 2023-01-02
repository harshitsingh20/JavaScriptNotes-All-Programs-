                                    // What is NaN?

// NaN is a property of the global object. 
// In other words, it is a variable in global scope.
// The initial value of NaN is Not-A-Number 

// isNaN() Function :- This Function return true and false value.

// When NaN is False:- When we give only number in the input.

var Har = 9559771478;
console.log(isNaN(Har));

// When NaN is True :- When we give alphabets or Number + Alphabets

var Ank = "harshit007"
console.log(isNaN(Ank));


// Compare NaN === NaN

console.log(NaN === NaN);       // Same output in == also.  False


// Number.NaN === NaN

console.log(Number.NaN === NaN);    // False


// isNaN(NaN)

console.log(isNaN(NaN));

// isNaN(Number.NaN)

console.log(isNaN(Number.NaN));

// Number.isNaN(NaN)

console.log(Number.isNaN(NaN));


// isNaN===isNaN

console.log(isNaN===isNaN);