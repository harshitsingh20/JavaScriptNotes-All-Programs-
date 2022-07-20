// npm install prompt-sync (Install this package)
// prompt():- It is built in JS functionality that helps you to get inputs from user through browser.

// Prompt is used for Dynamic Inputs

// Program 1

// const prompt = require('prompt-sync')({sigint:true})
// fruit = prompt('what is your favorite fruit? \n')

// console.log(fruit);



// Program 2.

const prompt = require('prompt-sync')({sigint:true})
food = prompt('How much for food:- ')
foodPercentage = 0.2
tipAmount = food * foodPercentage
console.log(tipAmount);

// Important Points