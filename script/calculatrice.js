//calculatrice
var operation = "";
operationResultat=0;
var ecranDeCalcul=document.getElementById("ecranDeCalcul");

function MajCalgo(nbr){
    operation+=nbr;
    document.getElementById("ecranDeCalcul").innerHTML=operation;
}

function effacer(){
    operation ="";
    document.getElementById("ecranDeCalcul").innerHTML=operation;
}

function egal(){
    operationResultat = eval(operation);
    document.getElementById("ecranDeCalcul").innerHTML = operation +" = &nbsp; "+"<label STYLE='color:green;'>" +operationResultat+" </label> ";
}
