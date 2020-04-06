let toBeGuessed = generateRandomNum();
console.log("To be guessed:", toBeGuessed);

const turns = document.getElementById("turns");
turns.textContent = 10;
const pLow = document.getElementById("guessedLow");
pLow.textContent = 0;
const pHigh = document.getElementById("guessedHigh");
pHigh.textContent = 100;
const input = document.getElementById("in");
input.focus();
const btn = document.getElementById("guessBtn");
btn.addEventListener("click", guess);

/**
 * Generate random number between 1 - 100
 */
function generateRandomNum() {
  return Math.floor(Math.random() * 100) + 1;
}

function displayCongrat() {
  window.alert(`You win!!! The answer is ${toBeGuessed}`);
}

function displayGameOver() {
  window.alert(`You Lose!!! The answer is ${toBeGuessed}`);
}

function disableAllInput() {
  controls = document.getElementsByClassName("control");
  for (let ele of controls) {
    ele.disabled = true;
  }
}

function restart() {
  location.reload();
}

function guess() {
  let timesLeft = parseInt(turns.textContent) - 1;
  let guessedNum = parseInt(input.value);
  if (guessedNum < 0 || guessedNum > 100) return;

  console.log("Guess:", guessedNum);

  if (guessedNum == toBeGuessed) {
    displayCongrat();
    disableAllInput();
    addRestartBtn();
  } else if (timesLeft <= 0) {
    displayGameOver();
    disableAllInput();
    addRestartBtn();
  } else {
    // update previous guesses
    if (guessedNum > toBeGuessed) {
      if (parseInt(pHigh.textContent) > guessedNum)
        pHigh.textContent = guessedNum;
    } else if (parseInt(pLow.textContent) < guessedNum)
      pLow.textContent = guessedNum;
  }
  turns.textContent = timesLeft < 0 ? 0 : timesLeft;
}

function addRestartBtn() {
  const restartBtn = document.createElement("button");
  restartBtn.textContent = "Restart";
  restartBtn.addEventListener("click", restart);
  document.body.appendChild(restartBtn);
}
