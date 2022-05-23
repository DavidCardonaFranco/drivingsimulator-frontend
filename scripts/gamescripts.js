
let level;
let carPosY;
let numConos = 5;
let conosPosX = []
let conosPosY = []
let time;

function setup() {
    x=0;
    time=0;
    document.getElementById("time").innerHTML = "Tiempo: "+time;
    document.getElementById("user").innerHTML = "Usuario: "+localStorage.getItem("user");
    document.getElementById("date").innerHTML = "Fecha: "+ new Date().toISOString().slice(0, 10);
    level=1
    numConos = 5;
    conosPosX = [];
    conosPosY = [];
    var myCanvas= createCanvas(windowWidth/1.35, windowWidth/2.2);
    carPosY=height / 2;
    myCanvas.parent("gameDiv");
    car = loadImage('../assets/car2.png');
    cono = loadImage('../assets/cono.png');
    for (let i = 0; i < numConos; i++) {
        conosPosY.push(width/(numConos*1.5)*i);
        conosPosX.push(height+random(700))
    }
    
}

function draw() {
    background(220);
    image(car, 5, carPosY, car.width / 5, car.height / 5);
    for (let i = 0; i < numConos; i++) {
        conosPosX[i]=conosPosX[i] -level
        image(cono, conosPosX[i], conosPosY[i], cono.width / 8, cono.height / 8);
        if (conosPosX[i]<-width/25) {
            conosPosX[i]=height+random(700);
        }

        if (car.width / 5 >conosPosX[i]) {
            
            if (carPosY+(cono.height / 16)>conosPosY[i] && (carPosY+car.height / 7)<conosPosY[i]+cono.height / 5) {
                noLoop();
                guardarDatos();
            }
        }
    }

    if (keyIsDown(65)) {
        carPosY-=5
    }
    if(keyIsDown(68)){
        carPosY+=5
    }
    if (frameCount%(60)==0) {
        time++
        document.getElementById("time").innerHTML = "Tiempo: "+time;
    }
    if (frameCount%(60*4)==0) {
        level+=0.5;
    }
}


function windowResized() {
    //resizeCanvas(windowWidth/1.3, windowWidth/2.2);
    //reiniciar game
    loop();
    setup();
}

function terminar(){
    
    document.location.href="../html/main.html";
}

function guardarDatos(){
    let lista = JSON.parse(localStorage.getItem("simulaciones"));
    lista.push([localStorage.getItem("email"),new Date().toISOString().slice(0, 10),time])
    localStorage.setItem("simulaciones",JSON.stringify(lista));
}

//mouseX
//mouseY
//mouseIsPressed