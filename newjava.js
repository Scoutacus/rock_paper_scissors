//Uses Math.Random to randomly pick one of the 3 objects in the array as it's value to be passed on too singleRound()
function computerPlay(){
    var items= ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * items.length);
    return items[index];
}

//functions that call singleRound() on button click
// const rock = function(){
//     singleRound("rock", computerSelection= computerPlay());
// }
// const paper = function(){
//     singleRound("paper", computerSelection= computerPlay());
// }
// const scissors = function(){
//     singleRound("scissors", computerSelection= computerPlay());
// }
let result
let score = 0
let cpuScore = 0
//function that runs a single round of RPS
function singleRound(playerSelection, computerSelection){

    //RPS logic
    if (playerSelection == "rock" && computerSelection == "scissors"){
        console.log("Computer chose : " + computerSelection);
        console.log(result = "Congrats, you win!");
    } else if(playerSelection == "paper" && computerSelection == "rock"){
        console.log("Computer chose : " + computerSelection);
        console.log(result = "Congrats, you win!")
    } else if(playerSelection == "scissors" && computerSelection == "paper"){
        console.log("Computer chose : " + computerSelection);
        console.log(result = "Congrats, you win!")
    } else if(playerSelection === computerSelection){
        console.log("Computer chose : " + computerSelection);
        console.log(result = "Draw!")
    } else(console.log("Computer chose : " + computerSelection), console.log(result = "Oh sorry! You lose!"))
    
}

document.getElementById('rock').onclick = function(){
    singleRound("rock", computerPlay());
}
document.getElementById('paper').onclick = function(){
    singleRound("paper", computerPlay());
}
document.getElementById('scissors').onclick = function(){
    singleRound("scissors", computerPlay());
}
document.getElementById('container').onclick = function(){
    if(result == "Congrats, you win!"){
        result = undefined;
        score ++
        document.getElementById("player").innerHTML = "Player Score: " + score;
        console.log("Your score is: " + score);
    }else if(result == "Oh sorry! You lose!"){
        result = undefined;
        cpuScore ++
        document.getElementById("cpu").innerHTML = "CPU Score: " + cpuScore;
        console.log("CPU score is " + cpuScore)
    } else if(result == "Draw!"){
        result = undefined;
    }
    if(score == 5){
        alert("Hey, you actually won!");
        score = 0;
        cpuScore = 0;
    } else if(cpuScore == 5){
        alert("Aw man, I'm so sorry, but you lose!")
        cpuScore = 0;
        score = 0;
    }
    
}

