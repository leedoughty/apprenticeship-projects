const konamiCode = [
  "ArrowUp",
  "ArrowUp",
  "ArrowDown",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "ArrowLeft",
  "ArrowRight",
  "b",
  "a",
];
const keysPressed = [];

window.addEventListener("keyup", (event) => {
  keysPressed.push(event.key);

  if (keysPressed.length > konamiCode.length) {
    keysPressed.shift();
  }

  console.log(keysPressed);

  if (keysPressed.join("") === konamiCode.join("")) {
    console.log("konami code activated");
    container.style.backgroundColor = "pink";
  }
});
