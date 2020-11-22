const lee = document.querySelector(".lee");

lee.addEventListener("click", (event) => {
  event.preventDefault();
  const shouldChanngePage = confirm("do you wish to proceed?");
  if (shouldChanngePage) {
    window.location = event.currentTarget.href;
  }
});

const signupForm = document.querySelector('[name="signup"]');

signupForm.addEventListener("submit", (event) => {
  // console.log(event);
  // event.preventDefault();
  // console.log(event.currentTarget.name.value);
  // console.log(event.currentTarget.email.value);
  // console.log(event.currentTarget.agree.checked);
  const name = event.currentTarget.name.value;
  if (name.includes("chad")) {
    console.log("sorry bro");
    event.preventDefault();
  }
});

function logEvent(event) {
  console.log(event.type);
  console.log(event.currentTarget.value);
}

signupForm.name.addEventListener("keyup", logEvent);
signupForm.name.addEventListener("keydown", logEvent);
signupForm.name.addEventListener("focus", logEvent);
signupForm.name.addEventListener("blur", logEvent);
