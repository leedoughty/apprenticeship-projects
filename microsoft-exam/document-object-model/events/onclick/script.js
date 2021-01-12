// onclick

const showDog = document.getElementById("show-dog");
const imageContainer = document.getElementById("image-container");

showDog.addEventListener("click", () => {
  imageContainer.innerHTML = '<img src="https://placedog.net/500/300" />';
  console.log("dog is shown!");
});
