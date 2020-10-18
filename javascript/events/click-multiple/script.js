const buyButtons = document.querySelectorAll(".buy");

function buyItem() {
  console.log("buying item");
}

function handleBuyButtonClick(buyButton) {
  buyButton.addEventListener("click", buyItem);
}

buyButtons.forEach(handleBuyButtonClick);
