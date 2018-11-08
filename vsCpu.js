//CPU
function cpu() {
  var rand = Math.floor(Math.random() * (4 - 1)) + 1;
  return rand == 1 ? "stone"
       : rand == 2 ? "scissors"
       : "paper"
}
window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);
//Player controls
var keyA = false;
var keyS = false;
var keyD = false;
function onKeyDown(event) {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 65: //a
      keyA = true;
      break;
    case 83: //s
      keyS = true;
      break;
    case 68: //d
      keyD = true;
      break;
    default:
  }
}
function onKeyUp(event) {
  var keyCode = event.keyCode;
  selected1 = "";
  img1 = document.getElementById('imgp1')
  switch (keyCode) {
    case 65: //a
      keyA = false;
      selected1 = "stone";

      break;
    case 83: //s
      keyS = false;
      selected1 = "scissors";
      break;
    case 68: //d
      keyD = false;
      selected1 = "paper";
      break;
    default:
  }
}

//Calculate who wins
var p1, p2;
function check(p1, p2) {
  return p1 ? Window[p2].weak : "p1"
  p2 ? Window[p1].weak : "p2"
}
