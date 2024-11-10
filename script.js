let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    choice = Math.floor(Math.random(0) * (3 - 1 + 1 ) + 1 );
    if (choice == 1){
        return "rock"
    }
    else if (choice == 2){
        return "paper"
    }
    else{
        return "scissors"
    }
}

function getHumanChoice(){
    return prompt("Rock, Paper, Scissors?")
}

const computerChoice = getComputerChoice();
const humanChoice = getHumanChoice();

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === computerChoice){
        console.log("It's a tie!");
    }
    else if(humanChoice == 'paper' && computerChoice == 'scissors'){
        console.log("You lose! Scissors beat Paper.")
        computerScore++;
    }
    else if(humanChoice == 'paper' && computerChoice == 'rock'){
        console.log("You win! Paper beats Rock.")
        humanScore++;
    }
    else if(humanChoice == 'rock' && computerChoice == 'paper'){
        console.log("You lose! Paper beats Rock.")
        computerScore++;
    }
    else if(humanChoice == 'rock' && computerChoice == 'scissors'){
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'rock'){
        console.log("You lose! Scissors beat Rock.")
        computerScore++;
    }
    else if(humanChoice == 'scissors' && computerChoice == 'scissors'){
        console.log("You win! Rock beats Scissors.")
        humanScore++;
    }
}

playRound(humanChoice, computerChoice);

