window.addEventListener('scroll',header);
var profondeur;


function header(){
    profondeur = window.pageYOffset;
    // console.log(profondeur);
    if(profondeur > 20){
        document.getElementById('header_A').style.display = 'none' ;
        document.getElementById('header').classList.remove('header'); 
        document.getElementById('header').classList.add('header2'); 
        document.getElementById('header_B').style.display = 'flex' ;

    }else{
        document.getElementById('header_A').style.display = 'block' ;
        document.getElementById('header').classList.remove('header2'); 
        document.getElementById('header').classList.add('header'); 
        document.getElementById('header_B').style.display = 'none' ;
    }
}