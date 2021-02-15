let w = 640;
let h = 360;
let capture;

function setup() {
  let c = createCanvas(w,h);
  c.parent("#sketch-parent");
  createCanvas(w, h);
  pixelDensity(1);
  capture = createCapture(VIDEO);
  capture.size(w, h);
  capture.hide();
}

function draw() {
  background(0, 0, 0);
  let stepSize = 10;
  capture.loadPixels();
  // let threshold = 127;
 // let threshold = map(mouseX, 0, width, 0, 255, true);
  
  for(let y = 0; y < capture.height; y+=stepSize) {
    for(let x = 0; x < capture.width; x+=stepSize) {
      const index = (x + y * capture.width) * 4;
      
      let r = capture.pixels[index];
      let g = capture.pixels[index+1];
      let b = capture.pixels[index+2];
      let c = color(r+30, g-10, b+10);
      
      let totalBrightness = r + g + b;
      
      let brightness = totalBrightness/3;
      
      let size = map(brightness, 0, 255, stepSize/4, stepSize*2);
     // noStroke();
      

      push();
        translate(width, 0);
        scale(-1, 1);
        translate(stepSize/2, stepSize/2);
      
        strokeWeight(1);
        stroke(c);
        noFill();
        ellipse(x-50, y-50, size-50, size-50);
      
        strokeWeight(1);
        stroke(c);
        
        line(x, y, x+10, y+15);
      
        fill(255,255,255,120);
        stroke(c);
        ellipse(x,y,size,size);
      pop();
      
//       push();
//         translate(width, 0);
//         scale(-1, 1);
        
//         rect(x, y, size, size);
//       pop();
      
    }
  }
 // capture.updatePixels();
  
  //image(capture, 0, 0);
}