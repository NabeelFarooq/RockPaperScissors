
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
function winMessage(){
    const result = document.querySelector(".result");
    result.textContent = "You win!";
    ++uWin;
}
function loseMessage(){
    const result = document.querySelector(".result");
    result.textContent = "You lose!";
    ++compWin;
}
function drawMessage(){
    const result = document.querySelector(".result");
    result.textContent = "Draw!";
}
function displayFinalResult(){
    const finalResult = document.querySelector("#finalResult");
    if(compWin === uWin){
        finalResult.textContent = "Final Result: Draw!";
    } else if(compWin > uWin){
        finalResult.textContent = "Final Result: You lose!";
    } else{
        finalResult.textContent = "Final Result: You win!";
    }

}
function playRound(playerSelection, computerSelection) {
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            drawMessage();
        }
        if (computerSelection === 'paper') {
            loseMessage();
        }
        if (computerSelection === 'scissors') {
            winMessage();
        }
    }
    if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            drawMessage();
        }
        if (computerSelection === 'scissors') {
            loseMessage();
        }
        if (computerSelection === 'rock') {
            winMessage();
        }
    }
    if (playerSelection === 'scissors') {
        if (computerSelection === 'paper') {
            winMessage();
        }
        if (computerSelection === 'scissors') {
            drawMessage();
        }
        if (computerSelection === 'rock') {
            loseMessage();
        }
    }
}
function game() {
    numberOfMouseClicks = 0;
    compWin = 0;
    uWin = 0;
    const rock = document.querySelector("#rock");
    const paper = document.querySelector("#paper");
    const scissor = document.querySelector("#scissors");
    const yourChoice = document.querySelector("#yChoice");
    const computerChoice = document.querySelector("#cChoice");
    if(numberOfMouseClicks<5){
        rock.addEventListener('click', () => {
            ++numberOfMouseClicks;
            yourChoice.textContent = "Your choice: Rock";
            const computerSelection = getComputerChoice();
            computerChoice.textContent = `Computer choice: ${computerSelection}`;
            playRound("rock", computerSelection);
        });
        paper.addEventListener('click', () => {
            ++numberOfMouseClicks;
            yourChoice.textContent = "Your choice: Paper";
            const computerSelection = getComputerChoice();
            computerChoice.textContent = `Computer choice: ${computerSelection}`;
            playRound("paper", computerSelection);
        });
        scissor.addEventListener('click', () => {
            ++numberOfMouseClicks;
            yourChoice.textContent = "Your choice: Scissors";
            const computerSelection = getComputerChoice();
            computerChoice.textContent = `Computer choice: ${computerSelection}`;
            playRound("scissors", computerSelection);
        });
    }
    else{
        displayFinalResult();
    }
    
}

game();