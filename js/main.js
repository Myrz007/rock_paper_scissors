const choices = [
    'Rock',
    'Paper',
    'Scissors'
];

function getPlayerChoice() {
    let playerChoice = prompt('Choose between Rock (1), Paper (2) and Scissors (3');

    return choices[(parseInt(playerChoice) - 1) % choices.length];
}
