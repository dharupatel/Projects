/*  Use javascrit to create a game of snake water & gun.The game should ask you to enter s,w,or g.
 The computer should be able to randomly generate s,w,or g and declare win or loss using alert. 
using confirm and prompt wherever required.

*/
function getRandomChoice() {
    const choices = ['s', 'w', 'g'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function playGame(userChoice) {
    const computerChoice = getRandomChoice();

    alert(`Computer chose: ${computerChoice}`);

    if (userChoice === computerChoice) {
        alert('It\'s a tie!');
    } else if (
        (userChoice === 's' && computerChoice === 'w') ||
        (userChoice === 'w' && computerChoice === 'g') ||
        (userChoice === 'g' && computerChoice === 's')
    ) {
        alert('Congratulations! You win!');
    } else {
        alert('Oops! You lose. Try again!');
    }
}

function startGame() {
    const userChoice = prompt('Enter your choice: s (Snake), w (Water), g (Gun)').toLowerCase();

    if (userChoice !== 's' && userChoice !== 'w' && userChoice !== 'g') {
        alert('Invalid input. Please enter s, w, or g.');
    } else {
        playGame(userChoice);
    }
}

confirm('Welcome to Snake Water Gun Game! Press OK to start the game.');

do {
    startGame();
} while (confirm('Do you want to play again?'));

alert('Thanks for playing!');