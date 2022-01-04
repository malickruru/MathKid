// changer la forme du header

window.addEventListener('scroll',header);
var profondeur;


function header(){
    profondeur = window.pageYOffset;
    // console.log(profondeur);
    if(profondeur > 50){
        document.getElementById('headerGrid').style.display = 'none' ;
        document.getElementById('header').classList.remove('header'); 
        document.getElementById('header').classList.add('header2'); 
        document.getElementById('menuHeader2').style.display = 'flex' ;

    }else{
        document.getElementById('headerGrid').style.display = 'grid' ;
        document.getElementById('header').classList.remove('header2'); 
        document.getElementById('header').classList.add('header'); 
        document.getElementById('menuHeader2').style.display = 'none' ;
    }
}