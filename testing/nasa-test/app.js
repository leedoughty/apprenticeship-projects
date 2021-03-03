const express = require("express");
const { getPhotoOfTheDay } = require("./getPhotoOfTheDay");
const app = express();
const port = 3000;

app.get("/", (request, response) => {
  response.send("hello");
});

app.get("/photo", getPhotoOfTheDay);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
