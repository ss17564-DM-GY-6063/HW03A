let cDiam = 40;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(240,215,0);
}

function draw() {
  fill("black");

  for (let xpos = 0; xpos <= width; xpos += cDiam) {
    for (let ypos = 0; ypos <= height; ypos += cDiam) {
        ellipse(xpos, ypos, 10, 10);
        ellipse(xpos + cDiam / 2, ypos, 3, 3);
    }
  }

  for (let xpos = cDiam / 2; xpos <= width; xpos += cDiam) {
    for (let ypos = cDiam / 2; ypos <= height; ypos += cDiam) {
        ellipse(xpos, ypos, 10, 10);
        ellipse(xpos + cDiam / 2, ypos, 3, 3);
    }
  }

}