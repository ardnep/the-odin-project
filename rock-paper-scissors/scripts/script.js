const moveOptions = ["rock", "paper", "scissors"];

function computerPlay() {
    // generate a random integer between 0 and 2
    let computerChoice = Math.floor(Math.random() * (3 - 0) + 0);
    
    return moveOptions[computerChoice];
}

function getRoundWinner(playerSelection, computerSelection) {
    // convert playerSelection to human readable
    playerSelection = moveOptions[playerSelection - 1];

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
            return "invalid";
    } 
}

function getOverallWinner(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "player";
    } else if (computerScore > playerScore) {
        return "computer";
    } else {
        return "draw";
    }
}

function playGame(maxRounds) {
    let playerScore = 0;
    let computerScore = 0;

    // running game for multiple rounds and changing scores accordingly
    for (let i = 0; i < maxRounds; i++) {
        let computerSelection = computerPlay();
        let playerSelection;
        while (!playerSelection) {
            playerSelection = prompt("Choose your move:- (1): Rock (2): Paper (3): Scissors");
        }
        
        let roundWinner = getRoundWinner(playerSelection, computerSelection);

        switch (true) {
            case roundWinner === "player":
                playerScore++;
                console.log("You Win This Round!");
                break;
            
            case roundWinner === "computer":
                computerScore++;
                console.log("You Lose This Round!");
                break;

            case roundWinner === "draw":
                console.log("It's a Draw!");
                break;

            case roundWinner === "invalid":
                i--;
                console.log("Please enter a valid move and try again!");
        }
    }

    // displaying overall scores
    console.log("Your Overall Score: " + playerScore);
    console.log("Computer's Overall Score: " + computerScore);

    // finding the overall winner
    let overallWinner = getOverallWinner(playerScore, computerScore); 
    if (overallWinner === "player") {
        console.log("Final Result: You won!");
    } else if (overallWinner === "computer") {
        console.log("Final Result: You lost!");
    } else {
        console.log("Final Result: It's a draw!");
    }
}


// playGame(5);
