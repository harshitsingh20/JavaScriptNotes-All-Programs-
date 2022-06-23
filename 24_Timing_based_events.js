// Time intervals are called timing events

// Two methods used in JavaScript

// 1) setTimeout(function,milliseconds):- It runs only one time after set of time intervals. eg = lucky draw


{/* <div class="main-div">
    <div>
        <p>My name</p>
        <p id="a"></p>
        <button id = "btn">Click</button>
    </div>
</div>


<script>
    const showName = document.querySelector('#a');
    const showbtn  = document.querySelector('#btn');
    const showFun = ()=>{
        setTimeout(()=>{
            showName.innerHTML="Harshit"
        },1000)
    }

    showbtn.addEventListener('click', showFun);
</script> */}


// 2) clearTimeout()

{/* <div>
    <p>Hello</p>
    <p> Hello </p>
    <button onclick='fuuu= setTimeout(fun1(),2000)' > Try it</button>
    <button onclick='clearTimeout(fuu)'>Stop</button>

</div> */}

// 3) setIntervals(function,millisecons): - It runs multiple times. eg= time countdown


{/* <div class="main-div">
    <div>
        <p>My name</p>
        <p id="a"></p>
        <button id = "btn">Click</button>
    </div>
</div> */}

{/* <script>
    const stopNum = document.querySelector('#a')
    const  aaz = document.querySelector(#btn)
    let num = 0;
    const showFunnn = ()=>{
        setInterval(()=>{
            stopNum.innerHTML = `${num}`
            num++;
        })
    }
    aaz.addEventListener('click',showFunnn)
</script> */}



// 4) clearIntervals(function,millisecons)

{/* <div class="main-div">
    <div>
        <p>My name</p>
        <p id="a"></p>
        <button id = "btn">Click</button>
        < button id = "btn2" > Stop < /button>
    </div>
</div> */}

{/* <script>
    const stopNum = document.querySelector('#a')
    const  aaz = document.querySelector(#btn)
    const aazz = document.querySelector(#btn2)
    let num = 0;
    let timeref
    const showFunnn = ()=>{
        timeref = setInterval(()=>{
            stopNum.innerHTML = `${num}`
            num++;
        })
    }
    aaz.addEventListener('click',showFunnn)
    aazz.addEventListener('click',()={
        clearInterval(timeref)
    });
</script> */}