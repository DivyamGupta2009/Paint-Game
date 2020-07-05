var  database;
var drawing = [];
var currentPath = [];

function setup(){
    database = firebase.database();
    createCanvas(500,500);
    canvas.mousePressed(startPath);
    canvas.parent('canvascontainer');
    //canvas.mouseReleased(endPath);
}

function startPath(){
    currentPath =  [];
    drawing.push(currentPath);
}

//function endPath(){
//}

function draw(){
    background(0);
 if(mouseIsPressed){
     var point = {
         x: mouseX,
         y:mouseY
     }
   currentPath.push(point);
 }

 
 stroke(255);
 strokeWeight(4);
 noFill();
 for(var i = 0; i < drawing.length; i++){
     var path = drawing[i];
     beginShape();
    for(var j = 0; j < path.length; j++){
    vertex(path[j].x, path[j].y)
    }
    endShape();
 }
 
}