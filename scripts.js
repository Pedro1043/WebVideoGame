window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 250;
    var y = 150;
    var coinx = Math.random() * (600-50);
    var coiny = Math.random() * (400-50);
    var t = Date.now();
    let speed = 100;
    let dir = 0;
    let score = 0;

    //botones
    let up = document.getElementById("up");
    let left = document.getElementById("left");
    let down = document.getElementById("down");
    let right = document.getElementById("right");
    /*
    dir = 1 will indicate movement to the right; 
    dir = 2: movement to the left;
    dir = 3: movement down;
    dir = 4: movement up.
    dir = 0: stop.    
    */

    //Controlar con el mouse
    up.onmousedown = function () {dir = 4;}    
    up.onmouseup = function () {dir = 0;}
    left.onmousedown = function () {dir = 2;}
    left.onmouseup = function () {dir = 0;}
    down.onmousedown = function () {dir = 3;} 
    down.onmouseup = function () {dir = 0;} 
    right.onmousedown = function () {dir = 1;} 
    right.onmouseup = function () {dir = 0;}
    
    //Controlar con la pantalla tactil
    up.ontouchstart = function() {dir = 4;}
    up.ontouchend = function() {dir = 0;}
    left.ontouchstart = function(){dir = 2;}
    left.ontouchend = function() {dir = 0;}
    down.ontouchstart = function() {dir = 3;}
    down.ontouchend = function() {dir = 0;}
    right.ontouchstart = function() {dir = 1;}
    right.ontouchend = function() {dir = 0;}



    function draw() {
        var timePassed = (Date.now() - t) / 1000 ;
        t = Date.now();
        var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);

        context.font = '10px Arial';
        context.fillStyle = 'black';
        context.fillText("FPS: " + fps, 2, 9); //Contador de fps

        context.font = "25px Arial";
        context.fillStyle = 'black';
        context.fillText("Score: " + score, 2, 33.5) //Puntaje

        //Rectangulo rojo
        context.beginPath();
        context.rect(x, y, 100, 100);  
        context.fillStyle="red";
        context.fill();

        //Monedas 
        context.beginPath();
        context.rect(coinx,coiny, 50, 50);
        context.fillStyle="#e3c228";
        context.fill();

        if(dir == 1){                      //Derecha
            if(x+100 < 600){               //Colición 
                x += (speed * timePassed); 
            }
        }else if(dir == 2){                //Izquierda
            if(x > 0){                     //Colición 
                x -= (speed * timePassed); 
            } 
        }else if (dir == 3){               //Arriba
            if(y+100 < 400){               //Colición
                y += (speed * timePassed);   
            }
        }else if (dir == 4){               //Abajo
            if(y > 0){                     //Colición
                y -= (speed * timePassed);   
            }
        }

        //Colición de las monedas
        if (coinx <= x+100 && x <= coinx+50 && coiny <= y+100 && y <= coiny+50){
            score++;
            coinx = Math.random() * (600-50);
            coiny = Math.random() * (400-50);
        }

        window.requestAnimationFrame(draw);
    }
    draw();
}