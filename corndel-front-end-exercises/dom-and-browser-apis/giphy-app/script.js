const container = document.querySelector(".container");
const limit = 10;
const rating = "g";

async function fetchGifs() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=${limit}&rating=${rating}`
  );
  const responseData = await response.json();
  responseData.data.map((image) => {
    const gif = document.createElement("img");
    gif.classList.add("gif-image");
    gif.src = image.images.downsized.url;
    container.appendChild(gif);
  });
}

fetchGifs();
