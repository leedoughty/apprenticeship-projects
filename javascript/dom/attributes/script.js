const pic = document.querySelector(".nice");
pic.classList.add("open");
pic.classList.remove("cool");
pic.classList.toggle("round");
console.log(pic.classList);

function toggleRound() {
  pic.classList.toggle("round");
}

pic.addEventListener("click", toggleRound);

pic.alt = "cute cat";
console.log(pic.naturalWidth);

window.addEventListener("load", () => {
  console.log(pic.naturalWidth);
});

pic.setAttribute("alt", "REALLY cute cat");
console.log(pic.getAttribute("alt"));

const custom = document.querySelector(".custom");
console.log(custom.dataset);

custom.addEventListener("click", () => {
  console.log(`${custom.dataset.name}`);
});
