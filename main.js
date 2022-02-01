function preload(){
}

function setup(){
    canvas=createCanvas(700,600);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,100,100,500,400);
    fill("red");
    stroke("violet");
    circle(50,50,70);
    circle(50,550,70);
    circle(650,50,70);
    circle(650,550,70);

    fill("green");
    stroke("violet");
    rect(90,40,520,20);
    rect(90,540,520,20);
    rect(40,90,20,420);
    rect(640,90,20,420);
}

function take_snapshot(){
    save('myPic.png')
}

function filter_tint(){
    tint_color=document.getElementById("color_name").value
}
