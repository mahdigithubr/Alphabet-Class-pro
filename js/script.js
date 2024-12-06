function handelKeyboardKeyPress(event) {
  const playerPress = event.key;
  if (playerPress === "Escape") {
    gameOver();
  }
  const currentAlphabetElement = document.getElementById("alphabet");
  const currentAlphabet = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabet.toLowerCase();

  if (playerPress === expectedAlphabet) {
    const currentScore = getValueById("current-score");
    const newScore = currentScore + 1;
    setTextValueById("current-score", newScore);
    showElementById(expectedAlphabet, "bg-orange-400");
    continueGame();
  } else {
    const currentLife = getValueById("current-life");
    const newLife = currentLife - 1;
    setTextValueById("current-life", newLife);
    if (newLife === 0) {
      console.log("Game over");
      gameOver();
    }
  }
}

document.addEventListener("keyup", handelKeyboardKeyPress);

function continueGame() {
  const alphabet = getRandomAlphabets();
  const displayAlphabet = document.getElementById("alphabet");
  displayAlphabet.innerText = alphabet;
  setBackgroundColor(alphabet);
}

function playNow() {
  hiddenElementById("home-screen");
  hiddenElementById("final-score");
  showElementById("playground-section", "hidden");
  setTextValueById("current-score", 0);
  setTextValueById("current-life", 5);
  continueGame();
}

function gameOver() {
  hiddenElementById("playground-section");
  showElementById("final-score", "hidden");
  // set a last score
  const currentScore = getValueById("current-score");
  setTextValueById("last-score", currentScore);
  // remove last alphabet background color
  const currentAlphabet = getElementById("alphabet");
  console.log(currentAlphabet);
  showElementById(currentAlphabet, "bg-orange-400");
}
