function getComputerChoice(){
    let num = Math.floor(Math.random() * 4);
    if(num===1){
        return "Rock";
    }
    else if(num===2){
        return "Paper";
    } 
    else {
        return "Scissors";
    }
}
console.log(getComputerChoice());