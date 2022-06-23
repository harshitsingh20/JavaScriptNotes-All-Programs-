// Four ways to create date

// 1) new Date()

let abc = new Date()
console.log(abc);

console.log(new Date().toDateString()); // To Find the locol Date

console.log(new Date().toLocaleTimeString()); // To find the locol time

console.log(new Date().toString()); // It gives date and time with GMT

console.log(Date.now()); // It gives the milliseconds

// 2) new Date(year,months,day,hours,minuts,milliseconds)

// Months starts with 0 - 12 (Jan - Dec)

let har = new Date(2022, 4, 22, 12, 1, 2)
console.log(har);

// 3) Date Methods

var currDate = new Date()
console.log(currDate.getFullYear()); // It gives the year
console.log(currDate.getMonth()); // It gives the months
console.log(currDate.getDate()); // It gives the current date
console.log(currDate.getDay()); // It gives the current day


// 4) Set time

var currTime = new Date()
console.log(currTime.setDate(5));
console.log(currTime.getFullYear(2022));
console.log(currTime.setMonth(2));