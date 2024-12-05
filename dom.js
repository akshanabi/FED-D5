let inputBox = document.getElementById("inputBox");
let result = document.getElementById("result");
let guessCount = document.getElementById("guessCount");

let randomNumber = Math.floor(Math.random() * 10);
//let num = Math.random()
//console.log(num)
console.log(randomNumber);

let noOfCount = 3

function checkNumber() {
    if (inputBox.value == randomNumber) {
        alert("You are Right");
        result.textContent = "Right";
    } else {
        noOfCount--
        if (noOfCount == 0) {
            alert("You lost the game : " + randomNumber);
            //      alert(`You lost the game ${randomNumber}`)
        }
        guessCount.textContent = "Available Chance: " + noOfCount
        alert("You are Wrong");
        result.textContent = "Wrong"
    }
}
