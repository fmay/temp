
function main() {

  var x1, y1, x2, y2, x3, y3;
  
  x1 = 0;
  y1 = 0;
  x2 = 0;
  y2 = 100;
  x3 = 0
  y3 = 200;
  
  positionBirds(x1, y1, x2, y2, x3, y3);
  
  var y;  
  y = 100;
  x = 100;
  gap = 20;
  positionBirds(x, y, x+gap, y, x+gap*2, y);
  
}
