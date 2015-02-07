
function checkBird(x) {
  
  if(x<300) {
    createBird(x, 120);
  }
  else {
    createBird(120, 290);
  }
  
}

function main() {

  var initialX, calcX, gap;
  var counter;
  
  // Here's the loop
  for(initialX=50, gap=60, counter=0; counter<7; counter++) {
    calcX = initialX + gap*counter;
    checkBird(calcX);  
  }
  
}
