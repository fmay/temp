
var birdCount=0;

function createBird(x, y) {
  
  var bird, body;
  
  debugger;
  bird = document.createElement("img");
  bird.style.position = "fixed";
  bird.style.top = y + "px";
  bird.style.left = x + "px";
  bird.style.width = "100px";
  bird.setAttribute("id", "bird" + birdCount++);
  bird.setAttribute("src", "bird.png");
  document.body.appendChild(bird);
  
}
