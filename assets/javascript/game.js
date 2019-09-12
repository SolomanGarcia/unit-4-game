$(document).ready(function() {
var targetNumber = [Math.round(Math.random() * 54 + 13)];
console.log(targetNumber);
var counter = 0;
var numberOptions = [10, 11];
var increment = numberOptions[Math.round(Math.random())];
var num1 = Math.floor(Math.random() * 12 + 1);
console.log(num1)
var num2 = Math.floor(Math.random() * 12 + 1);
console.log(num2)
var num3 = Math.floor(Math.random() * 12 + 1);
console.log(num3)
var num4 = Math.floor(Math.random() * 12 + 1);
console.log(num4)
var wins = 0;
var losses = 0;

function reset() {
    counter = 0
    targetNumber = [Math.round(Math.random() * 54 + 13)]; 
    num1 = Math.floor(Math.random() * 12 + 1);
    num2 = Math.floor(Math.random() * 12 + 1);
    num3 = Math.floor(Math.random() * 12 + 1);
    num4 = Math.floor(Math.random() * 12 + 1);
    $("#number-to-guess").text("Target Score: " + targetNumber);
    $("#current-score").text("Current Score: " + counter);
}

function youWin() {
    alert("Congratulations, You're a winner! Play Again!");
    wins++;
    $("#wins").text("Number of wins: " + wins);
    reset()
}

function youLose() {
    alert("Sorry you lost. Try again!");
    losses++;
    $("#losses").text("number of losses: " + losses);
    reset();
}



$("#crystal-image1").on("click", function () {
    counter += num1;
    $("#current-score").text("Current Score: " + counter);

    if (counter == targetNumber) {
        youWin();
        
    }
    else if (counter > targetNumber) {
        youLose();
        
    }
});

$("#crystal-image2").on("click", function () {
    counter += num2;
    $("#current-score").text("Current Score: " + counter);
    

    if (counter == targetNumber) {
        youWin();
        
    }
    else if (counter > targetNumber) {
        youLose();
    }
});

$("#crystal-image3").on("click", function () {
    counter += num3;
    $("#current-score").text("Current Score: " + counter);
    

    if (counter == targetNumber) {
        youWin();
    }
    else if (counter > targetNumber) {
        youLose();                 
    }
});

$("#crystal-image4").on("click", function () {
    counter += num4;
    $("#current-score").text("Current Score: " + counter);
    

    if (counter == targetNumber) {
        youWin();
    }
    else if (counter > targetNumber) {
        youLose();
    }

});
});