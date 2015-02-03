
function main() {

  var initialX, initialY, gap;
  var counter;
  
  initialX = 150;
  initialY = 370;
  gap = 60;

  counter = 0;
  debugger;
  while(counter<7) {
    createBird(initialX + gap*counter, 370);  
    counter = counter + 1;
  }
  
}
