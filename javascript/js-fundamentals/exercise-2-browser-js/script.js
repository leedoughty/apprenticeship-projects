const spooky = document.getElementsByClassName("spooky-style");

for (let item of spooky) {
  item.setAttribute("style", "color: red");
}

//

const tofu = document.getElementById("tofu");

tofu.innerHTML = "Tofu";

//

const tofuSection = document.getElementById("tofu-section");
const tofuParagraphs = tofuSection.getElementsByTagName("p");
const thirdParagraph = tofuParagraphs[2];

thirdParagraph.style.fontStyle = "italic";

//

// const breadSection = document.getElementById("bread-section");

// const newParagraph = document.createElement("p");
// const textNode = document.createTextNode("It's primarily made from wheat.");
// newParagraph.appendChild(textNode);

// breadSection.appendChild(newParagraph);

//

// const breadSection = document.getElementById("bread-section");

// const newParagraph = document.createElement("p");
// newParagraph.innerHTML +=
//   "It's <span class='primarily'>primarily</span> made from wheat";

// breadSection.appendChild(newParagraph);
// const primarily = document.querySelector(".primarily");
// primarily.style.color = "red";

// play about with text content
const breadSection = document.getElementById("bread-section");

const newParagraph = document.createElement("p");
newParagraph.textContent = "It's ";

const primarily = document.createElement("span");
primarily.textContent = "primarily";
primarily.style.color = "red";
newParagraph.appendChild(primarily);

newParagraph.textContent += " made of wheat";

breadSection.appendChild(newParagraph);

//

const date = new Date();
console.log("Now: ", date);

//

const month = date.getMonth();
console.log("This Month: ", month);

//

// look into other ways of representing date
const marchDate = new Date("March 15, 2020 14:47:00");
console.log("March: ", marchDate);

//

const theDate = new Date();
const daysToAdd = 40;
theDate.setDate(theDate.getDate() + daysToAdd);
console.log("Forty Days Ahead: ", theDate);

//

// There are 4 ways to create a new date object:

// new Date()
// new Date(year, month, day, hours, minutes, seconds, milliseconds)
// new Date(milliseconds)
// new Date(date string)

const dateSection = document.getElementById("date-section");
const dateText = document.getElementById("date");

dateText.textContent = new Date();

const marchDateParagraph = document.createElement("P");
dateSection.appendChild(marchDateParagraph);
marchDateParagraph.textContent += "The March date is: ";
marchDateParagraph.textContent += new Date("March 15, 2021 14:42:00");

const forthDaysFromToday = document.createElement("P");
dateSection.appendChild(forthDaysFromToday);
// const todaysDate = new Date();
// console.log(todaysDate.getDate() + 40);

//

const todaysDate = new Date();
const someFutureDateFromMilliseconds = new Date(9950325252455);
const myBirthdayInYearMonthDay = new Date(1995, 5, 3);
const myBirthdayInDateString = new Date("June 3, 1995 12:30:00");

console.log("todaysDate: ", todaysDate);
console.log("someFutureDateFromMilliseconds: ", someFutureDateFromMilliseconds);
console.log("myBirthdayInYearMonthDay: ", myBirthdayInYearMonthDay);
console.log("myBirthdayInDateString: ", myBirthdayInDateString);
