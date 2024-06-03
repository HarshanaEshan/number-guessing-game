let chance = 0;

let btnGess = document.getElementById("btn-gess");

let txtCongratulation = document.getElementById("congratulation");
let txtTryagain = document.getElementById("tryagain");
let txtHint = document.getElementById("Hint");

let randomNumber = Math.floor(Math.random() * 11);
console.log(randomNumber);

function gess() {
    let gessingNumber = parseFloat(document.getElementById("gessing-number").value);

    if (isNaN(gessingNumber)) {
        txtTryagain.innerHTML = "Enter your guessing number.";
        chance = 0;
        return;
    } 
    chance += 1;
    if (randomNumber === gessingNumber) {
        txtCongratulation.innerHTML = "Congratulations<br/>You win ...!!!";
        txtTryagain.innerHTML = "";
        txtHint.innerHTML = "";
        btnGess.disabled = true;  // Disable button
        return;  // Exit the function after correct guess
    } 
    
    if (chance <= 4) {
        txtTryagain.innerHTML = "Try again.";
        txtHint.innerHTML = randomNumber > gessingNumber ? 
            "The winning number is greater than your number." : 
            "The winning number is less than your number.";
    } else {
        txtTryagain.innerHTML = "Game Over.";
        txtHint.innerHTML = "Your chances are over.<br/>The winning number is "+randomNumber;
        btnGess.disabled = true;  // Disable button
        return;  // Exit the function after game over
    }
}

btnGess.addEventListener("click", gess);
