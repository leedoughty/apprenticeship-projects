const buyButtons = document.querySelectorAll("button.buy");

function handleClick(event) {
  console.log("you are buying it!");
  console.log(event);
  console.log(event.currentTarget);
  // stop event from bubbling up
  event.stopPropagation();
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleClick);
});

window.addEventListener("click", function (event) {
  console.log("you clicked the window");
  console.log(event.target);
});
