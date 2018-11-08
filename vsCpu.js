var p1, p2;
function check(p1, p2) {
  return p1 ? window[p2].weak : "p1"
         p2 ? window[p1].weak : "p2"
}
function cpu() {
  var rand = Math.floor(Math.random() * 2)
  return rand ? 0 : "stone"
         rand ? 1 : "scissor"
         rand ? 2 : "paper"
}
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
function onKeyUp() {
  var keyCode = event.keyCode;
  switch (keyCode) {
    case 65: //a
      keyA = false;
      break;
    case 83: //s
      keyS = false;
      break;
    case 68: //d
      keyD = false;
      break;
    default:
  }
}
