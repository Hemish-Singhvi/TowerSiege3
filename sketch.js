const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var B1, B2, B2, B3, B4, B5, B6, B7, B8, B9, B10
var B11, B12, B13, B14, B15, B16, B17, B18, B19, B20, B21, B22, B23, B24, B25;
var P1, P2, ground;
var slingShot, rock;
var color, colors, backgroundImg
var score = 0;

function setup() {
	createCanvas(1200, 600);
	engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    //Pyramid1
    B1 = new block(830, 235);
    B2 = new block(860, 235);
    B3 = new block(890, 235);
    B4 = new block(920, 235);
    B5 = new block(950, 235);
    B6 = new block(860, 195);
    B7 = new block(890, 195);
    B8 = new block(920, 195);
    B9 = new block(890, 155);
    //Pyramid2
    B10 = new block(700, 500);
    B11 = new block(730, 500);
    B12 = new block(760, 500);
    B13 = new block(790, 500);
    B14 = new block(820, 500);
    B15 = new block(850, 500);
    B16 = new block(880, 500);
    B17 = new block(730, 460);
    B18 = new block(760, 460);
    B19 = new block(790, 460);
    B20 = new block(820, 460);
    B21 = new block(850, 460);
    B22 = new block(760, 420);
    B23 = new block(790, 420);
    B24 = new block(820, 420);
    B25 = new block(790, 380);

    P1 = new platform(790, 525, 280);
    P2 = new platform(890, 260, 200);
    ground = new platform(600, 590, 1200)

    rock = new polygon(240, 330);

    slingShot = new Slings(rock.body, {x:240, y:330});
}



function draw() {
  //background(backgroundImg);
  background(0);
  Engine.update(engine);
  
  B1.display();
  B2.display();
  B3.display();
  B4.display();
  B5.display();
  B6.display();
  B7.display();
  B8.display();
  B9.display();
  B10.display();
  B11.display();
  B12.display();
  B13.display();
  B14.display();
  B15.display();
  B16.display();
  B17.display();
  B18.display();
  B19.display();
  B20.display();
  B21.display();
  B22.display();
  B23.display();
  B24.display();
  B25.display();
  
  B1.scoring();
  B2.scoring();
  B3.scoring();
  B4.scoring();
  B5.scoring();
  B6.scoring();
  B7.scoring();
  B8.scoring();
  B9.scoring();
  B10.scoring();
  B11.scoring();
  B12.scoring();
  B13.scoring();
  B14.scoring();
  B15.scoring();
  B16.scoring();
  B17.scoring();
  B18.scoring();
  B19.scoring();
  B20.scoring();
  B21.scoring();
  B22.scoring();
  B23.scoring();
  B24.scoring();
  B25.scoring();

  P1.dispay();
  P2.dispay();
  ground.dispay();

  rock.dislay();

  slingShot.display();
  drawSprites();
}
function mouseDragged(){
	Matter.Body.setPosition(rock.body, {x: mouseX , y: mouseY});
    
}

function mouseReleased(){
  slingShot.fly();
}

function keyPressed(){
    if(keyCode === 32){
      Matter.Body.setPosition(rock.body, {x: 150 , y: 500});
    	slingShot.attach(rock.body);
    }
}
/*async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "BGBlack.png";
  }
  else{
      bg = "BGwhite.png";
  }

  backgroundImg = loadImage(bg);
}*/