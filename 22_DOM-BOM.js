// a) Windows Methods

// 1) setTimeout()
// 2) setInterval()

// Windows Properties

// 1) innerHeight
// 2) innerWidth


// b) Navigate through DOM

// 1) document.documentElement      // It gives the root element
// 2) document.head
// 3) document.body
// 4) document.body.childNodes (includes tab, Enter and wide space )

// c) CSS Document Style 

// const firstChild = document.firstElementChild.firstElementChild
// firstChild.style.color = "red";

// OR

// By using query selecter

// const childTwo = document.querySelector('.two')      // (.) is for class and (two) is class name


// D) Change content inside the web page using JS.

// < script >
//     function sum() {
// document.getElementById('two').innerHTML = "Hello Harshit"       // Using ID
//     } 
//     </script>

// OR

// < script >
//     function sum() {
// document.getElementsByClassName('two').innerHTML = "Hello Harshit"       // Using Class
//     }
//     </script>


// OR


// < script >
//     function sum() {
// document.getElementsByTagName('p').innerHTML = "Hello Harshit"       // Using Tag
//     } 
//     </script>



// Find document by name

// document.getElementsByTagName('gender')      // USing in HTML form



// E) QuerySelector: - It find the first matching element and change the data in it.

// const childTwo = document.querySelector('.two').innerHTML = "Hello"      // Class data change


// const childTwo = document.querySelector('#two').innerHTML = "Hello"      // ID data change


// const childTwo = document.querySelector('p').innerHTML = "Hello"         // Tag data change



// F) QuerySelectorAll:- return all the element(matching element)


// const childTwo = document.querySelectorAll('.two').innerHTML = "Hello"      // Class data change


// const childTwo = document.querySelectorAll('#two').innerHTML = "Hello"      // ID data change


// const childTwo = document.querySelectorAll('p').innerHTML = "Hello"         // Tag data change



// Different Between document.getElementById() and querySelector()

// document.getElementById()

// Syntax:- document.getElementById(ID)
// it return null
// It is fast 


// querySelector(selector)

// Syntax:- document.querySelector()

// It find the first matching element and change the data in it

// Null when no match is found