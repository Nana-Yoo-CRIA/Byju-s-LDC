canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");

roverWidth = 100;
roverHeight = 90;

backgroundImage = "mars.jpg";

roverImage = "rover.png";

roverX = 10;
roverY = 10;

function add() {
    backgroundImgTag = new Image();
    backgroundImgTag.onload = uploadBackground;
    backgroundImgTag.src = backgroundImage;

    roverImgTag = new Image();
    roverImgTag.onload = uploadRover;
    roverImgTag.src = roverImage;
}

function uploadBackground() {
    ctx.drawImage(backgroundImgTag, 0, 0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImgTag, roverX, roverY, roverWidth, roverHeight);
}


window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
    keyPressed = e.keyCode;
    console.log(keyPressed);
        if(keyPressed == '38')
        {
            up();
            console.log("cima");
        }
        if(keyPressed == '40')
        {
            down();
            console.log("baixo");
        }
        if(keyPressed == '37')
        {
            left();
            console.log("esquerda");
        }
        if(keyPressed == '39')
        {
            right();
            console.log("direita");
        }
    }

    function up()
    {
        if (roverY >=0)
        {
            roverY = roverY - 10;
            console.log("Quando direcional cima for pressionada, x = " + roverX + "| y = " + roverY);
            uploadBackground();
            uploadRover();
        }
    }
    function down()
    {
        if (roverY <=500)
        {
            roverY = roverY + 10;
            console.log("Quando direcional cima for pressionada, x = " + roverX + "| y = " + roverY);
            uploadBackground();
            uploadRover();
        }
    }
    function left()
    {
        if (roverX >=0)
        {
            roverX = roverX - 10;
            console.log("Quando direcional cima for pressionada, x = " + roverX + "| y = " + roverY);
            uploadBackground();
            uploadRover();
        }
    }
    function right()
    {
        if (roverX <=700)
        {
            roverX = roverX + 10;
            console.log("Quando direcional cima for pressionada, x = " + roverX + "| y = " + roverY);
            uploadBackground();
            uploadRover();
        }
    }





