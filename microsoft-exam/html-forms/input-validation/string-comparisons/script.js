// case

const form = document.getElementById("form");
const validationMessage = document.getElementById("validation-message");

form.addEventListener("submit", validateInput);

function validateInput(event) {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;

  const regex = /[A-Z]/g;
  if (firstName.match(regex) || lastName.match(regex)) {
    event.preventDefault();
    validationMessage.innerHTML = "Sorry, that contains a capital";
    console.log("contains a capital");
  }
}
