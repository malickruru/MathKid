


// fonction qui sera utiliser sur tout les menus
function ChangeClassActive(id){
    TabMenuElem = document.querySelectorAll(".popupMenuElem");
    
   TabMenuElem.forEach(element => {
       element.classList.remove("active");
   });
   document.getElementById(id).classList.add("active");
}


//déclaration de variable
var a=0, b=1,perimetre, aire, booleanCarre,circonference ,c ,B ,h;

//définir la superclasse forme

class Forme{
    constructor(titre, image, formulePerimetre, formuleAire){
        this.titre = titre;
        this.image = image;
        this.formulePerimetre = formulePerimetre;
        this.formuleAire = formuleAire;
    }

}

//définir la sous-classe paraléllogramme
class Paralellogramme extends Forme{
    constructor(titre, image, formulePerimetre, formuleAire, ){
        super(titre, image, formulePerimetre, formuleAire);
    
    }
        CalculsPalellogramme(booleanCarre){
            if (booleanCarre == 1){
                ChangeClassActive('g1')
              a = parseInt(prompt("Combien mesure le coté du carré ?"));
              b = a 
             }else {
                ChangeClassActive('g2')
                 a = parseInt(prompt("Combien mesure la largeur du rectangle ?"));
                 b = parseInt(prompt("Combien mesure la longueur du rectangle ?"));}
            perimetre = 2*(a+b);
            aire = a*b;
            this.AfficheParralellogramme();
            
        }
        AfficheParralellogramme(){
            document.getElementById('popupSceneGeometre').innerHTML="<h4>"+this.titre+"</h4>  ";
            document.getElementById('popupSceneGeometre').innerHTML+="-Schéma: <img "+this.image+"  /></br>";
            document.getElementById('popupSceneGeometre').innerHTML+="-"+this.formulePerimetre+"</br>";
            document.getElementById('popupSceneGeometre').innerHTML+="-"+this.formuleAire+"</br>";
            document.getElementById('popupSceneGeometre').innerHTML+="-Périmètre: "+perimetre+"</br>";
            document.getElementById('popupSceneGeometre').innerHTML+="-Aire: "+aire+"</br>";
        }
}

//définir la sous-classe cercle
class Cercle extends Forme{
    constructor(titre, image, formulePerimetre, formuleAire){
        super(titre, image, formulePerimetre, formuleAire);   
    }
    CalculsCercle(){
        ChangeClassActive('g3')
        a = parseInt(prompt("Combien mesure le rayon du cercle ?"));
        circonference = 2*3.14*a;
        aire = 3.14*(a*a);
        this.AfficheCercle();
        
    }
    AfficheCercle(){
        document.getElementById('popupSceneGeometre').innerHTML="<h4>"+this.titre+"</h4>  ";
        document.getElementById('popupSceneGeometre').innerHTML+="-Schéma: <img "+this.image+" /></br>";
        document.getElementById('popupSceneGeometre').innerHTML+="-"+this.formulePerimetre+"</br>";
        document.getElementById('popupSceneGeometre').innerHTML+="-"+this.formuleAire+"</br>";
        document.getElementById('popupSceneGeometre').innerHTML+="-Circonférence: "+circonference.toFixed(2)+"</br>";
        document.getElementById('popupSceneGeometre').innerHTML+="-Aire: "+aire+"</br>";
    }
    
}

//définir la sous-classe triangle
class Triangle extends Forme{
    constructor(titre, image, formulePerimetre, formuleAire){
        super(titre, image, formulePerimetre, formuleAire)
    }
    CalculsTriangle(){
        ChangeClassActive('g4')
        a = parseInt(prompt("Soit le triangle de coté a,b et c dont b est la base\nCombien mesure le coté a ?"));
        b = parseInt(prompt("Soit le triangle de coté a,b et c dont b est la base\nCombien mesure le coté b ?"));
        c = parseInt(prompt("Soit le triangle de coté a,b et c dont b est la base\nCombien mesure le coté c ?"));
      perimetre = a+b+c;
      h=a*(Math.sin(c));
      aire =(b*h)/2;
      this.AfficheTriangle();
      
  }
  AfficheTriangle(){
    document.getElementById('popupSceneGeometre').innerHTML="<h4>"+this.titre+"</h4>  ";
    document.getElementById('popupSceneGeometre').innerHTML+="-Schéma: <img "+this.image+" /></br>";
    document.getElementById('popupSceneGeometre').innerHTML+="-"+this.formulePerimetre+"</br>";
    document.getElementById('popupSceneGeometre').innerHTML+="-"+this.formuleAire+"</br>";
    document.getElementById('popupSceneGeometre').innerHTML+="-Périmètre: "+perimetre+"</br>";
    document.getElementById('popupSceneGeometre').innerHTML+="-Aire: "+aire+"</br>";
  }
}

//définir la sous-classe trapèze
class Trapeze extends Forme{
    constructor(titre, image, formulePerimetre, formuleAire){
        super(titre, image, formulePerimetre, formuleAire)
    }
    CalculsTrapeze(){
        ChangeClassActive('g5')
     b=parseInt(prompt("Combien mesure la petite base ?"));
     B=parseInt(prompt("Combien mesure la grande base ?"));
     h=parseInt(prompt("Combien mesure la hauteur ?"));
      perimetre = a+b+c;
      aire =((B+b)*h)/2;
      this.AfficheTrapeze();
      
  }
  AfficheTrapeze(){
    document.getElementById('popupSceneGeometre').innerHTML="<h4>"+this.titre+"</h4>  ";
    document.getElementById('popupSceneGeometre').innerHTML+="-Schéma: <img "+this.image+" /></br>";
    document.getElementById('popupSceneGeometre').innerHTML+="-"+this.formuleAire+"</br>";
    document.getElementById('popupSceneGeometre').innerHTML+="-Aire: "+aire+"</br>";
  }
}

var carre = new Paralellogramme ("Le carré", "src='img/square.png' style='display:inline;'","la formule du périmètre du carré est:<strong> coté X 4</strong>", "la formule de l'aire du carré est:<strong> coté X coté</strong>");
var rectangle = new Paralellogramme("Le rectangle", "src='img/rectangle.png' style='display:inline;'","la formule du périmètre du rectangle est:<strong> longueur X largeur</strong>", "la formule de l'aire du carré est:<strong> longueur X largeur</strong>");
var cercle = new Cercle("Le cercle", "src='img/circle.png' style='display:inline;'","la formule de la circonférence du cercle est:<strong> Rayon X PI X 2 </strong>", "la formule de l'aire du cercle est:<strong>PI X RAYON² </strong>");
var triangle = new Triangle("Le triangle", "src='img/triangle.png' style='display:inline;'","la formule du périmetre  du triangle composé des droites a,b et c est:<strong> a X b X c </strong>", "la formule de l'aire du triangle est:<strong>(base X hauteur)/2 </strong>");
var trapeze = new Trapeze("Le trapèze", "src='img/trapezium.png' style='display:inline;'"," ", "la formule de l'aire du Trapèze est:<strong>((grande base + petite base)*hauteur)/2</strong>");



