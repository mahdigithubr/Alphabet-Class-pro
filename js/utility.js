function hiddenElementById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("hidden");
}

function showElementById(elementId, className) {
  const element = document.getElementById(elementId);
  element.classList.remove(className);
}

function setBackgroundColor(elementId) {
  const element = document.getElementById(elementId);
  element.classList.add("bg-orange-400");
}

function getValueById(elementId) {
  const element = document.getElementById(elementId);
  const elementValue = element.innerText;
  const value = parseInt(elementValue);
  return value;
}

function setTextValueById(elementId, value) {
  const element = document.getElementById(elementId);
  element.innerText = value;
}

function getRandomAlphabets() {
  const alphabetsString = "abcdefghijklmnopqrstuvwxyz";
  const alphabets = alphabetsString.split("");
  const randomNumber = Math.random() * 25;
  const index = Math.round(randomNumber);
  const alphabet = alphabets[index];
  return alphabet;
}

function getElementById(elementId) {
  const element = document.getElementById(elementId);
  const value = element.innerText;
  return value;
}
