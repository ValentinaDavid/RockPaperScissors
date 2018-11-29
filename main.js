// Select Image Buttons
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

// Select Container
let container = document.querySelector(".container");

// Select Scores
let playerScore = document.querySelector("#playerScore");
let computerScore = document.querySelector("#computerScore");
let gameRound = 1;

// Add Event Listeners
rock.addEventListener('click', round);
paper.addEventListener('click', round);
scissors.addEventListener('click', round);

let result = document.createElement('div');
container.appendChild(result);

// Randomly returns Rock, Paper, or Scissors
function getRandomChoice() {
    let choices = ['rock', 'paper', 'scissors'];

    return choices[Math.floor(Math.random()*choices.length)];
}

// Runs a round of Rock, Paper, Scissors
function round() {

    let playerChoice = this.id.toUpperCase();
    let computerChoice = getRandomChoice().toUpperCase();

    if(playerChoice === computerChoice) {
        result.textContent = `Draw! The computer and you both selected ${playerChoice}.`;

        gameRound++;
    }
    else
        if ((playerChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (playerChoice === "PAPER" && computerChoice === "ROCK") ||
        (playerChoice === "SCISSORS" && computerChoice === "PAPER")) {
        result.textContent = `You win this round! ${playerChoice} beats ${computerChoice}.`;

        playerScore.textContent = +playerScore.textContent + 1;

        gameRound++;
    }
    else {
        result.textContent = `You lose this round.. ${computerChoice} beats ${playerChoice}.`;

        computerScore.textContent = +computerScore.textContent + 1;

        gameRound++;
    }

    if (gameRound > 5) {
        showWinner(playerScore, computerScore);
    }
}

function showWinner(playerScore, computerScore) {
    if(+playerScore.textContent > +computerScore.textContent) {
        result.textContent += `\nYou win!`;
    }
    else {
        result.textContent += `\nThe computer wins!`;
    }
}
