function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    //console.log(num);
    if(num===0){
        return "rock";
    }
    else if(num===1){
        return "paper";
    } 
    else {
        return "scissors";
    }
}
//console.log(getComputerChoice());
//function playRound()

function playerSelection(){
    var p = prompt("Choose Rock,Paper or Scissors.");
    if(p.toUpperCase()==="ROCK"){
        return "rock";
    }
    if(p.toUpperCase()==="PAPER"){
        return "paper";
    }
    if(p.toUpperCase()==="SCISSORS"){
        return "scissors";
    }
}
function playRound(playerSelection, computerSelection) {
    if(playerSelection==='rock'){
        if(computerSelection==='rock'){
            console.log("Draw!");
            return "draw";
        }
        if(computerSelection==='paper'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
        if(computerSelection==='scissors'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return "win";
        } 
    }
    if(playerSelection==='paper'){
        if(computerSelection==='paper'){
            console.log("Draw!");
            return "draw";
        }
        if(computerSelection==='scissors'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return "lose";
        }
        if(computerSelection==='rock'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return "win";
        } 
    }
    if(playerSelection==='scissors'){
        if(computerSelection==='paper'){
            console.log(`You win! ${playerSelection} beats ${computerSelection}`);
            return "win";
        }
        if(computerSelection==='scissors'){
            console.log("Draw!");
            return "draw";
        }
        if(computerSelection==='rock'){
            console.log(`You lose! ${computerSelection} beats ${playerSelection}`);
            return "lose";
        } 
    }
}
function game(){
    let compwin = 0;
    let youwin = 0;
    for(i=0;i<5;++i){
        const ps = playerSelection();
        const computerSelection = getComputerChoice();
        console.log(`Your Choice ${ps}`);
        console.log(`Computer choice ${computerSelection}`);
        console.log(`Result of Round ${i+1}: `);
        let curr = playRound(ps, computerSelection);
        console.log("************************************");
        if(curr==='lose'){
            ++compwin;
        }
        if(curr==='win'){
            ++youwin;
        }
    }
    console.log("FINAL RESULT : ");
    if(compwin>youwin){
        console.log("You lose!");
    }
    if(compwin===youwin){
        console.log("Draw!");
    }
    if(compwin<youwin){
        console.log("You win!");
    }
    console.log(`Compwin is ${compwin}`);
    console.log(`Youwin is ${youwin}`);
}
game();
