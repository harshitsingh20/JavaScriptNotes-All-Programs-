// 😀9: challenge Time 🏁

//  1: Find the square root of each element in an array?
//  2: Multiply each element by 2 and return only those 
//     elements which are greater than 10?

// sol1: 
// let arr = [25, 36, 49, 64, 81];

// let arrSqr = arr.map((curElem) =>  Math.sqrt(curElem) )
// console.log(arrSqr);

// sol 2: 
//  let arr = [2, 3, 4, 6, 8]; 

//  let arr2 = arr.map((curElm) => curElm * 2).filter((curElem) => curElem > 10 ).reduce((accumulator, curElem) => {
//       return accumulator += curElem;
//     });
//  console.log(arr2);

// we can use the chaining too 