function reverseSentence(sentence) {
  let arrayOfWords = sentence.split(" ");
  console.log(arrayOfWords);
  let reversedWords = arrayOfWords.map((word) => {
    return word.split("").reverse().join("");
  });
  console.log(reversedWords.join(" "));
}

reverseSentence("hello i am lee");
