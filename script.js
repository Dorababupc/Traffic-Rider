const score=document.querySelector('.score');
const startScreen=document.querySelector('.startScreen');
const gameArea=document.querySelector('.gameArea');
document.addEventListener('keyup',keyUp);
document.addEventListener('keydown',keyDown);
function keyUp(e){
    e.preventDefault();
    console.log(`${e.key} releasing`);
}
function keyDown(e){
    e.preventDefault();
    console.log(`${e.key} pressing`);
}
