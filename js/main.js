const choices = [
    'Rock',
    'Paper',
    'Scissors'
];

function getPlayerChoice() {
    let playerChoice = prompt('Choose between Rock (1), Paper (2) and Scissors (3');

    return choices[(parseInt(playerChoice) - 1) % choices.length];
}

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound() {
    const playerChoice = getPlayerChoice();
    const computerChoice = getComputerChoice();

    if (playerChoice === computerChoice) return 'Tie!';

    const winningCombos = {
        'Rock': 'Scissors',
        'Paper': 'Rock',
        'Scissors': 'Paper'
    };
    const winCheck = winningCombos[playerChoice] === computerChoice;

    return `You ${winCheck ? 'Win' : 'Lose'}! ${winCheck ? playerChoice : computerChoice} beats ${winCheck ? computerChoice : playerChoice}`;
}
