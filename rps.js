let userPoints = 0;
let compPoints = 0;
const buttons = document.querySelectorAll("button");
const result = document.querySelector(".result");
result.setAttribute('style', 'white-space: pre;');
function getComputerChoice() {
    let num = Math.floor(Math.random() * 3);
    //console.log(num);
    if (num === 0) {
        return "rock";
    }
    else if (num === 1) {
        return "paper";
    }
    else {
        return "scissors";
    }
}
function displayRunningScore() {
    const yourScore = document.querySelector("div.points > span#you");
    const computerScore = document.querySelector("div.points > span#computer");
    yourScore.textContent =  userPoints;
    computerScore.textContent =  compPoints;
}
function playRound(playerSelection, computerSelection) {

    if (userPoints === 5 || compPoints === 5) {
        let winner = '';
        if (userPoints > compPoints) {
            winner = 'You';
        } else {
            winner = 'Computer';
        }
        
        result.textContent += "\r\n" + winner + " won the game.To play again, please refresh the page."
        disableButtons();
        return;
    }

    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            displayRunningScore()
            result.textContent += "Draw\r\n";
        }
        if (computerSelection === 'paper') {
            displayRunningScore()
            ++compPoints;
            result.textContent += "You lost this round\r\n";
        }
        if (computerSelection === 'scissors') {
            displayRunningScore()
            ++userPoints;
            result.textContent += "You won this round\r\n";
        }
    }

    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            displayRunningScore()
            result.textContent += "Draw\r\n";
        }
        if (computerSelection === 'scissors') {
            displayRunningScore()
            ++compPoints;
            result.textContent += "You lost this round\r\n";
        }
        if (computerSelection === 'rock') {
            displayRunningScore()
            ++userPoints;
            result.textContent += "You won this round\r\n";
        }
    }

    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            displayRunningScore()
            ++userPoints;
            result.textContent += "You won this round\r\n";
        }
        if (computerSelection === 'scissors') {
            displayRunningScore()
            result.textContent += "Draw\r\n";
        }
        if (computerSelection === 'rock') {
            displayRunningScore()
            ++compPoints;
            result.textContent += "You lost this round\r\n";
        }
    }
}
// function game() {
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id, getComputerChoice());
    })
});
// }
function disableButtons() {
    buttons.forEach(button => {
        button.disabled = true
    })
}
// game();