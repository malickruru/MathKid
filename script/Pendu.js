// fonction qui sera utiliser sur tout les menus
function ChangeClassActive(id){
    TabMenuElem = document.querySelectorAll(".popupMenuElem");
    
   TabMenuElem.forEach(element => {
       element.classList.remove("active");
   });
   document.getElementById(id).classList.add("active");
}






//decla de variable
var index;
var idImg ;
var Motresolu;
//création des énigmes


function enigme(lettres,indice,titre,resolu,index,mot,_reponseSet){
    this.lettres=lettres;
    this.indice=indice;
    this.titre=titre;
    this.resolu=resolu;
    this.index=index;
    this.mot=mot
    this.reponseSet=new Set ([]);
    this.AfficheNiveauPendu=AfficheNiveauPendu;
    this.verifLettre=verifLettre;
    this.ecrireMot=ecrireMot;
    this.victoire=victoire;
}

var enigme1= new enigme (['p','y','t','h','a','g','o','r','e'],'La formule a² + b² = c² découle du théorème de _______','Enigme 1',false,0,"pythagore");
var enigme2= new enigme (['i','s','o','c','è','l','e'],' un triangle _______ est un triangle ayant au moins deux côtés de même longueur.','Enigme 2',false,1,"isocèle");
var enigme3= new enigme (['o','b','t','u','s'],'un angle _____ est un angle saillant dont la mesure en degrés est comprise entre 90° et 180°.','Enigme 3',false,2,"obtus");
var enigme4= new enigme (['p','a','r','a','l','l','é','l','é','p','i','p','è','d','e'],'Je suis un Polyèdre dont les six faces sont des parallélogrammes parallèles deux à deux (ex. le cube).','Enigme 4',false,3,"parrallélépipède");
var enigme5= new enigme (['c','r','o','i','s','s','a','n','t'],'Ranger les nombres du plus petit au plus grand, c\'est les ranger dans l\'ordre ___________','Enigme 5',false,4,"croissant");

var enigmes=[enigme1,enigme2,enigme3,enigme4,enigme5];
//méthode liées au enigme
function AfficheNiveauPendu(id){
    ChangeClassActive(id);
    idImg = 0;
    let reponseDuJoueur = "";
    for (let i = 0; i < this.lettres.length; i++) {
        reponseDuJoueur += "_";
    }

    
    document.getElementById('NiveauPendu').style.display='grid';
    lettresDuClavier=document.querySelectorAll(".LettreDuClavier");
    lettresDuClavier.forEach(touches => {
        touches.style.display='flex';
    });

    document.getElementById('infoPendu').innerHTML= '';
    //le titre
    document.getElementById('titrePendu').innerHTML='<h2>'+this.titre+'<h2>';
    //l'image
    document.getElementById('imagePendu').innerHTML=img[idImg];
    //la réponse et l'indice
    document.getElementById('reponsePendu').innerHTML=reponseDuJoueur;
    document.getElementById('IndicePendu').innerHTML="<b>Indice :</b> "+this.indice;
     index = this.index;
     this.reponseSet.clear();
     this.resolu=false;
}



function verifLettre (lettre,idbutton){
//verifier si la lettre existe
let lettreExiste = false;
    for (let i = 0; i < this.lettres.length; i++) {
        if (this.lettres[i] == lettre){  
             lettreExiste=true;  
             
    } };

    if(lettreExiste == true){
        BonneReponse.play();
        document.getElementById(idbutton).style.display='none';
            this.reponseSet.add(lettre);
            this.ecrireMot();
            this.victoire();
            if(this.resolu){
                document.getElementById('NiveauPendu').style.display='none';
               
              document.getElementById('infoPendu').innerHTML="<h2>Bravo</h2> <br>le mot était : "+this.mot +"<br> Choisissez une autre énigme "; 

            }

    }else{
        MauvaiseReponse.play();
        document.getElementById(idbutton).style.display='none';
        idImg ++ ;
        if(idImg < 7){
            document.getElementById('imagePendu').innerHTML=img[idImg];
        }else{
            document.getElementById('NiveauPendu').style.display='none';
                document.getElementById('infoPendu').innerHTML="<h2>Game over</h2><br> Choisissez une autre énigme ";    

            }
    }
}


function ecrireMot(){
    reponseDuJoueur = "";
    for (let i = 0; i < this.lettres.length; i++) {
        if(this.reponseSet.has(this.lettres[i])){
            reponseDuJoueur+=this.lettres[i];
        }else{
            reponseDuJoueur+="_";
        }
    }
    document.getElementById('reponsePendu').innerHTML=reponseDuJoueur;
}

function victoire(){
     Motresolu="";
    for (let i = 0; i < reponseDuJoueur.length; i++) {
       if(reponseDuJoueur[i]=="_"){
          Motresolu +=  this.mot[i];
       } 
    }
    if(Motresolu == ""){
        this.resolu=true;
    }
}

//création d'un tableau contenant des images
img = [
    "<img src='img/pendu0.png' >",
    "<img src='img/pendu1.png' >",
    "<img src='img/pendu2.png' >",
    "<img src='img/pendu3.png' >",
    "<img src='img/pendu4.png' >",
    "<img src='img/pendu5.png' >",
    "<img src='img/pendu6.png' >"
];