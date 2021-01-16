// case

function validate() {
  var input = document.getElementById("tester").value;
  var text = document.getElementById("userText").innerHTML;
  if (input.toLowerCase() == text.toLowerCase()) {
    alert("Success");
  }
}
