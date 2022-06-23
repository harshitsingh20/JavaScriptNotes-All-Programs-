let fName = "Harshit"
let lName = "Singh"

let fullName = new String("Harshit Singh") // String Constructor

console.log(fName);
console.log(lName);
console.log(fullName);

// 1) Find Lenght in String:- Length start with one

console.log(fName.length);

// 2) Escape Sequence Charactor

// a) \'
// b) \"
// c) \\

let abc = "Hello my name is Harshit and i have lot\"s of apples"
console.log(abc);


// 3) Finding String in a String

let har = "Hello My name is Ankit"
console.log(har.indexOf('Ankit', 3));

// or

console.log(har.indexOf('e', 1));

// or

console.log(har.lastIndexOf('i'));


// 4) Search: - It gives the index value

let qwe = "Hi Harshit how are you"
console.log(qwe.search("Harshit"));

// 5) slice method:- It takes two parameaters (start,end-1) (Extracting String Parts)

// Three methods to extracting string parts

// a) slice (start,end-1)
// b) substring (start,end-1) :- We cannot add negative value but we see the starting value
// c) substr (start,end-1): - We can add negative alone value and we cannot see the starting value
// eg: - console.log(wer.substr(-2)); :- it will give the last value

let wer = "Apple,banana,mango,kiwi"
console.log(wer.slice(0, 2));

// or

// if we use - parameaters so it will remove last value and print rest of them

console.log(wer.slice(0, -2));

// if we give only one parameater so from there it will print whole string

console.log(wer.slice(5));

// or

console.log(wer.substring(0, 2));

// or

console.log(wer.substr(0, 2));


// 6 Replacing string Content

let ert = "Hello my name is Ankit"
console.log(ert.replace("Ankit", "Harshit"));

// 7) Extracting String Character

// a) charAt(position)
// b) charCodeAt(position)
// c) Property access []

// a) charAt(position) :- Its start with Zero index

let rty = "Hello Harshit"
console.log(rty.charAt(4));

// b) charCodeAt(position):- Its return the unique code of the last character 

console.log(rty.charCodeAt(5));

// c) Property access []: - Used in ECMA5

console.log(rty[0]);

// 8) Upper Case

let uio = "harshit"
console.log(uio.toUpperCase());

// 9) Lower Case
let uiop = "HARSHIT"
console.log(uiop.toLowerCase());

// 10) Contact Method: - Combine String

let tty = "Harshit"
let qqw = "Singh"
console.log(tty.concat(qqw));

// 11) trim Method:- It remove the wide space from both side

let rtt = "         Harshit         "
console.log(rtt.trim());


// 12) Convert String into Array

let yyu = "a,b,c,d"
console.log(yyu.split(","));
console.log(yyu.split("|"));
console.log(yyu.split("."));