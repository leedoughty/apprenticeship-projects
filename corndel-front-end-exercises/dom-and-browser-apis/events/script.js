const inner = document.querySelector("#inner");
const middle = document.querySelector("#middle");
const outer = document.querySelector("#outer");

let timer = 1000;

inner.addEventListener("click", function (event) {
  changeBackgroundColour(inner, "darkgoldenrod", timer);
  timer += 1000;
});

middle.addEventListener("click", function (event) {
  changeBackgroundColour(middle, "salmon", timer);
  timer += 1000;
});

outer.addEventListener("click", function (event) {
  changeBackgroundColour(outer, "blueviolet", timer);
  timer += 1000;
});

function changeBackgroundColour(element, colour, time) {
  setTimeout(() => {
    element.style.backgroundColor = colour;
  }, time);
}
