var SuperTableau = [0,0,0,0,0,0,0,0,0];
var tabA, TabB, TabC, TabD, TabE, TabF, TabG, TabH =[];
var  Matchnulle = 0;
var scoreHumain = 0;
var  scoreIa = 0;
var nbrPartie = 1;

 var cell11 = 'cell1-1';
 var cell12 = 'cell1-2';
 var cell13 = 'cell1-3';
 var cell21 = 'cell2-1';
 var cell22 = 'cell2-2';
 var cell23 = 'cell2-3';
 var cell31 = 'cell3-1';
 var cell32 = 'cell3-2';
 var cell33 = 'cell3-3';

 var TableauCell=[cell11,cell12,cell13,cell21,cell22,cell23,cell31,cell32,cell33]; 
 var Tableaux = []
 var finDeLaPartie = false;
// tableau comprennant les coordonnées du superTableau
var TableauxId=[
    [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
    [2,5,8],
     [0,4,8],
     [2,4,6]
]




// mise a jour des tableau
function MajTab(){
    tabA = [SuperTableau[0],SuperTableau[1],SuperTableau[2]];
    TabB = [SuperTableau[3],SuperTableau[4],SuperTableau[5]];
    TabC = [SuperTableau[6],SuperTableau[7],SuperTableau[8]];
    TabD = [SuperTableau[0],SuperTableau[3],SuperTableau[6]];
    TabE = [SuperTableau[1],SuperTableau[4],SuperTableau[7]];
    TabF = [SuperTableau[2],SuperTableau[5],SuperTableau[8]];
    TabG = [SuperTableau[0],SuperTableau[4],SuperTableau[8]];
    TabH = [SuperTableau[2],SuperTableau[4],SuperTableau[6]];
    Tableaux= [tabA,TabB,TabC,TabD,TabE,TabF,TabG,TabH];
    
    //victoire humain?
    Tableaux.map(tab => tab.every(elem => elem == 1) ? Issue('humain'):null);
    //victoire ia?
    Tableaux.map(tab => tab.every(elem => elem == 2) ? Issue('ia'):null);
    //nulle?
    if(finDeLaPartie == false){
    Matchnulle = 0;
    Tableaux.map(tab => tab.some(elem => elem == 0) ? Matchnulle ++ : null);
    Matchnulle != 0 ? null : Issue('personne');
}
}



function tour(numJoueur,id,indice){

    if(numJoueur == 1){
        document.getElementById(id).classList.add('FlexCenter');
        document.getElementById(id).innerHTML= "<img style='width:120px; transform: translateY(0);' src='img/rond.png'/>";
        BonneReponse.play();
        SuperTableau[indice] = numJoueur;
       
        MajTab();
        finDeLaPartie == false ? setTimeout(reponseIa, 700)  : null;
    }else if(numJoueur == 2){
        document.getElementById(id).classList.add('FlexCenter');
        document.getElementById(id).innerHTML= "<img style='width:120px; transform: translateY(0);' src='img/croix.png'/>";
        MauvaiseReponse.play();
        SuperTableau[indice] = numJoueur;
        MajTab();
    }
}

function reponseIa(){
    var tableauProvisoire = [];
    //1. verifier si l'ia  peut  gagner
    console.log(Tableaux)
    Tableaux.map(tab => (tab.filter(elem => elem == 2)).length == 2 && tab.includes(0) ? tableauProvisoire.push(tab) : null );
   tableauProvisoire.length == 0 ?  reponseAleatoire() : Iagagne(0);
    //reponse aléatoire
  
}

//ia

function reponseAleatoire(){
    choixC = Math.floor(Math.random() * 9);
    SuperTableau[choixC] == 0 ?  tour(2,TableauCell[choixC],choixC):reponseAleatoire();}


function Iagagne(choixA ){
   var IndexProvisoire
    if( (Tableaux[choixA].filter(elem => elem == 2)).length == 2 ){
    // TableauxId[choixA].map( function (tab){ SuperTableau[tab] == 0 ? tour(2,TableauCell[tab],tab) : null })
    for( var i= 0; i<3 ; i++ ){
            IndexProvisoire = TableauxId[choixA][i] ;
            SuperTableau[IndexProvisoire] == 0 ? tour(2,TableauCell[IndexProvisoire],IndexProvisoire) : null   
        }
     }else{ Iagagne(choixA += 1);
}

}



//a la fin d'une partie

function Issue(gagnant){
    if (gagnant=='humain'){
        finDeLaPartie = true;
        document.getElementById('InfosPartie').style.display='flex';
        document.getElementById('InfosPartie').innerHTML='Bravo, vous avez gagnez ';
        scoreHumain ++;
        document.getElementById('scoreTictactoe').innerHTML='<h4>SCORE :</h4> Vous : '+scoreHumain+' <br>IA : '+scoreIa;
    }else if (gagnant=='ia'){
        finDeLaPartie = true;
        document.getElementById('InfosPartie').style.display='flex';
        document.getElementById('InfosPartie').innerHTML='Dommage, l\'ordinateur a gagné ';
        scoreIa ++;
        document.getElementById('scoreTictactoe').innerHTML='<h4>SCORE :</h4> Vous : '+scoreHumain+' <br>IA : '+scoreIa;
    }else if (gagnant=='personne'){
        finDeLaPartie = true;
        document.getElementById('InfosPartie').style.display='flex';
        document.getElementById('InfosPartie').innerHTML='Match nul ';
    }
}

function debut(){
    choixB = Math.floor(Math.random() * 2)+1;
    console.log(choixB);
    choixB == 1 ? null: reponseIa()
}


function rejouer(){
    SuperTableau = [0,0,0,0,0,0,0,0,0];
    finDeLaPartie = false;
    document.getElementById('InfosPartie').style.display='none';
    document.getElementById('grille').innerHTML="<div id='cell1-1'><div class='cellTTT' onclick='tour(1, cell11 ,0)'></div></div><div id='cell1-2'><div class='cellTTT' onclick='tour(1,cell12 ,1)'></div></div><div id='cell1-3'><div class='cellTTT' onclick='tour(1,cell13,2)'></div></div><div id='cell2-1'><div class='cellTTT' onclick='tour(1, cell21,3)'></div></div><div id='cell2-2'><div class='cellTTT' onclick='tour(1, cell22,4)'></div></div><div id='cell2-3'><div class='cellTTT' onclick='tour(1, cell23,5)'></div></div><div id='cell3-1'><div class='cellTTT' onclick='tour(1, cell31,6)'></div></div><div id='cell3-2'><div class='cellTTT' onclick='tour(1,cell32,7)'></div></div><div id='cell3-3'><div class='cellTTT' onclick='tour(1,cell33,8)'></div></div> ";
    nbrPartie ++;
    document.getElementById('InfosPartie').innerHTML=' ';
    document.getElementById('nbrDeParties').innerHTML='<h4> Partie n° : '+nbrPartie+'</h4> ';
    debut();
}

