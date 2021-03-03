const axios = require("axios");
const API_KEY = require("./apiKey");
const BASE_URL = "https://api.nasa.gov/planetary/apod";

const getPhotoOfTheDay = async (request, response, next) => {
  const url = `${BASE_URL}?api_key=${API_KEY}`;
  await axios.get(url);
  //   const data = await axios.get(url);
  //   return data;

  //   try {
  //     const apodResponse = await axios.get(url);
  //     response.send(apodResponse.data);
  //   } catch (error) {
  //     return response.status(500).json({ error: error.toString() });
  //   }
};

module.exports = { getPhotoOfTheDay };
