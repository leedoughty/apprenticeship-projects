const button = document.querySelector(".button");
const coolButton = document.querySelector(".cool-button");

function handleClick() {
  console.log("it got clicked");
}

button.addEventListener("click", handleClick);
coolButton.addEventListener("click", handleClick);

coolButton.removeEventListener("click", handleClick);
