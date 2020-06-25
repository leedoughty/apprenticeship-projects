const fs = require("fs");

fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  const input = data.toString();
  const regex = /@[a-zA-Z\-\.]+/g;
  const allTheEmails = input.match(regex);
  const objectOfEmails = {};
  allTheEmails.forEach((domain) => {
    if (objectOfEmails[domain] >= 1) {
      objectOfEmails[domain] += 1;
    } else {
      objectOfEmails[domain] = 1;
    }
  });
  console.log(objectOfEmails);
});
