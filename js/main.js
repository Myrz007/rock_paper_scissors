const buttons = document.querySelectorAll('button');
const results = document.getElementById('results');

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

buttons.forEach((button) => button.addEventListener('click', () => {
    let playerChoice = button.id;
    playerChoice = `${playerChoice[0].toUpperCase()}${playerChoice.slice(1)}`;

    let result = document.createElement('p');
    result.textContent = playRound(playerChoice);

    results.appendChild(result);
}));

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