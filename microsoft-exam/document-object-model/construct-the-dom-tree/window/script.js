// window

const historyButton = document.getElementById("history-button");

historyButton.addEventListener("click", () => {
  window.history.go(-2);
});

//

const browserParagraph = document.getElementById("browser");

const userBrowser = window.navigator.userAgent;
console.log(userBrowser);

const isChrome = window.navigator.userAgent.includes("Chrome");
const isFirefox = window.navigator.userAgent.includes("Firefox");
const isEdge = window.navigator.userAgent.includes("Edge");

console.log({ isChrome, isFirefox, isEdge });

browserParagraph.textContent = `You are using ${userBrowser}`;

//

const screenSizeParagraph = document.getElementById("screen-size");

const screenWidth = window.screen.width;
const screenHeight = window.screen.height;

screenSizeParagraph.textContent = `The size of your screen is ${screenWidth} x ${screenHeight}`;
