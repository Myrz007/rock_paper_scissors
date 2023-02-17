const choices = [
    'Scissors',
    'Rock',
    'Paper'
];

function getPlayerChoice() {
    let playerChoice = prompt('Choose between Rock (1), Paper (2) and Scissors (3):');

    return choices[(parseInt(playerChoice)) % choices.length]; // Limit the index choice from 0 to the choices array length minus one independently of the player input
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

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const roundResult = playRound();

        console.log(roundResult);

        if (roundResult !== 'Tie!') {
            if (roundResult.slice(0, roundResult.indexOf('!')) === 'You Win') playerScore++;
            else computerScore++;
        }
    }
    
    if (playerScore === computerScore) console.log('Tie!');
    else {
        const resultCheck = playerScore > computerScore;

        console.log(`${resultCheck ? 'Congratulations!' : 'Too bad,'} ${resultCheck ? 'Y' : 'y'}ou ${resultCheck ? 'won' : 'lost'} this match! Score is: Player[${playerScore}] - Computer[${computerScore}]`);
    }
}

game();