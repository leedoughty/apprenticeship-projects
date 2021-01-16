// for

var line = document.getElementById("para");
var rooms = ["Single", "Double", "Triple", "Suite"];

var i = 0;
for (i = 0; i < rooms.length; i++) {
  document.getElementById("para").innerHTML += rooms[i] + line.innerHTML;
}
