//première animation, contenue dans la section outils de calcul
var canvas = document.getElementById('Animation1');
var ctx = canvas.getContext('2d');
var i = 0;

function img (width, height, source, x, y,type,vitesse){
    this.width=width;
    this.height=height;
    this.source=source;
    this.x=x;
    this.y=y;
    this.type=new Image();
    this.vitesse=vitesse;
}




var Dinos=[
    'img/run-1-1.png',
    'img/run-2-1.png',
    'img/run-3-1.png',
    'img/run-4-1.png',
    'img/run-5-1.png',
    'img/run-6-1.png',
    'img/run-7-1.png',
    
];


var Dino= new img (72,72,Dinos[i],190,150);


window.addEventListener('load',() => {
    frame=setInterval(DinoMarche,100);
});


function DinoMarche(){
    this.ctx.clearRect(0, 0, 400, 360);

    i++;
if(i == 7){
    i=0;
    Dino.type.src=Dinos[i];    
}else{
    Dino.type.src=Dinos[i];   ;
}

ctx.drawImage(Dino.type,
    Dino.x,
    Dino.y,
    Dino.width, Dino.height);

}





