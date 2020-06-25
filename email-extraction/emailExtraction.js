const fs = require("fs");

fs.readFile("sample.txt", (err, data) => {
  if (err) throw err;
  const input = data.toString();
  const regex = /@softwire\.com/g;
  const softwireEmails = input.match(regex);
  console.log(softwireEmails.length);
});
