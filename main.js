status1 = "";
function preload(){
    img = loadImage('Rc.jpg');
}
function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();

    object_dectector = ml5.objectDectector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status- dectecting objects";
}

function modelLoaded(){
    console.log("model loaded");
    status1 = true;
    object_dectector.detect(img, gotResults);
}

function gotResults(error, results){
   if(error){
       console.error(error);
   }
   else{
       console.log(results);
   }
}
