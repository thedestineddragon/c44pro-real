var thunderI1,thunderI2,thunderI3,thunderI4;
var wI1,wI2,wI3,wI4,wI5,wI6,wI7,wI8;
var random;
var player;
function preload(){
   thunderI1 = loadImage("images/thunderbolt/1.png");
   thunderI2 = loadImage("images/thunderbolt/2.png");
   thunderI3 = loadImage("images/thunderbolt/3.png");
   thunderI4 = loadImage("images/thunderbolt/4.png");
   wI1 = loadImage("images/walking/walking_1.png") 
   wI2 = loadImage("images/walking/walking_2.png") 
   wI3 = loadImage("images/walking/walking_3.png") 
   wI4 = loadImage("images/walking/walking_4.png") 
   wI5 = loadImage("images/walking/walking_5.png") 
   wI6 = loadImage("images/walking/walking_6.png") 
   wI7 = loadImage("images/walking/walking_7.png") 
   wI8 = loadImage("images/walking/walking_8.png") 
  
}

function setup(){
    createCanvas(400,400)
    player = createSprite(200,300,10,10);
    thunder = createSprite(200,0,10,10);
}

function draw(){
    background("black")
    if (frameCount % 5 === 0) {
        var rand = Math.round(random(1,8));
        switch(rand){
            case 1: player.addImage("fruit1",wI1);
            break;
            case 2: player.addImage("fruit1", wI2);
            break;
            case 3: player.addImage("fruit1", wI3);
            break;
            case 4: player.addImage("fruit1", wI4);
            break;
            case 5: player.addImage("fruit1", wI5);
            break;
            case 6: player.addImage("fruit1", wI6);
            break;
            case 7: player.addImage("fruit1", wI7);
            break;
            case 8: player.addImage("fruit1", wI8);
            break;

        }
        if (frameCount % 5 === 0) {
            var ran = Math.round(random(1,8));
            switch(ran){
                case 1: thunder.addImage("fruit1",thunderI1);
                break;
                case 2:thunder.addImage("fruit1", thunderI2);
                break;
                case 3: thunder.addImage("fruit1", thunderI3);
                break;
                case 4: thunder.addImage("fruit1", thunderI4);
                break;
            }
        wI1.resize(150,150)
        wI2.resize(150,150);
        wI3.resize(150,150);
        wI4.resize(150,150);
        wI5.resize(150,150);
        wI6.resize(150,150);
        wI7.resize(150,150);
        wI8.resize(150,150);
    drawSprites();
}   
    }
}
