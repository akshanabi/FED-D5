// document.addEventListener("DOMContentLoaded", )
// let red = document.getElementByClassName('blue');
//         let button = document.getElementById("changecolor");
//         button.addEventListener("click", ()=>
//         {
//             blue.classList.add("green");
//         })


let blue = document.querySelector(".blue");
let button = document.getElementById("changecolor")
    button.addEventListener('click', function()
    {
    blue.classList.add("green");
})




// function changecolor(){
//     blue.style.backgroundColor = "green"
// }