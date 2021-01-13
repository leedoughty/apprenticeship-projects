const form = document.forms["article"];
console.log(form);
const articleName = form["article-name"];
console.log(articleName);
const articleId = form["articleId"];
console.log(articleId);

form.addEventListener("submit", (event) => {
  if (Number.isNaN(parseInt(articleId.value))) {
    event.preventDefault();
    console.log("not a number!");
    alert(
      "You have entered something that isn't a number, please enter a number"
    );
  }
});
