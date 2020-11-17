// it's not initially green as the script is being loaded before the dom content is loaded
// document.getElementById("green").setAttribute("style", "color: green");

//

document.addEventListener("onload", () => {
  document.getElementById("green").setAttribute("style", "color: green");
});

// document.addEventListener("DOMContentLoaded", () => {
//   document.getElementById("green").setAttribute("style", "color: green");
// });

//

const historyButton = document.getElementById("history-button");

historyButton.addEventListener("click", () => {
  window.history.go(-2);
});

//

historyButton.addEventListener("mouseover", (event) => {
  event.target.style.boxShadow = "5px 10px green";
});

historyButton.addEventListener("mouseout", (event) => {
  event.target.style.boxShadow = "none";
});

//

// console.log(window.navigator.userAgent.indexOf("Chrome") !== -1);
console.log(window.navigator.userAgent);
const isChrome = window.navigator.userAgent.indexOf("Chrome") !== -1;
const isFirefox = window.navigator.userAgent.indexOf("Firefox") !== -1;
const isEdge = window.navigator.userAgent.indexOf("Edge") !== -1;
// console.log({ isChrome });
// console.log({ isFirefox });
const theHyperlink = document.querySelector(".the-hyperlink");
// console.log(theHyperlink);

if (isChrome) {
  theHyperlink.setAttribute("href", "https://www.bbc.co.uk/");
} else if (isFirefox) {
  theHyperlink.setAttribute("href", "https://xkcd.com/");
} else if (isEdge) {
  theHyperlink.setAttribute("href", "https://reddit.com/");
}

// window.location = "https://www.bbc.com";

//

const insertNumberBox = document.querySelector("#number");
const sizeOfScreenSentence = document.querySelector(".size-of-screen-sentence");
let sizeOfScreen = window.screen.width;
let heightOfScreen = window.screen.height;
let availHeightOfScreen = window.screen.availHeight;
console.log({ sizeOfScreen });
console.log({ heightOfScreen });
console.log({ availHeightOfScreen });

insertNumberBox.addEventListener("change", (event) => {
  //   console.log("changed");
  //   console.log(event.target.value);
  if (event.target.value >= sizeOfScreen) {
    sizeOfScreenSentence.innerHTML =
      "Your prediction is LARGER than the screen size";
  } else {
    sizeOfScreenSentence.innerHTML =
      "Your prediction is SMALLER than the screen size";
  }
});
