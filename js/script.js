let computerScore = 0;
let userScore = 0;

// Return a random response.
const computerInput = () => {
    const responses = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return responses[randomNumber];
}

// Counter Manager
const counterManager = (winner) => {

    if (winner == 'computer') {
        computerScore++;
        
        return `Computer wins`;
    }

    if (winner == 'user') {
        userScore++;

        return `User wins`;
    }

    return 'No one wins';
}

// Compares the responses and retuns the winer based on the selection.
const compareResponses = (user, computer) => {

    switch (user + " " + computer) {

        case 'rock scissors':
            return counterManager('user');
        case 'scissors paper':
            return counterManager('user');
        case 'paper rock':
            return counterManager('user');
        
        // TODO: find a way to reuse the code!
        case 'scissors rock':
            return counterManager('computer');
        case 'paper scissors':
            return counterManager('computer');
        case 'rock paper':
            return counterManager('computer');

        default:
            return 'No one wins';
    }
}

// DOM Handler
const domHandler = (user, computer, winner) => {

    const counter = document.querySelector('#counter');

    const result = document.querySelector('#result');
    const userMessage = document.querySelector('#userChoice');
    const computerMessage = document.querySelector('#computerChoice');

    counter.innerHTML = `${userScore} - ${computerScore}`;

    result.innerHTML = winner;
    userMessage.innerHTML = user;
    computerMessage.innerHTML = computer;
}

// Reset Counter
const resetCounter = () => {
    computerScore = 0;
    userScore = 0;

    domHandler('', '', '');
}

// CORE
const userInput = document.querySelector('#input');
const shotBtn = document.querySelector('#shoot');
const refreshBtn = document.querySelector('#refresh');

// Refresh Handler. 
//refreshBtn.addEventListener('click', () => resetCounter());

const init = (input) => {

    const computer = computerInput();
    const winner = compareResponses(input, computer);
 
    domHandler(input, computer, winner);
}