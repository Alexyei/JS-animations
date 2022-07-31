/** @type {HTMLCanvasElement}*/
// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');
CANVAS_WIDTH =  350;
CANVAS_HEIGHT = 700;
const numberOfEnemies = 50;
// let enemiesArray = [];
// let gameFrame = 0;

class Board{
    constructor(canvasID, enemyClass) {
        this.canvas = document.getElementById(canvasID);
        console.log(this.canvas)
        this.canvas.width = CANVAS_WIDTH;
        this.canvas.height = CANVAS_HEIGHT;
        this.ctx = this.canvas.getContext('2d');
        console.log(this.ctx)
        this.enemy = enemyClass
        this.enemiesArray = []
        this.gameFrame = 0;

        this.enemiesArray = Array.from({length: numberOfEnemies},(_,i)=>new enemyClass(this))
        this.animate = this.animate.bind(this);
    }

    animate(){
        this.ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);

        this.enemiesArray.forEach(enemy =>{
            enemy.update();
            enemy.draw();
        })
        this.gameFrame++;

        requestAnimationFrame(this.animate)
    }

}


class EnemyOne {
    constructor(board) {
        this.board = board;
        this.image = new Image();
        this.image.src = 'assets/enemy1.png'


        // this.speed = Math.random()*4-2;
        this.spriteWidth = 293;
        this.spriteHeight = 155;
        this.width = this.spriteWidth/3;
        this.height = this.spriteHeight/3;
        this.x = Math.random()*(this.board.canvas.width - this.width);
        this.y = Math.random()*(this.board.canvas.height-this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random()*3+1);
    }
    update(){
        // this.x+=this.speed;
        // this.y+=this.speed;

        this.x+=Math.random()*5 - 2.5;
        this.y+=Math.random()*5 - 2.5;

        if (this.board.gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0: this.frame++;
        }
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height)
        this.board.ctx.drawImage(this.image, this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}

class EnemyTwo {
    constructor(board) {
        this.board = board;
        this.image = new Image();
        this.image.src = 'assets/enemy2.png'


        this.speed = Math.random()*4+1;
        this.spriteWidth = 266;
        this.spriteHeight = 188;
        this.width = this.spriteWidth/3;
        this.height = this.spriteHeight/3;
        this.x = Math.random()*(this.board.canvas.width - this.width);
        this.y = Math.random()*(this.board.canvas.height-this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random()*3+1);

        this.angle = 0;
        this.angleSpeed = Math.random() * 0.2;
        //скорость изменения угла
        this.curve = Math.random() * 7;
    }
    update(){
        this.x-=this.speed;
        if (this.x + this.width < 0) this.x = this.board.canvas.width;

        this.y += this.curve*Math.sin(this.angle);
        this.angle += this.angleSpeed;

        if (this.board.gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0: this.frame++;
        }
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height)
        this.board.ctx.drawImage(this.image, this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}

class EnemyThree {
    constructor(board) {
        this.board = board;
        this.image = new Image();
        this.image.src = 'assets/enemy3.png'


        this.speed = Math.random()*4+1;
        this.spriteWidth = 218;
        this.spriteHeight = 177;
        this.width = this.spriteWidth/3;
        this.height = this.spriteHeight/3;
        this.x = Math.random()*(this.board.canvas.width - this.width);
        this.y = Math.random()*(this.board.canvas.height-this.height);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random()*3+1);

        this.angle = 0;
        this.angleSpeed = Math.random() * 2+ 0.5;
        //РАСКОММЕНТИРОВАТЬ ДЛЯ КРУГОВОГО ДВИЖЕНИЯ
        //+50 пустой радиус в центре холста
        // this.curve = Math.random() * 200 + 50;
    }
    update(){
        //РАСКОММЕНТИРОВАТЬ ДЛЯ КРУГОВОГО ДВИЖЕНИЯ
        // this.x=this.curve * Math.sin(this.angle * Math.PI/180)+(this.board.canvas.width/2 - this.width/2);
         this.x=this.board.canvas.width/2 * Math.sin(this.angle * Math.PI/90)+(this.board.canvas.width/2 - this.width/2);

        if (this.x + this.width < 0) this.x = this.board.canvas.width;

        //РАСКОММЕНТИРОВАТЬ ДЛЯ КРУГОВОГО ДВИЖЕНИЯ
        // this.y=this.curve * Math.cos(this.angle * Math.PI/180)+(this.board.canvas.height/2 - this.height/2);

        //ИЗМЕНИТЬ НА 180 ЧТОБЫ ПОЛУЧИТЬ ВОСЬМЁРКУ
        this.y=this.board.canvas.height/2 * Math.cos(this.angle * Math.PI/270)+(this.board.canvas.height/2 - this.height/2);

        this.angle += this.angleSpeed;

        if (this.board.gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0: this.frame++;
        }
    }
    draw(){
        // ctx.strokeRect(this.x, this.y, this.width, this.height)
        this.board.ctx.drawImage(this.image, this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}

class EnemyFour {
    constructor(board) {
        this.board = board;
        this.image = new Image();
        this.image.src = 'assets/enemy4.png'


        this.speed = Math.random()*4+1;
        this.spriteWidth = 213;
        this.spriteHeight = 213;
        this.width = this.spriteWidth/3;
        this.height = this.spriteHeight/3;
        this.x = Math.random()*(this.board.canvas.width - this.width/2);
        this.y = Math.random()*(this.board.canvas.height-this.height/2);
        this.newX = Math.random()*(this.board.canvas.width- this.width/2);
        this.newY = Math.random()*(this.board.canvas.height- this.height/2);
        this.frame = 0;
        this.flapSpeed = Math.floor(Math.random()*3+1);
        this.interval = Math.floor(Math.random()*200 + 50);
    }
    update(){
        // this.x =0;
        if (this.board.gameFrame % this.interval === 0){
            this.newX = Math.random()*(this.board.canvas.width- this.width/2);
            this.newY = Math.random()*(this.board.canvas.height- this.height/2);
        }
        let dx = this.x - this.newX;
        let dy = this.y - this.newY;

        this.x -= dx/70;
        this.y -=dy/70;
        // if (this.x + this.width < 0) this.x = this.board.canvas.width;

        // this.y=0;

        if (this.board.gameFrame % this.flapSpeed === 0){
            this.frame > 4 ? this.frame = 0: this.frame++;
        }
    }
    draw(){
        this.board.ctx.strokeRect(this.x, this.y, this.width, this.height)
        this.board.ctx.drawImage(this.image, this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight,this.x,this.y,this.width,this.height)
    }
}
// enemiesArray = Array.from({length: numberOfEnemies},(_,i)=>new EnemyOne(ctx))


// function animate(){
//     ctx.clearRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT);
//
//     enemiesArray.forEach(enemy =>{
//         enemy.update();
//         enemy.draw();
//     })
//     gameFrame++;
//     requestAnimationFrame(animate)
// }
//
// animate();

const boards = [
    new Board('canvas1',EnemyOne),
    new Board('canvas2',EnemyTwo),
    new Board('canvas3',EnemyThree),
    new Board('canvas4',EnemyFour),
]
boards.forEach(b=>b.animate())
