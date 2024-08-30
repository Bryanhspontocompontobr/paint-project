function setup() {
    createCanvas(600, 600);
    background("Blue");
  }
  
  function draw() {
    
    
    if (mouseIsPressed) {
      circle(mouseX, mouseY, 15, 15);
      fill ("white")
      stroke("white")
    }
  }