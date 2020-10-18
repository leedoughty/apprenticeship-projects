const input = document.querySelector("#input");
const output = document.querySelector("#output");

input.addEventListener("input", () => {
  output.innerHTML = input.value;

  // const clean = sanitize(input.value);
  // output.innerHTML = clean.value;
});
