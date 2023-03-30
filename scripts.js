window.onload = function() {
    var canvas = document.getElementById("canvas");
    var context = canvas.getContext("2d");
    var x = 0;
    var y = 100;

    var t = Date.now();
    let speed = 100;
    let dir = 1;


    function draw() {
        var timePassed = (Date.now() - t) / 1000 ;
        t = Date.now();
        var fps = Math.round(1 / timePassed);

        context.clearRect(0, 0, 600, 400);

        context.font = '25px Arial';
        context.fillStyle = 'black';
        context.fillText("FPS: " + fps, 23, 30);


        context.beginPath();
        context.rect(x, y, 100, 100);
        context.fillStyle="red";
        context.fill();

        x += dir*(speed * timePassed);

        if (x >= 600 - 100 || x <= 0) {
            dir *= -1;
        }
        window.requestAnimationFrame(draw);
    }
    draw();
}