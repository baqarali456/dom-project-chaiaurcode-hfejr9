const submit = document.getElementById('subt');
const userinput = document.getElementById('guessField');
const resultparas = document.querySelector('.resultParas');
const guesses = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loworHi = document.querySelector('.lowOrHi');
let randomguess = parseInt(Math.random * 100 + 1);

const p = document.createElement('p');

let prevguess = [];
let playgame = true;
let numofguess = 1;
let totalguessed = 11;

if (playgame) {
  submit.addEventListener('click', (e) => {
    e.preventDefault();
    let guess = parseInt(userinput.value);
    validate(guess);
  });
}
// validate
function validate(guess) {
  if (isNaN(guess)) {
    alert('Enter a valid number');
  } else if (guess > 100) {
    alert('Enter a number less than 100');
  } else if (guess < 1) {
    alert('Enter a number greater than 1');
  } else {
    prevguess.push(guess);
    if (numofguess === 10) {
      displayguess(guess);
      displaymessage('Game Over');
      endGame();
    } else {
      check(guess);
      displayguess(guess);
    }
  }
}
// check guess
function check(guess) {
  if (guess === randomguess) {
    alert('You guessed right');
  } else if (guess > randomguess) {
    alert('you guessed Too High');
  } else if (guess < randomguess) {
    alert('you guessed Too Low');
  }
}

// display guess
function displayguess(guess) {
  guesses.innerHTML += `${guess}  `;
  userinput.value = '';
  numofguess++;
  remaining.innerHTML = `${10 - numofguess}`;
}

// display message
function displaymessage(message) {
  loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame() {
  userinput.setAttribute('disabled', '');
  p.innerHTML = `<h2 id="newGame">Start a New Game</h2>`;
  document.querySelector('.resultParas').appendChild(p);
  playgame = false;
  newGame();
}

function newGame() {
  document.querySelector('#newGame').addEventListener('click', () => {
    randomguess = parseInt(Math.random * 100 + 1);
    userinput.removeAttribute('disabled');
    guesses.innerHTML = '';
    numofguess = 1;
    remaining.innerHTML = `${10 - numofguess}`;
    playgame = true;
  });
}
