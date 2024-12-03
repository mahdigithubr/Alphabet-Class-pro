function continueGame() {
  const alphabet = getRandomAlphabets();
  const displayAlphabet = document.getElementById("alphabet");
  displayAlphabet.innerText = alphabet;
  setBackgroundColor(alphabet);
}

function playNow() {
  hiddenElementById("home-screen");
  showElementById("playground-section");
  continueGame();
}
