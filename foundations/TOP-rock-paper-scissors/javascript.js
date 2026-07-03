let hand = ["rock", "paper", "scissors"]

function getComputerChoice() {
    var computerChoice = Math.random() * 10 % 3;
    return computerChoice.toString()[0];
}

function getHumanChoice() {
    var humanChoice = prompt("Choose Rock, Paper or Scissors").toLocaleLowerCase();
    return hand.indexOf(humanChoice);
}

let humanScore = 0
let computerScore = 0

function playRound() {
    do {
        var humanSelection = getHumanChoice()
        var computerSelection = getComputerChoice()

        console.log("Human plays: " + hand[humanSelection]);
        console.log("Computer plays: " + hand[computerSelection]);

        if (humanSelection - computerSelection == -2 || humanSelection - computerSelection == 1) {
            humanScore = humanScore + 1
            alert("Un punto para ti Crack!\nYo: " + humanScore + "\nMáquina: " + computerScore)
        } else if (humanSelection - computerSelection == 2 || humanSelection - computerSelection == -1) {
            computerScore = computerScore + 1
            alert("Te va a ganar una máquina Manco!\nYo: " + humanScore + "\nMáquina: " + computerScore)
        } else if (humanSelection == computerSelection) {
            alert("Empate\nYo: " + humanScore + "\nMáquina: " + computerScore);
        }

    } while (humanScore < 5 && computerScore < 5) {
        alert("Se acabó la partida... \nPuntuación: \n" + "Máquina: " + computerScore + "\nCrack: " + humanScore);
    }
}

playRound();