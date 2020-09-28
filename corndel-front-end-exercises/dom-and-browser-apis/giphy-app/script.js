const container = document.querySelector(".container");

async function fetchGifs() {
  const response = await fetch(
    `https://api.giphy.com/v1/gifs/trending?api_key=${apiKey}&limit=10`
  );
  const responseData = await response.json();
  // console.log(responseData);
  // responseData.data.map((image) => {
  //   container.innerHTML += `<img src=${image.url}>`;
  // });
  responseData.data.map((image) => {
    container.innerHTML += `<img src=${image.images.downsized.url}>`;
  });
}

fetchGifs();
