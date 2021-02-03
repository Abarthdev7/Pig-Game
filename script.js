'use strict';

// Selecting elements 
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const player0El = document.querySelector('.player--0');
const palyer1El = document.querySelector('.player--1');
const current0El = document.getElementById('current--0');
const current1El = document.getElementById('current--1');
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
const player0Name = document.querySelector('#name--0');
const player1Name = document.querySelector('#name--1');

// Starting Conditions
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.add('hidden');

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Functions

//Swich to Player 2
const nextPlayer = function () {
  player0El.classList.remove('player--active');
  palyer1El.classList.add('player--active');
}

//Swich to Player 1
const prevPlayer = function () {
  palyer1El.classList.remove('player--active');
  player0El.classList.add('player--active');
}

// Rolling dice functionality
btnRoll.addEventListener('click', function () {

  var diceRoll = Math.floor(Math.random() * 6) + 1; // Generates a random dice number ( 0-6)
  diceEl.src = `images/dice-${diceRoll}.png`
  if (diceRoll !== 1) {
    currentScore += diceRoll;
    document.getElementById(`current--${activePlayer}`).textContent = currentScore;

  } else {
    current0El.textContent = 0;
    currentScore = 0;

    activePlayer = activePlayer === 0 ? 1 : 0;
    if (activePlayer === 1) {
      nextPlayer();

    } else {
      current1El.textContent = 0;
      currentScore = 0;
      prevPlayer();
    }
  }
  diceEl.classList.remove('hidden')
})

// Hold Button functionality
btnHold.addEventListener('click', function () {
  if (activePlayer === 0) { // Adds current score to active player's score
    activePlayer = activePlayer === 0 ? 1 : 0;
    nextPlayer();
    scores[0] += currentScore;
    current0El.textContent = 0;
    currentScore = 0;
    score0El.textContent = scores[0];

    if (scores[0] >= 100) {     // Determines the winner if 100 points are scored
      player0Name.textContent = 'You are the Winner';
      currentScore = 0;
      current0El.textContent = 0;
      current1El.textContent = 0;
      activePlayer == 0;
      btnRoll.disabled = true; // Disables Hold and Roll buttons
      btnHold.disabled = true;
      diceEl.classList.add('hidden');
    }

  }
  else { // Adds current score to active player's score
    activePlayer = activePlayer === 0 ? 1 : 0;
    prevPlayer();
    scores[1] += currentScore;
    current1El.textContent = 0;
    currentScore = 0;
    score1El.textContent = scores[1]

    if (scores[1] >= 100) {      // Determines the winner if 100 points are scored
      player1Name.textContent = 'You are the winner';
      currentScore = 0;
      current0El.textContent = 0;
      current1El.textContent = 0;
      activePlayer == 0;
      btnRoll.disabled = true; // Disables Hold and Roll buttons
      btnHold.disabled = true;
      diceEl.classList.add('hidden');
    }
  }
})

//Reloads the page starting a new game
btnNew.addEventListener('click', function () {
  location.reload();
})









