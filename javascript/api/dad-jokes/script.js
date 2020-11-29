const jokeButton = document.querySelector(".getJoke");
const jokeHolder = document.querySelector(".joke p");

const buttonText = ["ugh.", "omg", "omg why", "pls", "stahp"];

async function fetchJoke() {
  const response = await fetch("https://icanhazdadjoke.com", {
    headers: {
      Accept: "application/json",
    },
  });
  const data = await response.json();
  return data;
}

function randomItemFromArray(arr, not) {
  const item = arr[Math.floor(Math.random() * arr.length)];
  if (item === not) {
    console.log("we used that one last time, look again");
    return randomItemFromArray(arr, not);
  }
  return item;
}

async function handleClick() {
  const { joke } = await fetchJoke();
  jokeHolder.textContent = joke;
  jokeButton.textContent = randomItemFromArray(
    buttonText,
    jokeButton.textContent
  );
}

jokeButton.addEventListener("click", handleClick);
