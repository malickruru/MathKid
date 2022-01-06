var j=1;


function suivant (){
    j=2
    document.getElementById('partenaire').style.transform='translateX(0)';
    document.getElementById('suivant').style.opacity='0.6';
    document.getElementById('precedent').style.opacity='1';
   clearInterval(DelaisCarousel);
   DelaisCarousel = setInterval(carousel, 8000);

}

function precedent (){
    j=1
    document.getElementById('partenaire').style.transform='translateX(80vw)';
    document.getElementById('precedent').style.opacity='0.6';
    document.getElementById('suivant').style.opacity='1'; 
    clearInterval(DelaisCarousel);
   DelaisCarousel = setInterval(carousel, 8000);

}

window.addEventListener('load',() => {
 DelaisCarousel = setInterval(carousel, 8000);}
)
 
 function carousel(){
     j == 2 ? precedent() : suivant() ;
 }