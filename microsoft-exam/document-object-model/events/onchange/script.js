// onchange

const input = document.getElementById("input");
const typedText = document.getElementById("typed-text");

input.addEventListener("change", updateValue);

function updateValue(event) {
  typedText.textContent = event.target.value;
}
