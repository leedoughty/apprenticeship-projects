const endpoint = "https://api.github.com/users/leedoughty";
const userElement = document.querySelector(".user");

userElement.textContent = "loading...";

// promise

function handleError(error) {
  console.log("oh no!");
  console.log(error);
}

// const leePromise = fetch(endpoint);
// leePromise
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     userElement.textContent = `${data.name} – ${data.blog}`;
//   })
//   .catch(handleError);

// async/await

const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;

async function displayUser(username) {
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data = await response.json();
  userElement.textContent = `${data.name} - ${data.blog}`;
}

displayUser("leedoughty").catch(handleError);
