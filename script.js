const score=document.querySelector('.score');
const startScreen=document.querySelector('.startScreen');
const gameArea=document.querySelector('.gameArea');
const keys={
    ArrowUp:false,
    ArrowDown:false,
    ArrowLeft:false,
    ArrowRight:false
}
let player={speed:5};
let road;
let dist;
let car_dist;
document.addEventListener('keyup',keyUp);
document.addEventListener('keydown',keyDown);
startScreen.addEventListener('click',start);

function start(){
    //remove the gameArea from class hide.
    player.start=true;
    gameArea.classList.remove('hide');
    startScreen.classList.add('hide');
    
    road=gameArea.getBoundingClientRect();
    console.log(road);
    for(let x=-1;x<5;++x){
        let roadline=document.createElement('div');
        roadline.setAttribute('class','roadline');
        roadline.style.top=(x*150)+"px";
        roadline.y=x*150;
        gameArea.appendChild(roadline);
    }
    dist=road.height-(4*150+100);
    const car=document.createElement('div');
    car.setAttribute('class','car');
    gameArea.appendChild(car);
    player.x=car.offsetLeft;
    player.y=car.offsetTop;

    for(let x=-2;x<1;++x){
        let enemycar=document.createElement('div');
        enemycar.setAttribute('class','enemycar');
        enemycar.style.top=(x*300)+"px";
        enemycar.style.left=Math.floor(Math.random()*350)+"px";
        enemycar.y=(x*300);
        gameArea.appendChild(enemycar);
    }
    
    window.requestAnimationFrame(startGame);
}


function startGame(){
    let car=document.querySelector('.car');
    movelines();
    movecars(car);
    
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

function movelines(){
    let roadline=document.querySelectorAll('.roadline');
    roadline.forEach(function(item){
        
        if(item.y>road.height){
            item.y=-300+100+dist;
        }
        item.y+=player.speed;
        item.style.top=item.y+"px";
    })
}

function movecars(cars){
    let enemycar=document.querySelectorAll('.enemycar');
    enemycar.forEach(function(item){
        if(item.y>(road.height)){
            item.y=-200;
            item.style.left=Math.floor(Math.random()*350)+"px";
        }
        item.y=item.y+player.speed+1;
        item.style.top=item.y+"px";
        if(isCollide(cars,item)){
            console.log("boom");
            player.start=false;
        }
    })
}

function isCollide(car,item){
    let carA=car.getBoundingClientRect();
    let itemA=item.getBoundingClientRect();
    if(Math.abs(carA.x-itemA.x)<=50 && Math.abs(carA.y-itemA.y)<=70){
        return true;
    }
    return false;
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