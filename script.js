var robot = require("robotjs");
var fs = require("fs");

setTimeout(startOpenBoard , 2000);

robot.setMouseDelay(1000);

function startOpenBoard(){
    robot.moveMouseSmooth(68,853);
    robot.mouseClick();
    robot.typeString("openboard");
    robot.keyTap("enter");
    setTimeout(writeHi , 2000);
}

function writeHi(){
    robot.moveMouseSmooth(400 , 250);
    robot.mouseToggle("down" , "left");
    robot.dragMouse(400 , 450);
    robot.mouseToggle("up" , "left");

    robot.moveMouseSmooth(400 , 350);
    robot.mouseToggle("down" , "left");
    robot.dragMouse(600 , 350);
    robot.mouseToggle("up" , "left");

    robot.moveMouseSmooth(600 , 250);
    robot.mouseToggle("down" , "left");
    robot.dragMouse(600 , 450);
    robot.mouseToggle("up" , "left");

    robot.moveMouseSmooth(700 , 250);
    robot.mouseToggle("down" , "left");
    robot.dragMouse(900 , 250);
    robot.mouseToggle("up" , "left");

    robot.moveMouseSmooth(800 , 250);
    robot.mouseToggle("down" , "left");
    robot.dragMouse(800 , 450);
    robot.mouseToggle("up" , "left");

    robot.moveMouseSmooth(700 , 450);
    robot.mouseToggle("down" , "left");
    robot.dragMouse(900 , 450);
    robot.mouseToggle("up" , "left");

    robot.moveMouseSmooth(1428 , 27);
    robot.mouseClick();

    setTimeout(startTelegram , 2000);
}

function startTelegram(){
    robot.moveMouseSmooth(68,853);
    robot.mouseClick();
    robot.typeString("telegram");
    robot.keyTap("enter");

    robot.moveMouseSmooth(515 , 46);
    robot.mouseClick();
    robot.typeString("Gaurav Jio");
    robot.keyTap("enter");
    robot.keyToggle("control" , "down");
    robot.keyTap("a");
    robot.keyTap("delete");
    robot.keyToggle("control" , "up");
    robot.typeString("Hello World. This is an automated message using ROBOTJS");
    robot.keyTap("enter");

    setTimeout(startOneNote , 2000);
}

function startOneNote(){
    robot.moveMouseSmooth(68,853);
    robot.mouseClick();
    robot.typeString("onenote");
    robot.keyTap("enter");

    setTimeout(startChrome , 2000);
}

function startChrome(){
    robot.moveMouseSmooth(68,853);
    robot.mouseClick();
    robot.typeString("chrome");
    robot.keyTap("enter");

    setTimeout(openTabs , 2000);
}

function openTabs(){
    var rdata = fs.readFileSync("./chrome.json");
    var tabs = JSON.parse(rdata);

    for(var i=0 ; i < tabs.length ; i++){
        for(var j=0 ; j<tabs[i].length ; j++){
            robot.typeString(tabs[i][j]);
            robot.keyTap("enter");

            if(j < tabs[i].length - 1){
                robot.keyToggle("control" , "down");
                robot.keyTap("t");
                robot.keyToggle("control" , "up");
            } else if(i < tabs.length - 1){
                robot.keyToggle("control" , "down");
                robot.keyTap("n");
                robot.keyToggle("control" , "up");
            }
        }
    }

    setTimeout(startNotepad , 2000);
}

function startNotepad(){
    robot.moveMouseSmooth(68,853);
    robot.mouseClick();
    robot.typeString("notepad");
    robot.keyTap("enter");

    setTimeout(writeNotepad , 2000);
}

function writeNotepad(){
    robot.typeString("This system is ready to use");
}