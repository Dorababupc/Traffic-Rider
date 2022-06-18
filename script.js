const score=document.querySelector('.score');
const startScreen=document.querySelector('.startScreen');
const gameArea=document.querySelector('.gameArea');
document.addEventListener('keyup',keyUp);
document.addEventListener('keydown',keyDown);
const keys={
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false
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
