const buyButtons = document.querySelectorAll("button.buy");
const container = document.querySelector("#container");

function handleClick(event) {
  console.log("you are buying it!");
  console.log(event);
  console.log(event.currentTarget);
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener("click", handleClick);
});

container.addEventListener(
  "click",
  function (event) {
    console.log("container clicked");
  },
  { capture: true }
);

window.addEventListener("click", function (event) {
  console.log("you clicked the window");
  console.log(event.target);
});
