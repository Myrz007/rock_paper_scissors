const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');
let playerScore = 0;
let computerScore = 0;

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

function game(round) {
    if (round !== 'Tie!') {
        if (round.slice(0, round.indexOf('!')) === 'You Win') playerScore++;
        else computerScore++;
    }

    // `${ ? 'Congratulations!' : 'Too bad,'} ${ ? 'Y' : 'y'}ou ${ ? 'won' : 'lost'} this match!`;
}

buttons.forEach((button) => button.addEventListener('click', () => {
    let playerChoice = button.id;
    playerChoice = `${playerChoice[0].toUpperCase()}${playerChoice.slice(1)}`;

    const round = playRound(playerChoice);

    game(round);

    document.getElementById('player-score').textContent = playerScore;
    document.getElementById('computer-score').textContent = computerScore;

    let result = document.createElement('p');
    result.textContent = round;

    results.appendChild(result);
}));
