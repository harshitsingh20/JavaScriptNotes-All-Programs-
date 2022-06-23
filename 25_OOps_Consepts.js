// Object Literls: - it is a simply key value pair in data structure. Storing variables and function in a container.

// How to create an object

// 1 way

let bioData = {
    myname: "Harshit Singh",
    course: "B.tech",
    getAll: function () {
        console.log(`${bioData.myname} and ${bioData.course}`);
    }
}
bioData.getAll();

// 2nd Way

let bioData2 = {
    myname: "Harshit Singh",
    course: "B.tech",
    getAll() {
        console.log(`${bioData2.myname} and ${bioData2.course}`);
    }
}
bioData2.getAll();

// 3rd way:- Object inside the object

let bioData3 = {
    myname: {
        fname: "Harshit",
        lName: "Singh"
    },
    course: "B.tech",
    getAll: function () {
        console.log(`${bioData3.myname.fname} and ${bioData3.course}`);
    }
}
bioData3.getAll();



// 'this' object in javaScript

// This object contain the current context

// 1st way

console.log(this); //This refers to the current context and that is windows object

// 2nd way

function abc() {
    console.log(this);
}
abc()

// 3rd way:- We can't use fat arrow function here.

const obj = {
    name: "Harshit",
    age: 23,
    getAll() {
        console.log(this);
    }
}
obj.getAll();