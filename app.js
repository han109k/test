// setTimeout(() => {
//     document.body.style.backgroundColor = "red";  
//     setTimeout(() => {
//         document.body.style.backgroundColor = "blue";    
//     }, 1000);
// }, 1000);


// function changeColor(color, delay, next) {
//     setTimeout(() => {
//         document.body.style.backgroundColor = color;    
//         if(next) {
//             next();
//         }
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("blue", 1000, () => {
//         changeColor("brown", 1000, () => {
//             changeColor("cyan", 1000, () => {})
//         })
//     })
// })

function changeColor2(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            if(document.body.style.backgroundColor !== color) {
                reject("Typo There! @changeColor2");
            } else {
                resolve();
            }
        }, delay);
    })
}

changeColor2("red", 1000)
    .then(() => changeColor2("blue", 1000))
    .then(() => changeColor2("cyan", 1000))
    .catch((err) => console.log("Something went wrong :/", err));