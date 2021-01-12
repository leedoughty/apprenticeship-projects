// onkeydown

const input = document.getElementById("input");
const typedText = document.getElementById("typed-text");

input.addEventListener("keydown", showText);

function showText(event) {
  typedText.textContent = event.target.value;
}
