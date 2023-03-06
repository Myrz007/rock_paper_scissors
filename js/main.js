const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
let playerScore = 0;
let computerScore = 0;

function getPlayerChoice(button) {
    let playerChoice = button.id;

    return `${playerChoice[0].toUpperCase()}${playerChoice.slice(1)}`;
}

function getComputerChoice() {
    const choices = [
        'Scissors',
        'Rock',
        'Paper'
    ];

    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    const winningCombos = {
        'Rock': 'Scissors',
        'Paper': 'Rock',
        'Scissors': 'Paper'
    };
    
    const computerChoice = getComputerChoice();    
    const winCheck = winningCombos[playerSelection] === computerChoice;
    const resultString = `You ${winCheck ? 'Win' : 'Lose'}! ${winCheck ? playerSelection : computerChoice} beats ${winCheck ? computerChoice : playerSelection}`;

    return playerSelection === computerChoice ? 'Tie!' : resultString;
}

function getResult(round) {
    let result = document.createElement('p');
    result.textContent = round;
    results.appendChild(result);
}

function game(round) {
    if (round !== 'Tie!') {
        if (round.slice(0, round.indexOf('!')) === 'You Win') playerScore++;
        else computerScore++;
    }
}

function newGame(winMessage) {
    alert(winMessage);
    window.location.reload();
}

function getWinner() {    
    if (playerScore === 5) {
        newGame('Congratulations! You won');
    }
    else if (computerScore === 5) {
        newGame('Too bad, you lost');
    }
    else {
        document.getElementById('player-score').textContent = playerScore;
        document.getElementById('computer-score').textContent = computerScore;
    }
}

buttons.forEach((button) => button.addEventListener('click', () => {
    const round = playRound(getPlayerChoice(button));

    game(round);
    getResult(round);
    getWinner();
}));
