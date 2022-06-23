// Important Questions

                                    // 1) Add Number + String

console.log(5 + "20");

// Output:- 520

console.log(5 + "Harshit");

// Output:- 5Harshit


                                    // 2) Substract Number - String

console.log(10 - '7');      //Bug 1 

//Output:- 3

console.log(10 - 'Harshit');

// Output: - NaN (Not a Number):- This property is the global object


                                    // 3) Add String + String

console.log("Harshit"+"Singh");

// Output:- HarshitSingh


                                    // 4) Substract String - String

console.log("Ankit"-"Singh");

// Output:- NaN


                                    // 5) True + True ( 1 + 1 ):- True have 1 Number

console.log(true + true);

// Output:- 2


                                    // 6) false + false (0 + 0 ) :- False have 0 Number

console.log(false + false);

// Output:- 0


                                    // 7) false - true (0 - 1)

console.log(false - true);

// Output: -1


                                    // 8) Difference between null vs undefined? 


var iAmUseless = null;      //Null is not a DataType still gives the object
console.log(iAmUseless);
console.log(typeof(iAmUseless));        // Bug 2



// Default String

const foo = null ?? 'default string';
console.log(foo);




