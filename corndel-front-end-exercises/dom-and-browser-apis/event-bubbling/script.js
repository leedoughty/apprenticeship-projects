const buyButtons = document.querySelectorAll("button.buy");

function handleClick(event) {
  console.log("you are buying it!");
  console.log(event);
  console.log(event.currentTarget);
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleClick);
});

window.addEventListener("click", function () {
  console.log("you clicked the window");
});
