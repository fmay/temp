
// Global Variables
var currentX=110;
var currentY=290;

function checkBird(x) {
  
  if(x < 450) {
    createBird(x, 120);
  }
  else {
    createBird(currentX, currentY);
    currentX = currentX + 60;
    if(currentX > 360) {
      currentY += 80;
      currentX = 110;
    }
  }

}

function main() {

  var initialX, calcX, gap;
  var counter;
  
  // Here's the loop
  for(initialX=50, gap=60, counter=0; counter<20; counter++) {
    calcX = initialX + gap*counter;
    checkBird(calcX);  
  }
  
}
