var canvas = document.getElementById("game-canvas");
var ctx = canvas.getContext("2d");
var FPS = 50;
var clock = 0;
var enemies = [];

function Enemy(){
  this.x = 96;
  this.y = 480-32;
  this.speedX = 0;
  this.speedY = -64;
  this.move = function(){
  this.x = this.x + this.speedX/FPS;
  this.y = this.y + this.speedY/FPS;
}
};
var enemy = new Enemy();

//找圖片
var bgImg = document.createElement("img");
bgImg.src = "images/map.png";
var enemyImg = document.createElement("img");
enemyImg.src = "images/jason.gif";
var enemy2Img = document.createElement("img");
enemy2Img.src = "images/rukia.gif";
var enemy3Img = document.createElement("img");
enemy3Img.src = "images/daigh.gif";
var towerImg = document.createElement("img");
towerImg.src = "images/tower-btn.png";
var towerbuiltImg = document.createElement("img");
towerbuiltImg.src = "images/tower.png";

var silmeImg = document.createElement("img");
silmeImg.src = "images/silme.gif";

//畫畫
function draw1(){
enemy.move();  
ctx.drawImage(bgImg,0,0);
ctx.drawImage(enemyImg,enemy.x,enemy.y);
ctx.drawImage(enemy2Img,95,100);
ctx.drawImage(enemy3Img,0,0);
ctx.drawImage(towerImg,580,420,60,60);  
if(isBuilding){
  ctx.drawImage(towerbuiltImg,cursor.x,cursor.y);
  } 
ctx.drawImage(towerbuiltImg,tower.x,tower.y);  
  for(var i=0 ; i < enemies.length ; i++){
    enemies[i].move();
    ctx.drawImage(silmeImg,enemies[i].x,enemies[i].y);
  }
  clock++;
}

//找游標
var cursor = {};
$("#game-canvas").on("mousemove", function (event){
 cursor = {
x:event.offsetX,
y:event.offsetY
}});

//製造城堡
var isBuilding = false;
var tower = {};
var cursor = {};
$( "#game-canvas" ).on( "click", function(){
  if(isCollided(cursor.x, cursor.y, 580, 420, 60, 60)){
    if(isBuilding){
    isBuilding= false;
  }
    else{
    isBuilding = true;
  }
  }
  else if(isBuilding){
  tower.x = cursor.x - cursor.x%32;
  tower.y = cursor.y - cursor.y%32;
  isBuilding = false;
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

if((clock % 80==0)){
  var newEnemy = new Enemy();
  enemies.push(newEnemy);
}



setInterval(draw1,1000/FPS);
