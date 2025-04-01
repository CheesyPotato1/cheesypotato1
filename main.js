const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
c.imageSmoothingEnabled = false;
canvas.width = 10;
canvas.height = 10;

var arrowLeft, arrowRight, arrowUp, arrowDown;

arrowLeft = false;
arrowRight = false;
arrowUp = false;
arrowDown = false;

document.addEventListener("keydown", (e) => {
  updateKeys(e, true);
});

document.addEventListener("keyup", (e) => {
  updateKeys(e, false);
});

function updateKeys(e, upOrDown) {
  switch (e.key) {
    case 'ArrowLeft':
      arrowLeft = upOrDown;
      break;
    case 'ArrowRight':
      arrowRight = upOrDown;
      break;
    case 'ArrowUp':
      arrowUp = upOrDown;
      break;
    case 'ArrowDown':
      arrowDown = upOrDown;
      break;
    
  }
}

var length = 0;
var direction = "down";

var level = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 
];

function animate() {


  let headIndex = level.indexOf(3);
  let prevHeadIndex = headIndex;
  let x = headIndex % 10;
  let y = Math.floor(headIndex / 10);

  switch (direction) {
    case "up":
      y --;
    case "down":
      y ++;
    case "right":
      x ++;
    case "left":
      x --;
  }

  headIndexndex = y * 10 + x;
  level[headIndexndex] = 3;
  level[prevHeadIndex] = 5;
  


  level.forEach((tile, index) => {
    let x = index % 10;
    let y = Math.floor(index / 10);
    if(tile == 1) {
      c.fillStyle = "green";
      c.fillRect(x, y, 1, 1)
    }
    if(tile == 2) {
      c.fillStyle = "red";
      c.fillRect(x, y, 1, 1)
    }
    if(tile == 3) {
      c.fillStyle = "yellow";
      c.fillRect(x, y, 1, 1)
    }
  })
}

setInterval(animate, 200);