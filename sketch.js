function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block');
  d.position(0,0);
  angleMode(DEGREES);
  noStroke();
  let gui_setup = new dat.GUI();
  gui = new Gui();
  gui_setup.add(gui, 'eyes', 50, 100);
  gui_setup.add(gui, 'mouth', 75, 180);
  gui_setup.add(gui, 'hairLength', 100, 250);
  gui_setup.addColor(gui, 'hairColor');
  gui_setup.addColor(gui, 'skinColor');
  gui_setup.addColor(gui, 'eyeColor');
  gui_setup.addColor(gui, 'mouthColor');
  gui_setup.addColor(gui, 'hatColor');
  gui_setup.addColor(gui, 'bColor');
    gui_setup.add(gui,'description').onChange(description);

}

function draw() {
  background(gui.bColor);
  rectMode(CENTER);
  let eyeSpace = 55;
  let mouthSpace = 60;
  let noseSpace = 20;
  let hatSpace = 100;

  //   hair
  fill(gui.hairColor);
  rect(windowWidth / 2, windowHeight / 2 + 90, 250, gui.hairLength);

  // head
  fill(gui.skinColor);
  ellipse(windowWidth / 2, windowHeight / 2, 260, 300);

  //   whites of eyes
  fill('white');
  ellipse(windowWidth / 2 + eyeSpace, windowHeight / 2.3, gui.eyes, gui.eyes);
  ellipse(windowWidth / 2 - eyeSpace, windowHeight / 2.3, gui.eyes, gui.eyes);

  //   iris color
  fill(gui.eyeColor);
  ellipse(windowWidth / 2 + eyeSpace, windowHeight / 2.3, gui.eyes - 20, gui.eyes - 20);
  ellipse(windowWidth / 2 - eyeSpace, windowHeight / 2.3, gui.eyes - 20, gui.eyes - 20);

  //   pupils
  fill('black');
  ellipse(windowWidth / 2 + eyeSpace, windowHeight / 2.3, gui.eyes - 40, gui.eyes - 40);
  ellipse(windowWidth / 2 - eyeSpace, windowHeight / 2.3, gui.eyes - 40, gui.eyes - 40);

  //   mouth
  fill(gui.mouthColor);
  arc(windowWidth / 2, windowHeight / 2 + mouthSpace, gui.mouth, gui.mouth, 0, 180, CHORD);

  //   nose
  fill('#ebab63');
  arc(windowWidth / 2, windowHeight / 2 + noseSpace, 30, 30, 0, 180, CHORD);
  
  //   beanie
  fill(gui.hatColor);
  arc(windowWidth / 2, windowHeight / 2, 290, 330, 215, 325, CHORD);
  rect(windowWidth/2,windowHeight/2-85,270,30,10);
}

function Gui() {
  this.eyes = 80;
  this.mouth = 90;
  this.hairLength = 100;
  this.hairColor = '#a7856a';
  this.bColor = '#89c65d';
  this.skinColor = '#f8bc76';
  this.eyeColor = '#673400';
  this.mouthColor = '#c98276';
  this.hatColor = '#f54c26';
    this.description = true;
}

function description(){
    if (this.description){
        d.show();
        
 } else {
     d.style('display','none');
 }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}