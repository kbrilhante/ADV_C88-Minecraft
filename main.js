const canvas = new fabric.Canvas('myCanvas');

var blockImageWidth = 30;
var blockImageHeight = 30;

var playerX = 10;
var playerY = 10;

const playerWidth = 150;
const playerHeight = 140;

var playerObject = "";
var blockImageObject = "";

// playerUpdate();

function playerUpdate() {
    fabric.Image.fromURL("player.png", function(Img){
        playerObject = Img;
        playerObject.scaleToWidth(playerWidth);
        playerObject.scaleToHeight(playerHeight);
        playerObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(playerObject);
    });
}

function newImage(getImage) {
    fabric.Image.fromURL(getImage, function(Img) {
        blockImageObject = Img;
        blockImageObject.scaleToWidth(blockImageWidth);
        blockImageObject.scaleToHeight(blockImageHeight);
        blockImageObject.set({
            top: playerY,
            left: playerX
        });
        canvas.add(blockImageObject);
    });
}

window.addEventListener("keydown", keyDown);

function keyDown(e) {
    const keyPressed = e.keyCode;
    const passo = 10;
    if (e.shiftKey) {
        if (keyPressed == 189 && (blockImageHeight > 10)) {
            console.log("Diminui o tamanho do bloco");
            changeSize(-passo);
        }
        if (keyPressed == 187) {
            console.log("Aumenta o tamanho do bloco");
            changeSize(passo);
        }
    }

    if (keyPressed == 66) { //B
        console.log(e.key);
        newImage("bricks.jpg");
    } else if (keyPressed == 89) { //Y
        console.log(e.key);
        newImage("yellowBricks.png");
    } else if (keyPressed == 68) { //D
        console.log(e.key);
        newImage("dirt.png");
    } else if (keyPressed == 75) { //K
        console.log(e.key);
        newImage("darkGrass.png");
    } else if (keyPressed == 76) { //L
        console.log(e.key);
        newImage("lightGrass.png");
    } else if (keyPressed == 71) { //G
        console.log(e.key);
        newImage("glowstone.png");
    } else if (keyPressed == 78) { //N
        console.log(e.key);
        newImage("netherrack.jpg");
    } else if (keyPressed == 83) { //S
        console.log(e.key);
        newImage("stone.jpg");
    } else if (keyPressed == 87) { //W
        console.log(e.key);
        newImage("wood.jpg");
    }

    if (keyPressed == 38) {
        console.log("cima");
        if (playerY > 0) {
            movePlayer(0, -passo);
        }
    } else if (keyPressed == 37) {
        console.log("esquerda");
        if (playerX > 0) {
            movePlayer(-passo, 0);
        }
    } else if (keyPressed == 40) {
        console.log("baixo");
        if (playerY < (canvas.height - playerHeight)) {
            movePlayer(0, passo);
        }
    } else if (keyPressed == 39) {
        console.log("direita");
        if (playerX < (canvas.width - playerWidth)) {
            movePlayer(passo, 0);
        }
    }
}

function changeSize(size) {
    blockImageWidth += size;
    blockImageHeight += size;
    document.getElementById("larguraAtual").innerHTML = blockImageWidth;
    document.getElementById("alturaAtual").innerHTML = blockImageHeight;
}

function movePlayer (x, y) {
    playerX += x;
    playerY += y;

    console.log("X = " + playerX + " | Y = " + playerY);

    canvas.remove(playerObject);
    playerUpdate();
}