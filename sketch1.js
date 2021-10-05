function setup(){
   let cnv= createCanvas(400,100);
     cnv.parent('canvas-container');
}


function draw() {
  background(211);
  rectMode(CENTER);
  noStroke();
  line(0,height/2,width,height/2);
  var off = radians(frameCount);
  
  for(var x=0; x<width; x= x+20){
    var move = sin(x/width * radians(360) + off) * 25;
    fill(200);
    rect( x, height/2+move, 5, 20);
  }

}
