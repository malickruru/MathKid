// fonction qui sera utiliser sur tout les menus
function ChangeClassActive(id){
    TabMenuElem = document.querySelectorAll(".popupMenuElem");
    
   TabMenuElem.forEach(element => {
       element.classList.remove("element-actif");
   });
   document.getElementById(id).classList.add("element-actif");
}



//Déclaration de variables
var index,counter,interval;
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
                document.getElementById('NiveauOperation').innerHTML+="<button class='btn'  onclick=' niveaux[index].GenereOperation();'>Suivant :</button> ";
          }else{
                MauvaiseReponse.play();
                scoreDuNiveau -= 2  ;
                document.getElementById('NiveauScore').innerHTML="Score : "+scoreDuNiveau ;
                document.getElementById('NiveauEvenement').innerHTML="-2 <br>" ; 
                submitreponse.style.display='none';
                input.style.display='none';
                input.value= "";
                document.getElementById('NiveauOperation').innerHTML= 'Mauvaise réponse &#128078; <br>';
                document.getElementById('NiveauOperation').innerHTML+="<button class='btn'  onclick=' niveaux[index].GenereOperation();' >Suivant </button> ";
                
          }
          e.stopImmediatePropagation();          
      });
}

//objet Niveau
function NiveauCM(chrono,score,meilleurScore,ScoreAAteindre,operateur,titre,idniveau){
    this.chrono=chrono;
    this.score=score;
    this.meilleurScore=meilleurScore;
    this.ScoreAAteindre=ScoreAAteindre;
    this.operateur=operateur;
    this.titre=titre
    this.idniveau =idniveau;
    this.GenereOperation = GenereOperation;
    this.startChrono=startChrono;
    
    }


    //Création des niveau
    var niveau0 = new NiveauCM(0,0,0,-1,"","");
    var niveau1 = new NiveauCM(25,0,0,10,"++++","Niveau 1: les additions",'CMNiveau1');
    var niveau2 = new NiveauCM(30,0,0,15,"---+","Niveau 2: les soustractions",'CMNiveau2');
    var niveau3 = new NiveauCM(20,0,0,20,"**+-","Niveau 3: les multiplications",'CMNiveau3');
    var niveau4 = new NiveauCM(20,0,0,25,"/+-","Niveau 4: les divisions","CMNiveau4");
    var niveau5 = new NiveauCM(15,0,0,50,"+-*/","Niveau 5: <i class='fas fa-skull'></i> ","CMNiveau5");

//tableau contenant les niveaux
niveaux=[niveau0,niveau1,niveau2,niveau3,niveau4,niveau5]
//fonctions générales
function demarrerNiveau(i){
    index = i;
if(niveaux[index-1].score >= niveaux[index-1].ScoreAAteindre){
    ChangeClassActive(niveaux[index].idniveau)
    preNiveau();
} else{
    alert ("Vous devez réussir le niveau précédent avant de jouer à celui ci !!!!");
}
}


function preNiveau(){
    //afficher les éléments
    document.getElementById('InfoCm').innerHTML="<h2>"+niveaux[index].titre+"</h2>";
    document.getElementById('InfoCm').innerHTML+="<span><strong>Score : </strong>"+niveaux[index].score+"</span><span><strong> Meilleur score : </strong>"+niveaux[index].meilleurScore+"</span><br>";
    document.getElementById('InfoCm').innerHTML+="<strong>Objectif : </strong>Pour réussir ce niveau, vous devez atteindre un score de  "+niveaux[index].ScoreAAteindre+" points en "+niveaux[index].chrono+" secondes.<br><em>Vous Avez 20% de chance d'obtenir une question en or . </em> <br>";
    document.getElementById('InfoCm').innerHTML+="<button id='jouer' class=btn onclick='jeu()'>Jouer</button>";

    //aller à la scène de jeu
}

function jeu(){
    
    //afficher les éléments
   
    document.getElementById('NiveauCM').style.display = 'grid';
    document.getElementById('InfoCm').style.display = 'none';
    document.getElementById('NiveauTitre').innerHTML="<h2>"+niveaux[index].titre+"</h2>";
    niveaux[index].GenereOperation();
    niveaux[index].startChrono();
   
}


    


//les fonctions du chrono

function bip() {
    counter--;
    if(counter == 0) endChrono(index);
    else {	
        document.getElementById("NiveauChrono").innerHTML = counter + " secondes restantes";
    }	
}
function startChrono(){
    counter = this.chrono;
  intervalId = setInterval(bip, 1000);

}	

function endChrono() {
    clearInterval(intervalId);
    

    niveaux[index].score =scoreDuNiveau;
    console.log("score : " +niveaux[index].score);//récupérer le score
    if (niveaux[index].score > niveaux[index].meilleurScore){
        niveaux[index].meilleurScore = niveaux[index].score;
    }
    console.log("bestscore : " +niveaux[index].score);//changer le meilleur score
    if (niveaux[index].score >= niveaux[index].ScoreAAteindre){
        NiveauReussit.play();
        document.getElementById('NiveauCM').style.display='none';
        document.getElementById('InfoCm').style.display='';
        
        document.getElementById('InfoCm').innerHTML="<h1>Bravo</h1><br>Vous avez réussit ce niveau &#129321; &#129321; &#129321; <br>";
        document.getElementById('InfoCm').innerHTML+="<strong>Votre score : </strong>"+niveaux[index].score+"<strong>      Meilleur score : </strong>"+niveaux[index].meilleurScore+"<br><strong>Objectif : </strong>"+niveaux[index].ScoreAAteindre + "<br>";
        document.getElementById('InfoCm').innerHTML+="<button class='btn'  onclick='jeu(index)'>Rejouer</button> <br>";
        document.getElementById('InfoCm').innerHTML+="<button class='btn'   onclick='demarrerNiveau(index+1)'>Niveau suivant</button>";
        scoreDuNiveau=0; 
    }else{
        Gameover.play();
        document.getElementById('NiveauCM').style.display='none';
        document.getElementById('InfoCm').style.display='';
        
    
    document.getElementById('InfoCm').innerHTML="<h1>GAME OVER</h1><br>Vous n'avez pas atteint l'objectif &#128530; <br>";
    document.getElementById('InfoCm').innerHTML+="<strong>Votre score : </strong>"+niveaux[index].score+"<strong>      Meilleur score : </strong>"+niveaux[index].meilleurScore+"<br><strong>Objectif : </strong>"+niveaux[index].ScoreAAteindre + '<br>';
    document.getElementById('InfoCm').innerHTML+="<button class='btn'  onclick='jeu(index)'>Rejouer</button>";
    scoreDuNiveau=0; }
  }

