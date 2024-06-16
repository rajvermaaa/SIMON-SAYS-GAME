let gameSeq = [];
let userSeq = [];

let btns = ["yellow","red","purple","green"];
let btn = document.querySelector("btn");

let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function(){
    if(started == false) {
        console.log("Game is started");
        started = true;

        levelUp();   
    }
}); 

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userflash"); 
    setTimeout(function() {
        btn.classList.remove("userflash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
 
    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    // console.log(randIdx); 
    // console.log(randColor);
    // console.log(randBtn);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randBtn);
}

function checkAns(idx) {
    // console.log(`Current level : ${level}`); 
    // let idx = level-1;

    if(userSeq[idx] === gameSeq[idx]) {
        // console.log("same value");
        if(userSeq.length == gameSeq.length) {
            // levelUp();
            setTimeout(levelUp,1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br>  Press any key to start.`;
        document.querySelector("body").backgroundImage = "url(background.png)";
        setTimeout(function() {
            document.querySelector("body").style.backgroundImage = "url(vecteezy_lost-writing-graffiti-design-on-a-white-background_.jpg)";
        }, 150);
        reset();
    }
}

function btnPress() {
    // console.log("btn was pressed");
    // console.log(this);
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    // console.log(userColor);
    userSeq.push(userColor);

    checkAns(userSeq.length - 1);
 
}

let allBtns = document.querySelectorAll(".btn");
for(btn of allBtns) {
    btn.addEventListener("click",btnPress); 
}

function reset() {
    backgroundImage =  "url(background.png)"; 
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}