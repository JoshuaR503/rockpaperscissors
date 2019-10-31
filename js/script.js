

// Return a random response.
const computerInput = () => {
    const responses = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    const randomResponse = responses[randomNumber];

    return randomResponse;
}

// Compares the responses and retuns a string with the result.
const compareManager = (user, computer, choice) => {

    console.log(user);
    console.log(computer);

    if (user === choice && computer !== choice) {
        return 'User wins';
    } 

    if (computer === choice && user !== choice) {
        return 'Computer wins';
    }

    if (computer == user) {
        return 'No one wins';
    }
}

// Compares the responses and retuns the winer based on the selection.
const compareResponses = (user, computer) => {
    switch (user) {
        case 'rock':
            return compareManager(user, computer, 'rock');
        case 'paper':
            return compareManager(user, computer, 'paper');
        case 'scissors':
            return compareManager(user, computer, 'scissors');    
        default:
            return 'Invalid Input';
    }
}

// DOM Handler
const domHandler = (user, computer) => {

    const userMessage = document.querySelector('');
    const computerMessage = document.querySelector('');

    userMessage.innerHTML = user;
    computerMessage.innerHTML = computer;
}

const userInput = document.querySelector('#input');
const btn = document.querySelector('#shoot');

// Click handler.
btn.addEventListener('click', () => {

    const user = input.value;
    const computer = computerInput();
    const winner = compareResponses(user, computer);

    console.log(winner);

});

