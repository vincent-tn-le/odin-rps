function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playRound(playerSelection, computerSelection) {
    if (playerScore == 5 | computerScore == 5) {
        return;
    }
    else if (playerSelection == "rock" & computerSelection == "paper") {
        return "You lose! Paper beats Rock"
    }
    else if (playerSelection == "rock" & computerSelection == "scissors") {
        return "You win! Rock beats Scissors"
    }
    else if (playerSelection == "paper" & computerSelection == "rock") {
        return "You win! Paper beats Rock"
    }
    else if (playerSelection == "paper" & computerSelection == "scissors") {
        return "You lose! Scissors beats Paper"
    }
    else if (playerSelection == "scissors" & computerSelection == "rock") {
        return "You lose! Rock beats Scissors"
    }
    else if (playerSelection == "scissors" & computerSelection == "paper") {
        return "You win! Scissors beats Paper"
    }
    else if (playerSelection == computerSelection) {
        return "Tie Game"
    }
}


// Setting the initial scores
let playerScore = 0;
let computerScore = 0;
document.getElementById("player-score").innerHTML = `Player Score: ${playerScore}`;
document.getElementById("computer-score").innerHTML = `Computer Score: ${computerScore}`;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = playRound(button.className, computerPlay())
        console.log(result);
        // After each round, result of the round will be displayed and score will be updated
        if (result.includes("win")) {
            playerScore++;
            document.getElementById("round-result").innerHTML = result;
            document.getElementById("player-score").innerHTML = `Player Score: ${playerScore}`;
        }
        else if (result.includes("lose")) {
            computerScore++;
            document.getElementById("round-result").innerHTML = result;
            document.getElementById("computer-score").innerHTML = `Computer Score: ${computerScore}`;
        }
        else {
            document.getElementById("round-result").innerHTML = result;
        }

        if (playerScore == 5) {
            document.getElementById("round-result").innerHTML = "Player has won! :)";
        }
        else if (computerScore == 5) {
            document.getElementById("round-result").innerHTML = "Computer has won! :(";
        }
    })
});