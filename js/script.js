// Canvas
const canvas = document.getElementById('backdrop');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 500;

let score = 0;
let gameFrame = 0;

ctx.font = '50px Georgia';

// Controls
let canvasPosition = canvas.getBoundingClientRect();
const control = {
    x: canvas.width/2,
    y: canvas.height/2,
    click: false
}
canvas.addEventListener('mousedown', function(){
    control.click = true;
    control.x = event.x - canvasPosition.left; 
    control.y = event.y - canvasPosition.top;
});

canvas.addEventListener('mouseup', function(){
    control.click = false;
});

// Character
class Character {
    constructor(){
        this.x = canvas.width/2;
        this.y = canvas.width/2;
        this.radius = 50;
        this.angle = 0;
        this.frameX = 0;
        this.frameY = 0;
        this.frame = 0;
        this.spriteWidth = 0; //CHANGE FOR SPRITES
        this.spriteHeight = 0; //CHANGE FOR SPRITES
    }
}
update(){
    const dx = this.x - control.x;
    const dy = this.y - control.y;
    if (control.x != this.x){
        this.x -= dx/25;
    }
    if (control.y != this.y){
        this.y -= dy/25;
    }
}
draw(){
    if (control.click){
        ctx.lineWidth = 0.2;
        ctx.beginPath();
        ctx.moveTo(this.x, this.y);
        ctx.lineTo(control.x, control.y);
        ctx.stroke();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fill()
        ctx.closePath();
    }
    ctx.fillStyle = 'red';
    ctx.beginPath();
}
const Character = new Character();

// Objectives
// Animation

