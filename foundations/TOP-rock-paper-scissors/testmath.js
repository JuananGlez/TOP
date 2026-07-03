let hand = ["rock", "paper", "scissors"]

function getComputerChoice() {
    var computerChoice = Math.random() * 10 % 3;
    return computerChoice
}

var computerSelection = getComputerChoice()
console.log(computerSelection);

console.log(computerSelection.toString()[0]);
