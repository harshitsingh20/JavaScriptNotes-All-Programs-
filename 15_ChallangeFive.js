// 😀8: challenge Time 🏁

// Array.prototype.splice() 🙋‍♂️
// Adds and/or removes elements from an array.
// array.splice(index, howmany, item1, ....., itemX)

// 1: Add December at the end of an array?
// 2: What is the return value of splice method?
// 3: update march to March (update)?
// 4: Delete June from an array?


// sol1: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];
// mothhs.push("December")      // add the the end
// console.log(months);


// sol2:
// console.log(newMonth);


// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('June');

// if(indexOfMonth != -1){
//     const updateMonth = months.splice(indexOfMonth,1,'june');
//     console.log(months);
// }else{
//     console.log('No such data found');
// }



// sol4: 
// const months = ['Jan', 'march', 'April', 'June', 'July'];

// const indexOfMonth = months.indexOf('April');

// if(indexOfMonth != -1){
//   const updateMonth = months.splice(indexOfMonth,2);
//   console.log(months);
//   console.log(updateMonth);
// }else{
//   console.log('No such data found');
// }