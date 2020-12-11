var robot = require("robotjs");
var id = setInterval(showMousePosition , 1000);

function showMousePosition(){
    var mouse = robot.getMousePos();
    console.log(mouse);

    if(mouse.x == 0 && mouse.y == 0){
        clearInterval(id);
    }
}