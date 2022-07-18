function computerPlay() {
    let options = ["rock", "paper", "scissors"];
    return options[Math.floor(Math.random() * 3)];
}

function playerPlay() {
    let playerChoice = window.prompt("What's your play? ").toLowerCase();
    return playerChoice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == "rock" & computerSelection == "paper") {
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

function game() {
    let playerScore=0;
    let computerScore=0;

    for (let i = 0; i < 5; i++) {
        let playerChoice = playerPlay().toLowerCase()
        let computerChoice = computerPlay().toLowerCase();
        let result = playRound(playerChoice, computerChoice);
        
        if (result.includes("win")) {
            playerScore++;
            console.log(`Player wins round ${i+1}`)
        }
        else if (result.includes("lose")) {
            computerScore++;
            console.log(`Computer wins round ${i+1}`)
        }
        else {
            console.log(`Round ${i+1} is a tie. Repeat`)
            i--;
        }
        console.log(`Player Score: ${playerScore}\nComputer Score: ${computerScore}`)
    }

    if (playerScore > computerScore) {
        console.log("Player wins!");
    }

    else if (playerScore < computerScore) {
        console.log("Computer wins!");
    }
}

/*
*/

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        const result = playRound(button.className, computerPlay())
        console.log(result);
    })
})
