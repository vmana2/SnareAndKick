//Code created by Vincent Manara Jr. for Art 151 Intro to Creative Coding (43433).

//Declaring variables
let snareSound;
let kickSound;
let hatSound;
let distSound;
let font;
let font2;
let phrase = 'snare and kick'
let replacePhrase = 'SNARE AND KICK'
let x = 250;
let y = 260;
let frame = 30;
let img1;
let img2;
let img3;
let imgOne;
let imgDM = 0
let imgDM2 = 0

//Preloading font and sound files
function preload() {
  soundFormats('mp3', 'ogg', 'wav');
  snareSound = loadSound('snareSound.mp3');
  kickSound = loadSound('kickSound.mp3');
  hatSound = loadSound('hatSound.mp3');
  distSound = loadSound('distortedSnare.mp3');
  echoSound = loadSound('echoSoundmp3.mp3');
  bassSound = loadSound('808Sound.mp3');
  font = loadFont('Olondon_.otf');
  img1 = loadImage('teeth1.png');
  img2 = loadImage('teeth2.png');
  img3 = loadImage('teeth4.png');
  imgOne = loadImage('teeth1.png');
  
}

function setup() {
  createCanvas(500, 500);
  frameRate(frame)
}

function draw() {
  background(255);
  textFont(font)
  fill(255, 0, 0)
  stroke(255, 0, 0 + random(0, 100))
  strokeWeight(0.5)
  textAlign(CENTER)
  textSize(50)
  text(phrase,x, y)
  
  //Was used to determine where to create the button area.
  // stroke(0)
  // textSize(30)
  // text("x: "+ mouseX, 250, height/4);
  // text("y: "+ mouseY, 250, height/3);
  
   if (mouseX < 120 || mouseX > 380){
     x = random(250, 260)
     y = random(245, 260)
     phrase = replacePhrase
   } else {
     x = random(250, 251)
     y = random(260,261)
     phrase = 'snare and kick'
   }

//This code is meant to control what image to display, thus creating the animation effect.
image(img1, imgDM, imgDM2)
if (mouseY >= 150 || mouseY <= 370 ){
    img1 = img3
} 
if (mouseY <= 150 || mouseY >=370){
  img1 = img2
}
if (mouseY <= 100 || mouseY >= 400){
  img1 = imgOne
}
}

//Creates a button area determining which sound to play.
function mousePressed(){
  if (mouseY >= 230 && mouseY <=270 && mouseX >= 130 && mouseX <= 230){
    snareSound.play();
  } else if (mouseY >= 230 && mouseY <=270 && mouseX >= 300 && mouseX <= 380){
  kickSound.play();
  } else if (mouseY >= 230 && mouseY <=270 && mouseX >= 230 && mouseX <= 290){
    hatSound.play();
  } else if (mouseY >= 230 && mouseY <=270 && mouseX >= 0 && mouseX <= 120){
    distSound.play();
  }else if (mouseY >= 230 && mouseY <=270 && mouseX >= 381 && mouseX <= 500){
    bassSound.play();
  } else if (mouseY > 150 && mouseY < 370){
    echoSound.play()
  }
}