console.log("howdy!");

function checkCookies() {
  var text = "";

  if (navigator.cookieEnabled === true) {
    text = "cookies are enabled";
  } else {
    text = "cookies are not enabled";
  }
  document.getElementById("cookie-text").innerHTML = text;
}
