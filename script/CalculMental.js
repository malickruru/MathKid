// fonction qui sera utiliser sur tout les menus
function ChangeClassActive(id){
    TabMenuElem = document.querySelectorAll(".popupMenuElem");
    
   TabMenuElem.forEach(element => {
       element.classList.remove("active");
   });
   document.getElementById(id).classList.add("active");
}



//Déclaration de variables
var i,counter,interval;
var TypeOperation,ChaineOperateur ,ChaineOperateurlongueur ,IndexOperateur,TypeOperateur,IncrementScore,OperationPose,formulaire,input; //Variable de la méthode génere opération
//les sons
const BonneReponse = new Audio('fx/Coin01.wav');
const MauvaiseReponse = new Audio('fx/error_005.ogg');
const NiveauReussit = new Audio('fx/youwon.wav');
const Gameover = new Audio('fx/gameover.wav');
scoreDuNiveau= 0;


//méthode pour générer une opération
function GenereOperation(){
    
    
    // // initialiser l'écran de jeu
     
    document.getElementById('NiveauEvenement').innerHTML= " ";
    document.getElementById('submitreponse').style.display='inline-block';
    input = document.getElementById('inputreponse');
    input.style.display='inline-block';
    input.focus();
    
    // }

    //1 le type d'opération
    TypeOperation= Math.floor(Math.random() * 5)+1;//retourne un entier aléatoire entre 1 et 5
    //2 le type d'opérateur
    ChaineOperateur=this.operateur;
    ChaineOperateurlongueur= ChaineOperateur.length;
    IndexOperateur= Math.floor(Math.random() * ChaineOperateurlongueur);
    TypeOperateur=ChaineOperateur.charAt(IndexOperateur);
    formulaire = document.getElementById('formulaire');
    
    
    
    //3 afficher l'opération
    if (TypeOperation == 1){//opération en or
        OperationPose=Math.floor(Math.random() * 11) +" "+TypeOperateur+" "+Math.floor(Math.random() * 11)+" "+TypeOperateur+" "+Math.floor(Math.random() * 11);
        document.getElementById('NiveauOperation').innerHTML= OperationPose ;
        IncrementScore=5;
    }else{
        OperationPose=Math.floor(Math.random() * 11) +" "+TypeOperateur+" "+Math.floor(Math.random() * 11);
        document.getElementById('NiveauOperation').innerHTML=OperationPose  ;
        IncrementScore=1;
    }
    //4fonction submit
    formulaire.addEventListener('submit', (e) => {
        e.preventDefault();
          reponse = input.value;
          if (reponse == eval(OperationPose)){
            BonneReponse.play();
            scoreDuNiveau += IncrementScore;
                document.getElementById('NiveauScore').innerHTML="Score : "+ scoreDuNiveau ;
                document.getElementById('NiveauEvenement').innerHTML="+ "+IncrementScore+"<br>" ;
                submitreponse.style.display='none';
                input.style.display='none';
                input.value= "";
                document.getElementById('NiveauOperation').innerHTML= 'Bonne réponse &#128077; <br>';
                document.getElementById('NiveauOperation').innerHTML+="<button class='btn' style='transform : translateX(60px);' onclick=' niveaux[i2].GenereOperation();'>Suivant :</button> ";
          }else{
                MauvaiseReponse.play();
                scoreDuNiveau -= 2  ;
                document.getElementById('NiveauScore').innerHTML="Score : "+scoreDuNiveau ;
                document.getElementById('NiveauEvenement').innerHTML="-2 <br>" ; 
                submitreponse.style.display='none';
                input.style.display='none';
                input.value= "";
                document.getElementById('NiveauOperation').innerHTML= 'Mauvaise réponse &#128078; <br>';
                document.getElementById('NiveauOperation').innerHTML+="<button class='btn' style='transform : translateX(60px);' onclick=' niveaux[i2].GenereOperation();' >Suivant </button> ";
                
          }
          e.stopImmediatePropagation();          
      });
}

//objet Niveau
function NiveauCM(chrono,score,meilleurScore,ScoreAAteindre,operateur,titre){
    this.chrono=chrono;
    this.score=score;
    this.meilleurScore=meilleurScore;
    this.ScoreAAteindre=ScoreAAteindre;
    this.operateur=operateur;
    this.titre=titre
    this.GenereOperation = GenereOperation;
    this.startChrono=startChrono;
    }


    //Création des niveau
    var niveau0 = new NiveauCM(0,0,0,-1,"","");
    var niveau1 = new NiveauCM(25,0,0,10,"++++","Niveau 1: les additions");
    var niveau2 = new NiveauCM(30,0,0,15,"---+","Niveau 2: les soustractions");
    var niveau3 = new NiveauCM(20,0,0,20,"**+-","Niveau 3: les multiplications");
    var niveau4 = new NiveauCM(20,0,0,25,"/+-","Niveau 4: les divisions");
    var niveau5 = new NiveauCM(15,0,0,50,"+-*/","Niveau 5: <i class='fas fa-skull'></i> ");

//tableau contenant les niveaux
niveaux=[niveau0,niveau1,niveau2,niveau3,niveau4,niveau5]
//fonctions générales
function demarrerNiveau(i,idniveau){
if(niveaux[i-1].score >= niveaux[i-1].ScoreAAteindre){
    ChangeClassActive(idniveau)
    preNiveau(i);
} else{
    alert ("Vous devez réussir le niveau précédent avant de jouer à celui ci !!!!");
}
}


function preNiveau(i){
     i1=i
    //afficher les éléments
    document.getElementById('InfoCm').innerHTML="<h2>"+niveaux[i].titre+"</h2>";
    document.getElementById('InfoCm').innerHTML+="<span><strong>Score : </strong>"+niveaux[i].score+"</span><span><strong> Meilleur score : </strong>"+niveaux[i].meilleurScore+"</span><br>";
    document.getElementById('InfoCm').innerHTML+="<strong>Objectif : </strong>Pour réussir ce niveau, vous devez atteindre un score de  "+niveaux[i].ScoreAAteindre+" points en "+niveaux[i].chrono+" secondes.<br><em>Vous Avez 20% de chance d'obtenir une question en or . </em> <br>";
    document.getElementById('InfoCm').innerHTML+="<button id='jouer' class=btn onclick='jeu(i1)'>Jouer</button>";

    //aller à la scène de jeu
}

function jeu(i1){
     i2=i1;
    //afficher les éléments
   
    document.getElementById('NiveauCM').style.display = 'grid';
    document.getElementById('InfoCm').style.display = 'none';
    document.getElementById('NiveauTitre').innerHTML="<h2>"+niveaux[i2].titre+"</h2>";
    niveaux[i2].GenereOperation();
    niveaux[i2].startChrono();
   
}


    


//les fonctions du chrono

function bip() {
    counter--;
    if(counter == 0) endChrono(i2);
    else {	
        document.getElementById("NiveauChrono").innerHTML = counter + " secondes restantes";
    }	
}
function startChrono(){
    counter = this.chrono;
  intervalId = setInterval(bip, 1000);

}	

function endChrono(i2) {
    clearInterval(intervalId);
    

    niveaux[i2].score =scoreDuNiveau;
    console.log("score : " +niveaux[i2].score);//récupérer le score
    if (niveaux[i2].score > niveaux[i2].meilleurScore){
        niveaux[i2].meilleurScore = niveaux[i2].score;
    }
    console.log("bestscore : " +niveaux[i2].score);//changer le meilleur score
    if (niveaux[i2].score >= niveaux[i2].ScoreAAteindre){
        NiveauReussit.play();
        document.getElementById('NiveauCM').style.display='none';
        document.getElementById('InfoCm').style.display='';
        
        document.getElementById('InfoCm').innerHTML="<h1>Bravo</h1><br>Vous avez réussit ce niveau &#129321; &#129321; &#129321; <br>";
        document.getElementById('InfoCm').innerHTML+="<strong>Votre score : </strong>"+niveaux[i2].score+"<strong>      Meilleur score : </strong>"+niveaux[i2].meilleurScore+"<br><strong>Objectif : </strong>"+niveaux[i2].ScoreAAteindre + "<br>";
        document.getElementById('InfoCm').innerHTML+="<button class='btn'  onclick='jeu(i2)'>Rejouer</button> <br>";
        document.getElementById('InfoCm').innerHTML+="<button class='btn'   onclick='preNiveau(i2+1)'>Niveau suivant</button>";
        scoreDuNiveau=0; 
    }else{
        Gameover.play();
        document.getElementById('NiveauCM').style.display='none';
        document.getElementById('InfoCm').style.display='';
        
    
    document.getElementById('InfoCm').innerHTML="<h1>GAME OVER</h1><br>Vous n'avez pas atteint l'objectif &#128530; <br>";
    document.getElementById('InfoCm').innerHTML+="<strong>Votre score : </strong>"+niveaux[i2].score+"<strong>      Meilleur score : </strong>"+niveaux[i2].meilleurScore+"<br><strong>Objectif : </strong>"+niveaux[i2].ScoreAAteindre + '<br>';
    document.getElementById('InfoCm').innerHTML+="<button class='btn'  onclick='jeu(i2)'>Rejouer</button>";
    scoreDuNiveau=0; }
  }

