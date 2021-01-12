// other html elements

const div = document.createElement("div");
const paragrah = document.createElement("p");
const greeting = document.createTextNode("Hello Mars!");

paragrah.appendChild(greeting);
div.appendChild(paragrah);
document.body.appendChild(div);
