const fs = require("fs");

fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  const input = data.toString();
  const splitInput = input.split(" ");
  const includesSoftwire = splitInput.filter((word) =>
    word.includes("@softwire.com")
  );
  const amountOfSoftwireEmails = includesSoftwire.length;
  console.log(amountOfSoftwireEmails);
});
