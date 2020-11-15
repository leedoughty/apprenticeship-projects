const heading = document.querySelector("h2");

console.log("textContent: ", heading.textContent);
console.log("innerText: ", heading.innerText);
// heading.textContent = "Lee is cool";
// console.log("textContent: ", heading.textContent);
// console.log("innerText: ", heading.innerText);

console.log(heading.innerHTML);
console.log(heading.outerHTML);

const pizzaList = document.querySelector(".pizza");
console.log(pizzaList.textContent);

// pizzaList.textContent = `${pizzaList.textContent} 🍕`;

// pizzaList.insertAdjacentText("beforebegin", "🍕");
pizzaList.insertAdjacentText("afterbegin", "🍕");
// pizzaList.insertAdjacentText("beforeend", "🍕");
