// get values from different types of elements

function add() {
  var a = eval(document.getElementById("a").value);
  var b = eval(document.getElementById("b").value);
  document.getElementById("result").value = a + b;
}
