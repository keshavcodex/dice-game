function playerName(playerNumber) {
    var name = prompt("Enter name of Player" + (playerNumber + 1) + ".");
    if (name != null) {
        const nameSplitter = name.split(" ");
        name = nameSplitter[0];
        document.querySelectorAll('.player')[playerNumber].innerText = name;
    }

    if (document.querySelectorAll('.player')[playerNumber].innerText === "") {
        document.querySelectorAll('.player')[playerNumber].innerText = "Player " + playerNumber;
    }
}

function random() {
    var num = Math.random();
    num *= 6;
    return Math.floor(num) + 1;
}
function diceChanger(num, imageName) {
    switch (num) {
        case 1:
            document.querySelector(imageName).setAttribute("src", "images/dice1.png");
            break;
        case 2:
            document.querySelector(imageName).setAttribute("src", "images/dice2.png");
            break;
        case 3:
            document.querySelector(imageName).setAttribute("src", "images/dice3.png");
            break;
        case 4:
            document.querySelector(imageName).setAttribute("src", "images/dice4.png");
            break;
        case 5:
            document.querySelector(imageName).setAttribute("src", "images/dice5.png");
            break;
        case 6:
            document.querySelector(imageName).setAttribute("src", "images/dice6.png");
            break;
    }
}
// ========================= Main Method =============================

for (let i = 0; i < 2; i++) {
    playerName(i);
}
var score1 = 0;
var score2 = 0;

document.getElementById("refresh").addEventListener("click", diceRoll);
function diceRoll() {

        diceOne = random();
        diceTwo = random();
        score1 += diceOne;
        score2 += diceTwo;

        document.querySelectorAll(".score")[0].innerHTML = "score = " + score1;
        document.querySelectorAll(".score")[1].innerHTML = "score = " + score2;
        // console.log("D1 = " + diceOne + " D2 = " + diceTwo);

        diceChanger(diceOne, ".img1");
        diceChanger(diceTwo, ".img2");
}
