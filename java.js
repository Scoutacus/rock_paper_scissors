function computerPlay(){
    var items= ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * items.length);
    return items[index];
}

function singleRound(playerSelection, computerSelection){
    var playerSelection = prompt("rock, paper, or scissors?");
    playerSelection = playerSelection.toLowerCase();

    computerSelection = computerPlay();

    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Congrats, you win!");
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("Congrats, you win!")
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Congrats, you win!")
    } else if(playerSelection === computerSelection){
        console.log("Draw!")
    } else(console.log("Oh sorry! You lose!"))
}

console.log(singleRound());