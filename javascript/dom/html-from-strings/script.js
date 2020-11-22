const item = document.querySelector(".item");

const width = 500;
const src = `https://picsum.photos/${width}`;
const desc = `nice pic`;
const myHtml = `
<div class="wrapper">
  <h2>${desc}</h2>
  <img src="${src}" alt="${desc}"/>
</div>
`;

// console.log(myHtml);
// console.log(typeof myHtml);

// item.innerHTML = myHtml;

// const wrapper = document.querySelector(".wrapper");
// console.log(wrapper);

// const itemImage = document.querySelector(".wrapper img");
// console.log(itemImage);

// itemImage.classList.add("round");

const myFragment = document.createRange().createContextualFragment(myHtml);
console.log(myFragment);

console.log(myFragment.querySelector("img"));

document.body.appendChild(myFragment);
