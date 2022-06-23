// Function Curring

// eg: - sum(3)(5)(8)

// const sum = (num1) => {
//     // console.log(num1);
//     return (num2) => {
//         // console.log(num1,num2);
//         return (num3) => {
//             console.log(num1, num2, num3);
//         }
//     }
// }
// sum(3)(5)(8);



// Call back Hell

setTimeout(() => {
    console.log("1 Work is done");
    setTimeout(() => {
        console.log("2 Work is done");
        setTimeout(() => {
            console.log("3 Work is done");
            setTimeout(() => {
                console.log("3 Work is done");
                setTimeout(() => {
                    console.log("5 Work is done");
                    setTimeout(() => {
                        console.log("6 Work is done");
                    }, 1000)
                }, 1000)
            }, 1000)
        }, 1000)
    }, 1000)
}, 1000)