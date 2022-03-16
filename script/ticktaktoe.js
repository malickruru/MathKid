//variables
var  Etat_du_jeu =[0,0,0,0,0,0,0,0,0];//au debut toute les cellules du jeu sont vides
var score_humain = 0;
var score_ia = 0;
var nbr_de_partie = 0;
var liste_des_coup_possible = [];
//trio_de_victoire contient les id des combinaisons de ligne,colonne et diagonale à vérifier pour valider la victoire si un des tableau ne contient que des 1 alors l'humain gagne , si un des tableau ne contient que des 2 alors l'ordi gagne 
var trio_de_victoire=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
var scoresMinimax = [];
var fin_de_la_partie = false;
var victoire_humain = false;
var victoire_ordi = false;

//scénario

//methodes de jeu du joueur humain

//1.change l'etat de jeu
function change_etat_de_jeu(id,prochain_tour='ordinateur',valeur = 1){
    if(Etat_du_jeu[id] == 0){
    Etat_du_jeu.splice(id,1,valeur);
    Maj_interface_graphique();
    //verifiction de victoire
    verification_fin_de_la_partie();
    
    //tour de l'ordi
        if((prochain_tour == 'ordinateur') && !fin_de_la_partie){
            generer_coups();
            minimax();
            choix_ordi();
        }
    }
}


//2.met à jour la grille en ajoutant une croix pour les case de valeur 1 et un cercle pour les case de valeur 2
function Maj_interface_graphique(){
    for(let i = 0; i < 9 ; i++){
        if(Etat_du_jeu[i] == 1){
            document.querySelectorAll('.cellTTT')[i].innerHTML = '<i class="bi bi-x-lg blueI"></i>'    
        }else if(Etat_du_jeu[i] == 2){
        document.querySelectorAll('.cellTTT')[i].innerHTML = '<i class="bi bi-circle redI"></i>'    
        }else{
        document.querySelectorAll('.cellTTT')[i].innerHTML = "";    
        }
    }
}




//methodes de jeu de l'ordinateur

//1.l'ordi genere tout les coups possible
function generer_coups(){
    let coup_possible = Etat_du_jeu.join(""); 
    let tableau_coups_possible
    liste_des_coup_possible = [];
    for (let i = 0;i < 9 ; i++){
        if(Array.from(coup_possible)[i] == 0){
            tableau_coups_possible = Array.from(coup_possible);
            tableau_coups_possible.splice(i,1,"2");
            liste_des_coup_possible.push(tableau_coups_possible);
            tableau_coups_possible = [];
        }
        
    }
    
}


const egalDeux = (valeurActuelle) => valeurActuelle == 2;
const egalUn = (valeurActuelle) => valeurActuelle == 1;
const DifferentZero = (valeurActuelle) => valeurActuelle != 0;

function enticiper_issu(tableau){
    let coup_possible_tab, tab;
    let issu = 'pas de victoire'
    for(let i = 0 ; i < trio_de_victoire.length ; i++){
        tab = trio_de_victoire[i];
        coup_possible_tab = String([tableau[tab[0]],tableau[tab[1]],tableau[tab[2]]])
        if( coup_possible_tab == String([1,1,2]) || coup_possible_tab == String([1,2,1]) || coup_possible_tab == String([2,1,1])){
            issu = 'humain contré';
        }else if([tableau[tab[0]],tableau[tab[1]],tableau[tab[2]]].every(egalDeux)){
            issu = 'victoire ordi';
            return issu;
        }
    };
    
    return issu;
}

function minimax(){
    scoresMinimax = [];
    for(let i=0;i < liste_des_coup_possible.length ; i++){
        if(enticiper_issu(liste_des_coup_possible[i]) == 'victoire ordi'){
            scoresMinimax.push(10);
        }else if(enticiper_issu(liste_des_coup_possible[i]) == 'humain contré'){
            scoresMinimax.push(-10);
        }else{
            scoresMinimax.push(0);
        }
    }
}

function choix_ordi(){ 
    
    if(scoresMinimax.includes(10)){
        ordi_gagne();
    }else if(scoresMinimax.includes(-10)){
        ordi_contre();
    }else{
        choix_aleatoire()
    }   
}

function choix_aleatoire(){
    let choixId;
    choixId=Math.floor(Math.random() * 9);
    Etat_du_jeu[choixId]==0 ? change_etat_de_jeu(choixId,'humain',2) : choix_aleatoire();
}

function ordi_gagne(){
    Etat_du_jeu = liste_des_coup_possible[scoresMinimax.indexOf(10)];
    Maj_interface_graphique();
    verification_fin_de_la_partie()
}

function ordi_contre(i=1){
    //if(String(Etat_du_jeu) != String(liste_des_coup_possible[scoresMinimax.indexOf(-10)]) ){
        Etat_du_jeu = liste_des_coup_possible[scoresMinimax.indexOf(-10)];
    //}else{
        //Etat_du_jeu = liste_des_coup_possible[scoresMinimax.indexOf(-10,2)];
   // }    
    Maj_interface_graphique();
    verification_fin_de_la_partie();
}

function verifiction_victoire(){
    fin_de_la_partie = false
    for(let i = 0 ; i < trio_de_victoire.length ; i++){
        tab = trio_de_victoire[i];
        if( [Etat_du_jeu[tab[0]],Etat_du_jeu[tab[1]],Etat_du_jeu[tab[2]]].every(egalUn)){
            fin_de_la_partie = true;
            victoire_humain = true
            return  ;
        }else if([Etat_du_jeu[tab[0]],Etat_du_jeu[tab[1]],Etat_du_jeu[tab[2]]].every(egalDeux)){
            fin_de_la_partie = true;
            victoire_ordi = true;
            return  ;
        }
    };
}

function verifiction_null(){
   if( Etat_du_jeu.every(DifferentZero)){
    fin_de_la_partie= true;
    
   };
    
}


function verification_fin_de_la_partie(){
    verifiction_victoire();
    verifiction_null();
    if(fin_de_la_partie){
        if(victoire_humain){
            document.getElementById('InfosPartie').style.display='flex';
            document.getElementById('InfosPartie').innerHTML='Bravo, vous avez gagnez ';
            score_humain ++;
            document.getElementById('scoreTictactoe').innerHTML='<h4>SCORE :</h4> Vous : '+score_humain+' <br>IA : '+score_ia;     
        }else if(victoire_ordi){
            document.getElementById('InfosPartie').style.display='flex';
            document.getElementById('InfosPartie').innerHTML='Dommage, l\'ordinateur a gagné ';
            score_ia ++;
            document.getElementById('scoreTictactoe').innerHTML='<h4>SCORE :</h4> Vous : '+score_humain+' <br>IA : '+score_ia;     
        }else{
        document.getElementById('InfosPartie').style.display='flex';
        document.getElementById('InfosPartie').innerHTML='Match nul';
        }

    }
}

function rejouer(){
    Etat_du_jeu = [0,0,0,0,0,0,0,0,0];
    Maj_interface_graphique();
    finDeLaPartie = false;
    victoire_humain = false;
    victoire_ordi = false;

    document.getElementById('InfosPartie').style.display='none';
    nbr_de_partie ++;
    document.getElementById('InfosPartie').innerHTML=' ';
    document.getElementById('nbrDeParties').innerHTML='<h4> Partie n° : '+nbr_de_partie+'</h4>';
    qui_commence();
}

function qui_commence(){
    let choix = Math.floor(Math.random() * 2)+1;
    choix == 1 ? null: choix_aleatoire();
}
