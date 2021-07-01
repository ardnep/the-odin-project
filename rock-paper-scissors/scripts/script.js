const moveOptions = ["rock", "paper", "scissors"];

function computerPlay() {
    // generate a random integer between 0 and 2
    let computerChoice = Math.floor(Math.random() * (3 - 0) + 0);
    
    return moveOptions[computerChoice];
}

function playRound(playerSelection, computerSelection) {
    // make playerSelection case *in*-sensative
    playerSelection = playerSelection.toLowerCase();

    switch (true) {
        case (playerSelection === computerSelection):
            return "draw";
        
        case (playerSelection === "rock" && computerSelection === "paper"):
        case (playerSelection === "paper" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "rock"):
            return "computer";
        
        case (playerSelection === "paper" && computerSelection === "rock"):
        case (playerSelection === "rock" && computerSelection === "scissors"):
        case (playerSelection === "scissors" && computerSelection === "paper"):
            return "player"; 
        
        default:
            return "invalid player move";
    } 
}

let computerSelection = computerPlay();
console.log("Computer's Move: " + computerSelection);
let playerSelection;
while (!playerSelection) {
    playerSelection = prompt("Choose your move");
}
console.log("Winner: " + playRound(playerSelection, computerSelection));