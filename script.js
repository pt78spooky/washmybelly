console.log("JavaScript loading...");

let gameimage = document.getElementById("image");
const nose = document.getElementById("nose");
const bellyarea = document.getElementById("bellyarea");
const notbelly = document.getElementsByClassName("notbelly");
//text areas
const scorep = document.getElementById("scorep");
const dialoguep = document.getElementById("dialoguep");
let score = 0;
//second counter
var seconds = 0;
var start;
var stop;
var ccinterval = setInterval(checkcounter, 1000);
var countertimeout;
var angerlevel = 0;
//sound effects
let bubblesound1 = new Audio("res/pop1.ogg");
bubblesound1.volume = 0.25;
let bubblesound2 = new Audio("res/pop2.ogg");
bubblesound2.volume = 0.25;
let bubblesound3 = new Audio("res/pop3.ogg");
bubblesound3.volume = 0.25;
let squeegeesound = new Audio("res/squeegee.mp3");
squeegeesound.volume = 0.75;
let boopsound = new Audio("res/boop.mp3");
boopsound.volume = 0.25;
//buttons
const soap = document.getElementById("soap");
const squeegee = document.getElementById("squeegee");

function soapcursor(){
    document.getElementById("gamediv").style.cursor = "url('res/soap.png'), auto";
    bellyarea.style.cursor = "url('res/soap.png'), auto";
    nose.style.cursor = "url('res/soap.png'), auto";
    notbelly.style.cursor = "url('res/soap.png'), default";
}
function squeegeecursor(){
    document.getElementById("gamediv").style.cursor = "url('res/squeegee.png'), auto";
    bellyarea.style.cursor = "url('res/squeegee.png'), auto";
    nose.style.cursor = "url('res/squeegee.png'), auto";
    notbelly.style.cursor = "url('res/squeegee.png'), default";
}

function washmybelly(){
    if (angerlevel == 3 || gameimage.src == "https://pt78spooky.github.io/res/angrybellay1.png"){
        gameimage.src = "res/angrybellay2.png";
        dialoguep.innerHTML = " WASH MY BELLY!!!";
        angerlevel = 0;
    } else if(gameimage.src == "https://pt78spooky.github.io/res/bellay3.png" || gameimage.src == "https://pt78spooky.github.io/res/angrybellay2.png"){
        gameimage.src = "res/bellay1.png"
        dialoguep.innerHTML = "";
        angerlevel++;
    } else if(gameimage.src != "https://pt78spooky.github.io/res/bellay3.png"){
        gameimage.src = "res/bellay3.png"
        dialoguep.innerHTML = "Wash my belly!";
    }
    seconds = 0;
}

bellyarea.addEventListener("mousemove", function (e) {
    if(bellyarea.style.cursor == 'url("res/soap.png"), auto'){
        [1, .9, .8, .5, .25, .6, .4, .3, .2].forEach(function (i) {
        var j = (1 - i) * 25;
        var elem = document.createElement('img');
        var size = Math.ceil(Math.random() * 35 * i + 20) + 'px';
        elem.style.position = 'fixed';
        elem.style.zIndex = 6;
        elem.style.top = e.pageY - window.scrollY + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.left = e.pageX + Math.round(Math.random() * j - j / 2) + 'px';
        elem.style.width = size;
        elem.style.opacity = "0.5";
        elem.style.height = size;
        elem.src = "res/bubble.png";
        elem.style.pointerEvents = 'none';
        document.body.appendChild(elem);
        score = score +0.4;
        scorep.innerHTML = "Score: " +Math.round(score/10);
        window.setTimeout(function () {
        document.body.removeChild(elem);
        }, Math.round(Math.random() * i * 1000));
        var i = Math.floor(Math.random() * 10 +1);
        eval('bubblesound'+i+".play()");
        });
    } else if (bellyarea.style.cursor == 'url("res/squeegee.png"), auto'){
        squeegeesound.play();
        score = score +0.4;
        scorep.innerHTML = "Score: " +Math.round(score/10);
    }
})

function washing(){
    console.log("washing!");
    gameimage.src = "res/bellay2.png";
    dialoguep.innerHTML = "YAAY!!! :3";
    seconds = 0;
}

function notwashing(){
    console.log("not washing...");
    gameimage.src = "res/bellay1.png";
    dialoguep.innerHTML = "";
    squeegeesound.pause();
}

function boop(){
    console.log("boop");
    boopsound.play();
}

function notmybelly(){
    gameimage.src = "res/angrybellay1.png";
    dialoguep.innerHTML = "That's not my belly!";
}

function checkcounter(){
    if (gameimage.src == "https://pt78spooky.github.io/res/bellay2.png"){
        clearTimeout(countertimeout);
    } else if (gameimage.src != "https://pt78spooky.github.io/res/bellay2.png"){
        countertimeout = setTimeout(counter, 1000);
    } else {
        clearTimeout(countertimeout);
    }
}

function counter(){
    console.log(gameimage.src)
    console.log("Anger level: "+angerlevel);
    seconds = seconds +1;
    console.log(seconds+" seconds have passed.");
    if (seconds == 2){
        washmybelly();
    }
}

console.log("Javascript loaded!");