function computerPlay(){
    var items= ["rock", "paper", "scissors"];
    var index = Math.floor(Math.random() * items.length);
    return items[index];
}

function singleRound(playerSelection, computerSelection){
    const buttons = document.querySelector('button');
    buttons.forEach((buttons) => {
        buttons.addEventListener('click', () =>{

        })
    });

    computerSelection = computerPlay();

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
}