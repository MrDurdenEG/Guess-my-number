'use strict';
function displayMessage(message) {
  document.querySelector('.message').textContent = message;
}

function displayScore(score) {
  document.querySelector('.score').textContent = score;
}

function displayNumber(number) {
  document.querySelector('.number').textContent = number;
}

let secretNumber = Math.trunc(Math.random() * (20 - 1 + 1)) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.again').addEventListener('click', function f() {
  secretNumber = Math.trunc(Math.random() * (20 - 1 + 1)) + 1;
  score = 20;
  displayScore(score);
  displayNumber('?');
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displayMessage('No number! 😔');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number! 😘');
    displayNumber(secretNumber);

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    highScore = Math.max(score, highScore);
    document.querySelector('.highscore').textContent = highScore;
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High! 😔' : 'Too Low! 😔');
      score--;
      displayScore(score);
    } else {
      displayMessage('you lost the game..😔');
      displayScore(0);
    }
  }
});
