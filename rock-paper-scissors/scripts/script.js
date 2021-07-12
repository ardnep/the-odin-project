let maxRounds;
let currentRound = 1;
let playerScore = 0;
let computerScore = 0;

const moveOptions = ["rock", "paper", "scissors"];

const playBtn = document.querySelector('#play-btn');

playBtn.addEventListener('click', setMaxRounds);
playBtn.addEventListener('click', switchScreenMoves);


function setMaxRounds() {
    maxRounds = document.querySelector('#number-of-rounds>input').value;
}

function getComputerSelection() {
    // generate a random integer between 0 and 2
    let computerSelection = Math.floor(Math.random() * (3 - 0) + 0);

    return moveOptions[computerSelection];
}

function getRoundWinner(playerSelection, computerSelection) {
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

function getScoreBoard() {
    const scoreBoard = document.createElement('div');
    scoreBoard.classList.add('score-board');

    const previousWinnerDisplay = document.createElement('p');
    previousWinnerDisplay.textContent = 'Last Round Winner:';

    const previousMoveDisplay = document.createElement('p');
    previousMoveDisplay.textContent = 'Computer\'s Last Move:';

    const playerScoreDisplay = document.createElement('p');
    playerScoreDisplay.textContent = `Your Current Score: ${playerScore}`;

    const computerScoreDisplay = document.createElement('p');
    computerScoreDisplay.textContent = `Compter's Current Score: ${computerScore}`;

    scoreBoard.appendChild(previousWinnerDisplay);
    scoreBoard.appendChild(previousMoveDisplay);
    scoreBoard.appendChild(playerScoreDisplay);
    scoreBoard.appendChild(computerScoreDisplay);

    return scoreBoard;
}

function getCurrentRoundDisplay() {
    const currentRoundDisplay = document.createElement('h2');
    currentRoundDisplay.classList.add('current-round');
    currentRoundDisplay.textContent = `Current Round: ${currentRound}`;

    return currentRoundDisplay;
}

function getGameInfo() {
    const gameInfo = document.createElement('div');
    gameInfo.id = 'game-info';

    const currentRoundDisplay = getCurrentRoundDisplay();
    const scoreBoard = getScoreBoard();

    gameInfo.appendChild(currentRoundDisplay);
    gameInfo.appendChild(scoreBoard);

    return gameInfo;
}

function getMoveOptionsDiv() {
    const moveOptionsDiv = document.createElement('div');
    moveOptionsDiv.classList.add('move-options');

    const rockBtn = document.createElement('button');
    rockBtn.classList.add('move-btn');
    rockBtn.id = 'rock';
    rockBtn.addEventListener('click', playGame);
    rockBtn.textContent = "Rock"

    const paperBtn = document.createElement('button');
    paperBtn.classList.add('move-btn');
    paperBtn.id = 'paper';
    paperBtn.addEventListener('click', playGame);
    paperBtn.textContent = "Paper"

    const scissorsBtn = document.createElement('button');
    scissorsBtn.classList.add('move-btn');
    scissorsBtn.id = 'scissors';
    scissorsBtn.addEventListener('click', playGame);
    scissorsBtn.textContent = "Scissors"

    moveOptionsDiv.appendChild(rockBtn);
    moveOptionsDiv.appendChild(paperBtn);
    moveOptionsDiv.appendChild(scissorsBtn);

    return moveOptionsDiv;
}

function getPlayScreen() {
    const playScreen = document.createElement('div');
    playScreen.id = 'play-screen';

    const moveOptionsDiv = getMoveOptionsDiv();
    const gameInfo = getGameInfo();

    playScreen.appendChild(moveOptionsDiv);
    playScreen.appendChild(gameInfo);

    return playScreen;
}

function getOverScreen() {
    const overScreen = document.createElement('div');
    overScreen.id = 'over-screen';

    const gameOver = document.createElement('h2');
    gameOver.textContent = 'Game Over!';

    const winnerDisplay = document.createElement('h3');
    let winner = getOverallWinner(playerScore, computerScore);
    winnerDisplay.textContent = `The Overall Winner is: ${winner}`;

    const playScreen = document.getElementById('play-screen');
    const gameInfo = playScreen.childNodes[1];
    const scoreBoard = gameInfo.childNodes[1];
    console.log(scoreBoard);

    const replayInfo = document.createElement('p');
    replayInfo.textContent = 'Press F5 to replay';

    overScreen.appendChild(gameOver);
    overScreen.appendChild(winnerDisplay);
    overScreen.appendChild(scoreBoard);

    return overScreen;
}

function switchScreenMoves() {
    if (!maxRounds) return;

    const startScreen = document.querySelector('#start-page');
    const main = document.querySelector('main');
    const playScreen = getPlayScreen();

    startScreen.classList.add('switch-screen');
    startScreen.style.animationDirection = 'normal';

    setTimeout(function () {
        main.replaceChild(playScreen, startScreen);
    }, 500);
}

function switchScreenOver() {
    const main = document.querySelector('main');

    const playScreen = document.getElementById('play-screen');

    const overScreen = getOverScreen();

    playScreen.classList.add('switch-screen');
    playScreen.style.animationDirection = 'normal';

    setTimeout(function() {
        main.replaceChild(overScreen, playScreen);
    }, 500);
}

function updateGameInfo(roundWinner, computerSelection) {
    const gameInfo = document.getElementById('game-info');

    const currentRoundDisplay = gameInfo.childNodes[0];
    const previousWinnerDisplay = gameInfo.childNodes[1].childNodes[0];
    const previousMoveDisplay = gameInfo.childNodes[1].childNodes[1];
    const playerScoreDisplay = gameInfo.childNodes[1].childNodes[2];
    const computerScoreDisplay = gameInfo.childNodes[1].childNodes[3];

    currentRoundDisplay.textContent = `Current Round: ${currentRound}`;

    previousWinnerDisplay.textContent = `Last Round Winner: ${roundWinner}`;

    previousMoveDisplay.textContent = `Computer's Last Move: ${computerSelection}`;

    playerScoreDisplay.textContent = `Your Current Score: ${playerScore}`;
    computerScoreDisplay.textContent = `Computer's Current Score: ${computerScore}`;
}

function playGame(e) {
    let playerSelection = e.originalTarget.id;
    let computerSelection = getComputerSelection();

    let roundWinner = getRoundWinner(playerSelection, computerSelection);

    if (roundWinner === 'player') {
        playerScore++;
    } else if (roundWinner === 'computer') {
        computerScore++;
    }

    currentRound++;
    updateGameInfo(roundWinner, computerSelection);

    if (currentRound > maxRounds) {
        switchScreenOver();
    };
}
