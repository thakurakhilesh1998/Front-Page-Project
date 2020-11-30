var messages = ["Secure", "Simplicity", "Adapted"];
var rank = 0;
var element = document.getElementById("type-msg");
function show() {
  element.innerHTML = messages[rank];
  rank == messages.length - 1 ? (rank = 0) : rank++;
  setTimeout(show, 1000);
}

function text(j) {
  var j = 0;
  if (j < messages.length) {
    element.innerHTML = messages[rank].charAt(j);
    j++;
    setTimeout((text) => j, 500);
  }
}

