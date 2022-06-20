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
let player={speed:5};
let road;
function start(){
    //remove the gameArea from class hide.
    player.start=true;
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');
    
    road=gameArea.getBoundingClientRect();
    for(let x=0;x<5;++x){
        let roadline=document.createElement('div');
        roadline.setAttribute('class','roadline');
        roadline.style.top=(x*150)+"px";
        gameArea.appendChild(roadline);
    }
    const car=document.createElement('div');
    car.setAttribute('class','car');
    
    gameArea.appendChild(car);
    player.x=car.offsetLeft;
    player.y=car.offsetTop;
    window.requestAnimationFrame(startGame);
}
function startGame(){
    let car=document.querySelector('.car');
    
    if(player.start){
        if(keys.ArrowUp && player.y>0){
            player.y-=player.speed;
        }
        if(keys.ArrowDown && player.y<(road.bottom-70)){
            player.y+=player.speed;
        }
        if(keys.ArrowLeft && player.x>0){
            player.x-=player.speed;
        }
        if(keys.ArrowRight && player.x<(road.width-50)){
            player.x+=player.speed;
        }
        car.style.top=player.y+"px";
        car.style.left=player.x+"px";
        window.requestAnimationFrame(startGame);
    } 
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