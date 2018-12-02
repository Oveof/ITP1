window.addEventListener("keydown", onKeyDown, false);
window.addEventListener("keyup", onKeyUp, false);
//Player controls
var keyA = false;
var keyS = false;
var keyD = false;
var arrowLeft = false;
var arrowDown = false;
var arrowRight = false;
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
    case 37: //left arrow
      arrowLeft = true;
      break;
    case 40: //down arrow
      arrowDown = true;
      break;
    case 39: //right arrow
      arrowRight = true;
      break;
    default:
  }
}
function onKeyUp(event) {
  var keyCode = event.keyCode;
  img1 = document.getElementById('imgp1')
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
    case 37: //left arrow
      arrowLeft = false;
      break;
    case 40: //down arrow
      arrowDown = false;
      break;
    case 39: //right arrowDown
      arrowRight = false;
      break;
    case 13: //Enter
      click()
      break;
    default:
  }
}
