const lee = document.querySelector(".lee");
console.log("children:", lee.children);

console.log("firstElementChild:", lee.firstElementChild);
console.log("lastElementChild:", lee.lastElementChild);
console.log("previousElementSibling:", lee.previousElementSibling);
console.log("nextElementSibling:", lee.nextElementSibling);
console.log("parentElement:", lee.parentElement);

console.log("childNodes:", lee.childNodes);

const p = document.createElement("p");
p.textContent = "I will be removed";
document.body.appendChild(p);

p.remove();

console.log(p);
