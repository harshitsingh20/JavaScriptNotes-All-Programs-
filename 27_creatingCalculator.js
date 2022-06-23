// Higher order function:- function which takes another function as an argument.

// Call back function:- function which passed as an argument to another function




const sum = (a, b) => { // Call back function
    return a + b
}
const sub = (a, b) => { // Call back function
    return Math.abs(a - b)
}
const div = (a, b) => { // Call back function
    return a / b
}
const mul = (a, b) => { //Call back function
    return a * b
}

const calculator = (num1, num2, operator) => {
    return operator(num1, num2)
}

// calculator(2, 4, mul) // Higher order function

console.log(calculator(2, 4, mul));