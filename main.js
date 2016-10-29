var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");


var enemyImg1 = {
  x:96,
  y:480-32
};

//找圖片
var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var enemyImg = document.createElement("img");
enemyImg.src = "images/jason.gif";
var enemy2Img = document.createElement("img");
enemy2Img.src = "images/rukia.gif";
var enemy3Img = document.createElement("img");
enemy3Img.src = "images/daigh.gif";
var button = document.createElement("img");
button.src = "images/tower-btn.png";
var tower = document.createElement("img");
towerImg.src = "images/tower.png";

//畫畫
function draw1(){
ctx.drawImage(bgImg,0,0);
ctx.drawImage(enemyImg,enemyImg1.x,enemyImg1.y);
ctx.drawImage(enemy2Img,95,100);
ctx.drawImage(enemy3Img,0,0);
ctx.drawImage(button,580,420,60,60);
ctx.drawImage(towerImg,cursor.x,cursor.y);
}
setInterval(draw1,16);

//找游標
var cursor = {};
$("#game-canvas").on("mousemove", function (event){
 cursor={
x:event.offsetX,
y:event.offsetY
}});

//製造城堡
var isBuilding = false;
var tower={};
var cursor = {};
$( "#game-canvas" ).on( "click", function(){
  if(isCollided(cursor.x, cursor.y, 590, 432, 50, 50)){
    if(isBuilding){
    isBuilding= false;
  }
    else{
    isBuilding = true;
  }
  }
  else if(isBuilding){
  towerImg.x =cursor.x-cursor.x%32;
  towerImg.y =cursor.y-cursor.y%32;
 isBuilding=false;
  }
 
});

//判斷之間

function isCollided(pointX, pointY, targetX, targetY, targetWidth, targetHeight) {
    if(     pointX >= targetX
        &&  pointX <= targetX + targetWidth
        &&  pointY >= targetY
        &&  pointY <= targetY + targetHeight
    ){
        return true;
    } else {
        return false;
    }
}

