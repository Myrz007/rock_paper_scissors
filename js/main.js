const buttons = document.querySelectorAll('button');

function getPlayerChoice() {
    const clickedButton = document.querySelector('button');
    const playerChoice = clickedButton.getAttribute('id');

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

/*
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
*/