// fonction qui sera utiliser sur tout les menus
function ChangeClassActive(id){
    TabMenuElem = document.querySelectorAll(".popupMenuElem");
    
   TabMenuElem.forEach(element => {
       element.classList.remove("element-actif");
   });
   document.getElementById(id).classList.add("element-actif");
}

function unite(unit,coefficient){
    this.unit=unit;
    this.coefficient=coefficient;
}
//le coefficient est la valeur d'une unité convertie en milli par exemple 1gramme = 1000milligramme ,le coefficient de gramme et donc 1000
kilo=new unite ("kilo", 1000000);
hecto=new unite ("hecto", 100000);
deca=new unite ("déca", 10000);
u=new unite ("", 1000);
deci=new unite ("deci", 100);
centi=new unite ("centi", 10);
milli=new unite ("milli", 1);


var unites = [kilo,hecto,deca,u,deci,centi,milli];




function OuvrirConvertisseur(formulaire,id){
//menu
ChangeClassActive(id);
//Masquer les formulaire inutile
FermerConvertisseur();
//affiche le formulaire appelé
document.getElementById(formulaire).style.display='flex';
}

function FermerConvertisseur(){
    TabFormulaire = document.querySelectorAll(".formulaireConverssion");
    
    TabFormulaire.forEach(element => {
       element.style.display='none';
   });
       }


    function Convertisseur(mesure,idresultat,unit1,unit2,valeurAConvertir){
        unite1= unites[document.getElementById(unit1).value] ;
        unite2=unites[document.getElementById(unit2).value] ;
        valeurAConvertir= document.getElementById(valeurAConvertir).value;
        resultatConverssion = (valeurAConvertir * unite1.coefficient)/unite2.coefficient;//la valeur est dabord converti en millimètre puis diviser par le second coefficien
    document.getElementById(idresultat).innerHTML = resultatConverssion + " "+unite2.unit+mesure;
  }