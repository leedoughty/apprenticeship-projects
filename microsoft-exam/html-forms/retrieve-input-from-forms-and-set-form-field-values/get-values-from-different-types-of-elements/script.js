// get values from different types of elements

const article = document.getElementById("news-type");
article.addEventListener("change", () => {
  console.log(article.value);
});
