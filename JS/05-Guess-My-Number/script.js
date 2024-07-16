'use strict';

// DOM Methods & Properties are not part of JavaScript
// DOM Methods & Properties are actually part of WEB APIs
// WEB APIs are basically libraries that are also written in JavaScript
// It's always good to keep a variable which actually holds the data in our code and not just rely on DOM to hold our data
// score variable can also be called a state variable because this score is part of the so-called application state which is basically all the data that is relevant to the application (we could say secretNumber is also part of the state of our application)
// We want all the data always to be available somewhere in our code and not just in the DOM
// We specify css property on style property (we need to specify property in camel case notation in case there is two words), the value always needs to be a string, Styles are actually set as inline styles (style that is applied directly in the HTML using the style attribute) [not changing the CSS file or anything like that]
// It's important to really finish up all applications and not just make them work
// Try to avoid duplicate code whenever you can
// When we first write the code then it's no big problem to start out with duplicate code then as we move on into project we can use a technique called refactoring (to restructure the code but without chaning how it works, we use refactoring to improve the code and to eliminate duplicate code)
// Refactoring: 1) Identify duplicate or almost duplicate code
// Sometimes a good refactoring technique is also to create functions
// We can refactor functionality that we use over and over again into their own functions in order to make the code more dry
// Code should be easier to understand when we read the code later

/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');
  }
  // When player wins
  else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }

  // When guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low');
      score--;
      displayScore(score);
    } else {
      displayMessage('💥 You Lost the Game!');
      displayScore(0);
    }
  }

  // When guess is too high
  /*
  else if (guess > secretNumber && score > 1) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high
  else if (guess < secretNumber && score > 1) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost the Game!';
      document.querySelector('.score').textContent = 0;
    }
  }
  */
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  document.querySelector(`body`).style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

//////////////////////////////////////////
// Coding Challenge #1

/*
Implement a game reset functionality, so that the player can make a new guess!
Your tasks:
1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the 'score' and 
'secretNumber' variables
3. Restore the initial conditions of the message, number, score and guess input 
fields
4. Also restore the original background color (#222) and number width (15rem)
GOOD LUCK �
*/
