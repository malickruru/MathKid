//1.déclaration de variable
var operation = "";//chaine de caractère affichée sur l'écran
operationResultat=0;
var ecranDeCalcul=document.getElementById("ecranDeCalcul");//l'écran

//2.mettre à jour l'opération a chaque fois qu'un chiffre est donné
function MajCalgo(nbr){
    operation+=nbr;
    document.getElementById("ecranDeCalcul").innerHTML=operation;
}

//3.effacer l'opération
function effacer(){
    operation ="";
    document.getElementById("ecranDeCalcul").innerHTML=operation;
}


//convertir la chaine de caractère en opération et afficher le résultat
function egal(){
    operationResultat = eval(operation);
    document.getElementById("ecranDeCalcul").innerHTML = operation +" = &nbsp; "+"<label STYLE='color:green; padding:0; margin:0;'>" +operationResultat+" </label> ";
}