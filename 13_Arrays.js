// Arrays in JavaScript

// 1️⃣ Array Subsection 1 👉 Traversal in array✌ 
// navigate through an array

// if we want to get the single data at a time  and also 
// if we want to change the data 

// var myFriends = ['vinod','ramesh','arjun','vishal'];    //This give the last element of Array
// console.log(myFriends[myFriends.length - 1]);


// if we want to check the length of elements of an array 

// for loop to navigate 

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(var i=0; i<myFriends.length; i++){
//   console.log(myFriends[i]);
// }



// After ES6 we have for..in and for..of loop too 

// For in:- It providex the index Number.

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// for(let elements in myFriends){
//   console.log(elements);
// }


// For of:- It provides the index name

// for(let elements of myFriends){
//   console.log(elements);
// }


// For each:- Calls a function for each element in the array.

// var myFriends = ['vinod','ramesh','arjun','vishal'];
// myFriends.forEach(function(element, index, array) {
//       console.log(element + " index : " +
//         index + " " + array);
// });

// OR

var myFriends = ['vinod','ramesh','arjun','vishal'];
myFriends.forEach((element,index,array)=>{
    console.log(element,index,array);
});




// 2️⃣ Array Subsection 2 👉 Searching and Filter in an Array 

// Array.prototype.indexOf() 🙋‍♂️

// Returns the first (least) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element from the 
// 0th index number 


// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.indexOf("Thapa", 3));



// Array.prototype.lastIndexOf() 🙋‍♂️
// Returns the last (greatest) index of an element within the array equal 
// to an element, or -1 if none is found. It search the element last to first

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical","thapa"];

// console.log(myFriendNames.lastIndexOf("Thapa",3));



// Array.prototype.includes() 🙋‍♂️
// Determines whether the array contains a value, 
// returning true or false as appropriate.

// var myFriendNames = ["vinod","bahadur","thapa","thapatechnical"];

// console.log(myFriendNames.includes("thapa"));



// const prices = [200,300,350,400,450,500,600];

// price < 400
// const findElem = prices.find((currVal) =>  currVal < 400 );
// console.log(findElem);

// Or By using Fat Arrow Function

// console.log(prices.find((currVal) => currVal > 1400 ));




// Array.prototype.findIndex() 🙋‍♂️

// Returns the found index in the array, if an element in the 
// array satisfies the testing function, or -1 if not found.

// console.log(prices.findIndex((currVal) => currVal > 1400 )  );





// Array.prototype.filter() 🙋‍♂️

// Returns a new array containing all elements of the calling 
// array for which the provided filtering function returns true.

// const prices = [200,300,350,400,450,500,600];

// // price < 400
// const newPriceTag = prices.filter((elem, index) => {
//   return elem > 1400;
// })
// console.log(newPriceTag);





// 3️⃣ Array Subsection 3 👉 How to sort an Array

// Array.prototype.sort() 🙋‍♂️

// The sort() method sorts the elements of an array in place and 
//returns the sorted array. The default sort order is ascending, built 
//upon converting the elements into strings, 
// then comparing their sequences of UTF-16 code units values.

// const months = ['March', 'Jan', 'Feb', 'April' , 'Dec', 'Nov'];

// console.log(months.sort());

// However, if numbers are sorted as strings, 
// "25" is bigger than "100", because "2" is bigger than "1".


// //Array.prototype.reverse() 🙋‍♂️
// // The reverse() method reverses an array in place. 
// // The first array element becomes the last, and 
// // the last array element becomes the first.


// var fruits = ["Banana", "Orange", "Apple", "Mango"];

// let aFruits = fruits.reverse();
// console.log(aFruits);




// 4️⃣ Array Subsection 4 👉 Perform CRUD

// Array.prototype.push() 🙋‍♂️
// The push() method adds one or more elements to the 
// end of an array and returns the new length of the array.

// const animals = ['pigs', 'goats', 'sheep'];

// // const count = animals.push('chicken');
// console.log(count);                              // In this it gives the number of elements. Example:- 4

// animals.push('chicken', 'cats','cow');           // In this it add the items on the existing List
// console.log(animals);



// Array.prototype.unshift() 🙋‍♂️
// The unshift() method adds one or more elements to the 
// beginning of an array and returns the new length of the array.


// const animals = ['pigs', 'goats', 'sheep'];

// const count = animals.unshift('chicken');        // In this it gives the number of elements. Example:- 4
// console.log(count);

// animals.unshift('chicken');                      // // In this it add the items on the existing List in begning
// console.log(animals);


// 2nd example 

// const myNumbers = [1,2,3,5];

// myNumbers.unshift(4,6);
// console.log(myNumbers);



// Array.prototype.pop() 🙋‍♂️
// The pop() method removes the last element from an array and returns 
// that element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];

// console.log(plants);
// console.log(plants.pop());
// console.log(plants);



// Array.prototype.shift() 🙋‍♂️
// The shift() method removes the first element from an array and returns 
// that removed element. This method changes the length of the array.

// const plants = ['broccoli', 'cauliflower',  'kale', 'tomato', 'cabbage'];
// console.log(plants);
// console.log(plants.shift());
// console.log(plants);



// 5️⃣ Array Subsection 4 👉 Map and Reduce Method 

// Array.prototype.map() 🙋‍♂️

// let newArray = arr.map(callback(currentValue[, index[, array]]) {
//     // return element for newArray, after executing something
//   }[, thisArg]);

// Returns a new array containing the results of calling a 
// function on every element in this array. 


// const array1 = [1, 4, 9, 16, 25];
// num > 9
// let newArr = array1.map((curElem,index,arr) => {
//     return curElem > 9;
// })
// console.log(array1);
// console.log(newArr);




// 👉 Reduce Method 

// flatten an array means to convert the 3d or 2d array into a 
// single dimensional array 

// The reduce() method executes a reducer function (that you provide) 
// on each element of the array, resulting in single output value.

// The reducer function takes four arguments:

// Accumulator
// Current Value
// Current Index
// Source Array

// 4 subj = 1sub= 7
// 3dubj = [5,6,2]

// let arr = [5,6,2];

// let sum = arr.reduce((accumulator, curElem) => {
//         debugger;
//       return accumulator += curElem;
// },7)
// console.log(sum);



// How to fatten an array 
// converting 2d and 3d array into one dimensional array 

// const arr = [
//         ['zone_1', 'zone_2'],
//         ['zone_3', 'zone_4'],
//         ['zone_5', 'zone_6'],
//         ['zone_7', ['zone_7', ['zone_7', 'zone_8']]]
//     ];

// // let flatArr = arr.reduce((accum, currVal)  => { 
// //           return accum.concat(currVal);
// // })

// console.log(arr.flat(Infinity));







// console.log(flatArr);


// const arr = [ ['zone_1', 'zone_2'], ['zone_3', ['zone_1', 'zone_2', ['zone_1', 'zone_2']]] ];
// console.log(arr.flat(3));
// console.log(arr);

