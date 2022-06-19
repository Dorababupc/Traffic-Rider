const score=document.querySelector('.score');
const startScreen=document.querySelector('.startScreen');
const gameArea=document.querySelector('.gameArea');
document.addEventListener('keyup',keyUp);
document.addEventListener('keydown',keyDown);
startScreen.addEventListener('click',start);
const keys={
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false
}
let player={};
function start(){
    //remove the gameArea from class hide.
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');
    window.requestAnimationFrame(startGame);
}
function startGame(){
    console.log("Yes the game is started");
    window.requestAnimationFrame(startGame);
}

function keyUp(e){
    e.preventDefault();
    // console.log(`${e.key} releasing`);
    keys[e.key]=false;
    console.log(keys);
}
function keyDown(e){
    e.preventDefault();
    // console.log(`${e.key} pressing`);
    keys[e.key]=true;
    console.log(keys);
}
// const box=document.querySelector('.box');
// function move(){
//     xpos=xpos+10;
//     box.style.transform=`translateX(${xpos}px)`;
//     let ww=document.body.clientWidth-100;
//     if(xpos<ww){
//         window.requestAnimationFrame(move);
//     }
// }
// let xpos=0;
// window.requestAnimationFrame(move);