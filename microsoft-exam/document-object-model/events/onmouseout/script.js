// onmouseover

const introSentence = document.getElementById("intro-sentence");

function changeText() {
  introSentence.style.color = "blue";
  introSentence.style.fontSize = "50px";
}

function putTextBack() {
  introSentence.style.color = "black";
  introSentence.style.fontSize = "2em";
}
