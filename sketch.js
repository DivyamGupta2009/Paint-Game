var pointer, database, pointerPositionRef;

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    pointer = createSprite(mouseX, mouseY, 10, 10);
    pointer.shapeColor = "black";
    pointerPositionRef = database.ref("pointer/Position");
    pointerPositionRef.on("value", readPosition);
}

function draw(){
    background("white");
    writePosition();
    readPosition();
    
    if(mousePressed()){
    mouseDragged();
    }
   
    drawSprites();
}

function writePosition(x,y){
    database.ref("pointer/Position").set({
        'x':Position.x+x,
        'y':Position.y+y
    })
}
function readPosition(data){
Position = data.val();
pointer.x = Position.x;
pointer.y = Position.y;
}
function mouseDragged(){
    strokeWeight(4);
    fill(255);
}
