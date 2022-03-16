// fonction qui sera utiliser sur tout les menus
function ChangeClassActive(id){
    TabMenuElem = document.querySelectorAll(".popupMenuElem");
    
   TabMenuElem.forEach(element => {
       element.classList.remove("element-actif");
   });
   document.getElementById(id).classList.add("element-actif");
}



function multiply(multiplicateur,id){
    ChangeClassActive(id);
    
    document.getElementById('popupSceneMultiply').innerHTML ="<h4>La table de "+multiplicateur+" est : </h4>";
    for (let i = 1; i < 11; i++) {
        document.getElementById('popupSceneMultiply').innerHTML += multiplicateur+" X "+i+" = "+(multiplicateur*i)+"<br>"; 
    }
}