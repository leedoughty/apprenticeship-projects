// retrieve input values

function showName() {
  const firstName = document.getElementById("first-name").value;
  const lastName = document.getElementById("last-name").value;
  document.getElementById("name").innerHTML = `${firstName} ${lastName}`;
}
