// HTML events are "things" that happen to HTML elements.

// When JavaScript is used in HTML pages, JavaScript can "react" on these events.

// Here are some examples of HTML events:

// a) An HTML web page has finished loading
// b) An HTML input field was changed
// c) An HTML button was clicked
// d) onchange:- An HTML element has been changed

// HTML Events: - Anything when browser does or user does. eg:- button clicked,webpage loding, input data


// 4 ways to write a events in javaScript

// 1) Using alert();

// eg:- By using Refrence

// < script >
// const takref = document.getElementById('har')
// takref.onclick = function () {
//         alert("Hiiiiiiiiiiiiiiiiiii")
//     } 
// </script>

// 2) By calling function:- Call same event not multiple times

// eg: - 
// {
/* <p id="har">Hello</p> */
// }

// <script>
//      const takref = document.getElementById('har')
//      takref.onclick = function () {
//         alert("Hiiiiiiiiiiiiiiiiiii")
//     } 
//     </script>




// 3) Inline Events (HTML onclick property)


// eg- <a href="#" class="abc" onclick = "alert('Hello')" > Sample Inline Example </a>


// 4 Using Event listner(addEventListner):- Call same event multiple times

// syntax:- abc.addEventListner(Event,function,false/true ) // It takes three Parameters


// < /script>
// const abc = document.querySelector('#har')

// abc.addEventListener('click', ()=>{
//     alert("Sample Add Event Listner")
// })
// < /script>


// Event Object:- Capital Event is the parent or small event. eg:- MouseEvent, focusEvent, KeyboardEvent, etc.

{
    /* <script>
        const abc = document.getElementById('ab');
        const cheakEvent = () => {
            alert('Cheak Event')
            console.log(event);             //This wil show all the part of event
            console.log(event.target);      
            console.log(event.type);
        }
        abc.addEventListener('click','cheakEvent')
    </script> */
}



// MouseEvent: - Those event which are realated to our mouse in HTML document.

// eg:-

{
    /* <p id='mo' onmousedown='fun1()' onmouseup='fun2()'>
        Hello Harshit Singh
    </p>

    <script>

        function fun1(){
            alert('Running 1')
            document.getElement.ID('mo').style.color="red"
        }

        function fun2(){
            alert('Running 2')
            document.getElement.ID('mo').style.color = "yellow"
        }

    </script> */
}

// OR

// mouseenter and mouseleve



// KeyboardEvent: - Event occur when user enter the key.

{
    /* <input type='text' class ='ip' onkeypress="fun1()" onkeyup="fun2()" onkeydown="fun3()"></input> */ }

{
    /* <script>
        function fun1(){
            document.getElementsByClassName('ip').innerHTML='Hello'
        }
        function fun2() {
            document.getElementsByClassName('ip').innerHTML = 'Harshit'
        }
        function fun3() {
            document.getElementsByClassName('ip').innerHTML = 'Singh'
        }
    </script> */
}



// Input Events in JavaScript:- In this we use onchange="" event.


// <div>
//     <lable for=""> Your Name </lable>
//     <input type="text" name="" id="haf">    </input>
//     <br>
//     <lable>Choose ice
//     <select id="axz" name="ice" onchange="changeInp()">
//     <option value="">Select One</option>
//     < option value = "Choclate" > Choclate < /option>
//     < option value = "Chips" > Chips < /option></option>
//     </select>
//     </lable>
//     <div id="q">    </div>
// </div>


{
    /* <Script>
        const changeInp = () =>{
            const ice = document.getElementById('haf').value;
            const ice2 = document.getElementById('axz').value;
            const ice3 = document.getElementById('q');
            ice3.innerHTML = `${ice} and ${ice2}`
        }    
    </Script> */
}


// OR

{
    /* <Script>
        const ice = document.getElementById('haf');
        ice.addEventListener("chang",()=>{
            const ice = document.getElementById('haf').value;
            const ice2 = document.getElementById('axz').value;
            const ice3 = document.getElementById('q');
            ice3.innerHTML = `${ice} and ${ice2}
        });
    </Script> */
}