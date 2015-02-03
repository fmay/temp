
function main() {

  var initialX, gap;
  var counter;
  
  // Initialize our variables
  initialX = 150;
  gap = 60;
  counter = 0;

  // Here's the loop
  while(counter<7) {
    createBird(initialX + gap*counter, 370);  
    counter = counter + 1;
  }
  
}
