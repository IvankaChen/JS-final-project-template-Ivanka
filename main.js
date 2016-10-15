var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");

var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
function draw(){
  ctx.drawImage(bgImg,0,0);
}
  setInterval(draw,16);

var enemyImg1 = {
  x:10,
  y:10
};
var enemyImg = document.createElement("img");
enemyImg.src = "images/jason.gif";
function person1(){
  ctx.drawImage(enemyImg,enemyImg1.x,enemyImg1.y);
}
  setInterval(person1,16);

var enemy2Img = document.createElement("img");
enemy2Img.src = "images/rukia.gif";
function person2(){
  ctx.drawImage(enemy2Img,0,0);
}
  setInterval(person2,16);

var enemy3Img = document.createElement("img");
enemy3Img.src = "images/daigh.gif";
function person3(){
  ctx.drawImage(enemy3Img,0,0);
}
  setInterval(person3,16);

