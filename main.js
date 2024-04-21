function setup(){
    canvas=createCanvas(400,400);
    video=createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video ,0,50, 300,300);
}