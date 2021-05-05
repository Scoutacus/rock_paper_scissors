//Uses Math.Random to randomly pick one of the 3 objects in the array as it's value to be passed on too singleRound()
function computerPlay(){
    var items= ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * items.length);
    return items[index];
}

//functions that call singleRound() on button click
const rock = function(){
    singleRound("rock", computerSelection= computerPlay());
}
const paper = function(){
    singleRound("paper", computerSelection= computerPlay());
}
const scissors = function(){
    singleRound("scissors", computerSelection= computerPlay());
}

//function that runs a single round of RPS
function singleRound(playerSelection, computerSelection){
    let playerWin
    let playerScore = 0;
    let computerWin
    let computerScore = 0;


    //RPS logic
    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Computer chose : " + computerSelection);
        console.log(playerWin = "Congrats, you win!");
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("Computer chose : " + computerSelection);
        console.log(playerWin = "Congrats, you win!")
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Computer chose : " + computerSelection);
        console.log(playerWin = "Congrats, you win!")
    } else if(playerSelection === computerSelection){
        console.log("Computer chose : " + computerSelection);
        console.log("Draw!")
    } else(console.log("Computer chose : " + computerSelection), console.log(computerWin = "Oh sorry! You lose!"))

    //increments score and returns the value
    if(playerWin === true){
        playerScore++
        return console.log(playerScore)
    }else if(computerWin === true){
        computerScore++
        return console.log(computerScore)
    }
}
