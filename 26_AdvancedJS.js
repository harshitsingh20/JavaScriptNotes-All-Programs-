// Event Propagation:- it is a mode of determine in which order the elements recieve the events.

// Capture Phase(top to bottom) or Trickling
// [window -> document -> <html> -> <body> -> <div> -> <button>]

// eg

{
    /* <div class="parent" id="parentID">
        <div class="chils" id="childID"></div>
    </div>

    <script>
        const parentID = document.getElementByID("parentID")
        const childID  = document.getElementByID("childID")

        const parentCall = ()=>{
            alert('parentDiv')
            console.log(parentDiv)
        }
        const childCall = () => {
            alert('childDiv')
            console.log(childCall)
        }

        parentID.addEventListner('click',parentCall, true) // true means Capture Phase
        childID.addEventListner('click', childCall, true)//false means bubbling and by default false if nothing in input
    </script> */
}



// Bubble Phase(bottom to top):- Reverse of Capture phase.


// eg

{
    /* <div class="parent" id="parentID">
        <div class="chils" id="childID"></div>
    </div>

    <script>
        const parentID = document.getElementByID("parentID")
        const childID  = document.getElementByID("childID")

        const parentCall = ()=>{
            alert('parentDiv')
            console.log(parentDiv)
        }
        const childCall = () => {
            alert('childDiv')
            console.log(childCall)
        }

        parentID.addEventListner('click',parentCall)
        childID.addEventListner('click', childCall)
    </script> */
}



// Target Phase:- Which element I am clicking


