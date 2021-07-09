const moveOptions = ["rock", "paper", "scissors"];

function computerPlay() {
    // generate a random integer between 0 and 2
    let computerChoice = Math.floor(Math.random() * (3 - 0) + 0);
    
    return moveOptions[computerChoice];
}

function getRoundWinner(playerSelection, computerSelection) {
    // convert playerSelection to human readable
    // playerSelection = moveOptions[playerSelection - 1];

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

        console.log("Round: " + (i + 1));

        switch (true) {
            case roundWinner === "player":
                console.log("Computer's move was: " + computerSelection);
                playerScore++;
                console.log("You Win This Round!");
                break;
            
            case roundWinner === "computer":
                console.log("Computer's move was: " + computerSelection);    
                computerScore++; 
                console.log("You Lose This Round!");
                break;

            case roundWinner === "draw":
                console.log("Computer's move was: " + computerSelection);
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

function switchScreenMoves() {
    const startScreen = document.querySelector('#start-page');
    const main = document.querySelector('main');
    const moveOptionsScreen = getMoveOptionsScreen();

    startScreen.classList.add('switch-screen');
    startScreen.style.animationDirection = 'normal';
    
    setTimeout(function() {
        main.replaceChild(moveOptionsScreen, startScreen);
    }, 500);

    moveOptionsScreen.classList.add('switch-screen');
    moveOptionsScreen.style.animationDirection = 'reverse';
}

function getMoveOptionsScreen() {
    const moveOptionsDiv = document.createElement('div');
    moveOptionsDiv.classList.add('move-options');
    
    const rockBtn = document.createElement('button');
    rockBtn.classList.add('move-btn');
    rockBtn.textContent = "Rock"

    const paperBtn = document.createElement('button');
    paperBtn.classList.add('move-btn');
    paperBtn.textContent = "Paper"

    const scissorsBtn = document.createElement('button');
    scissorsBtn.classList.add('move-btn');
    scissorsBtn.textContent = "Scissors"

    moveOptionsDiv.appendChild(rockBtn);
    moveOptionsDiv.appendChild(paperBtn);
    moveOptionsDiv.appendChild(scissorsBtn);

    return moveOptionsDiv;
}

function playRound(playerSelection) {
    let computerSelection = computerPlay();

    console.log(getRoundWinner(playerSelection, computerSelection));
} 

function selectMove(e) {
    const chosenMove = document.querySelector(`button[id="${e.originalTarget.id}"]`)

    playRound(e.originalTarget.id);
}

const moveBtns = document.querySelectorAll('.move');

moveBtns.forEach(btn => btn.addEventListener('click', selectMove));

const playBtn = document.querySelector('#play-btn');

playBtn.addEventListener('click', switchScreenMoves);
