// fonction qui sera utiliser sur tout les menus
function ChangeClassActive(id){
    TabMenuElem = document.querySelectorAll(".popupMenuElem");
    
   TabMenuElem.forEach(element => {
       element.classList.remove("active");
   });
   document.getElementById(id).classList.add("active");
}


//créer des objets leçons

function lecon(titre,regle,exemple,reponse,idLecon,MenuIdLecon){
    this.titre=titre;
    this.regle=regle;
    this.exemple=exemple;
    this.reponse=reponse;
    this.idLecon=idLecon;
    this.MenuIdLecon = MenuIdLecon;
    this.AfficheAstuce=AfficheAstuce;
    
}

lecon1=new lecon(
    "<h4>Comment comparer les nombres décimaux<h4>",
    "Pour comparer les nombre décimaux entre eux ,on regarde d’abord les unités; si elles sont égales, on regarde les dixièmes; si elles sont égales, on regarde les centièmes ...",
    "<h4>Exemple :</h4>Voici une liste de nombres décimaux; classe-les par ordre croissant (du plus petit au plus grand) 4,8 - 4,08 - 4,8185 - 4,602 <br> ",
    "<table border='1' cellspacing='0' cellpadding='0'><tbody><tr><td style='text-align: center;' valign='top' width='66'><strong>Unités</strong></td><td style='text-align: center;' valign='top' width='104'><strong>Dixièmes</strong></td><td style='text-align: center;' valign='top' width='120'><strong>Centièmes</strong></td><td style='text-align: center;' valign='top' width='130'><strong>Millièmes</strong></td><td style='text-align: center;' valign='top' width='180'><strong>Dix millièmes</strong></td></tr><tr><td style='text-align: center;' valign='top' width='66'>4,</td><td style='text-align: center;' valign='top' width='104'>8</td><td style='text-align: center;' valign='top' width='113'>&nbsp;</td><td style='text-align: center;' valign='top' width='123'>&nbsp;</td><td style='text-align: center;' valign='top' width='180'>&nbsp;</td></tr><tr><td style='text-align: center;' valign='top' width='66'>4,</td><td style='text-align: center;' valign='top' width='104'>0</td><td style='text-align: center;' valign='top' width='113'>8</td><td style='text-align: center;' valign='top' width='123'>&nbsp;</td><td style='text-align: center;' valign='top' width='180'>&nbsp;</td></tr><tr><td style='text-align: center;' valign='top' width='66'>4,</td><td style='text-align: center;' valign='top' width='104'>8</td><td style='text-align: center;' valign='top' width='113'>1</td><td style='text-align: center;' valign='top' width='123'>8</td><td style='text-align: center;' valign='top' width='180'>5</td></tr><tr><td style='text-align: center;' valign='top' width='66'>4,</td><td style='text-align: center;' valign='top' width='104'>6</td><td style='text-align: center;' valign='top' width='120'>0</td><td style='text-align: center;' valign='top' width='23'>2</td><td style='text-align: center;' valign='top' width='180'>&nbsp;</td></tr></tbody></table><br>On regarde le tableau de gauche à droite. D’abord on compare les unités, si le chiffre des unités est le même on compare les dixièmes, si le chiffre des dixièmes est le même on compare les centièmes etc ...<br> <em>Réponse : 4,08 < 4,602 < 4,8 < 4,81185 </em>",
    0,
    "lec1"
    );

lecon2= new lecon(
    "<h4>Reconnaître que des droites sont parallèles</h4>",
    "Deux droites parallèles sont deux droites qui ne se coupent jamais.<br><br><img class='imgAstuce' src='img/droitesParalleles.jpg' /><br>",
    "<h4>Astuce</h4><img class='imgAstuce' src='img/perpendiculairesParalleles.jpg' /><br>Pour vérifier que deux droites d1 et d2 sont parallèles, on trace deux droites perpendiculaires (ici les deux droites noires) aux droites d1 et d2. Si les droites sont parallèles, les segments en noirs foncés sur le dessin auront la même longueur car l’écart entre les droites rouges est toujours le même puisqu’elles ne se croisent jamais.<br>",
    " ",
    1,
    "lec2"
)

lecon3= new lecon(
    "<h4>Multiplication de deux nombres décimaux : </h4>",
    "1- Fais la multiplication sans te soucier des virgules. <br>2- Compte le nombre de chiffres après la virgule dans  les deux nombres (haut et bas), ici  2 (haut) + 1 (bas) = 3 (en tout) 25,914 (3 chiffres après la virgule) <br><br><img class='imgAstuce' src='img/multiplication-nombres-decimaux-1-1.jpg'/><br>",
    " ",
    " ",
    2,
    "lec3"
)

lecon4= new lecon(
    "<h4>Les pourcentages</h4>",
    "Le pourcentage correspond à une fraction sur 100. On l’écrit sous cette forme :5% = on prend 5 parts sur 100 = 5/100 Comme toutes les fractions, les pourcentages n’ont pas de sens s’ils ne se rapportent à rien (il faut une unité). 5% de quoi ? Souvent c’est un prix mais ça peut être un nombre d’élèves, un poids.Tu l’auras compris, la solution c’est de toujours tout rapporter à 100 ! Note-le, tu en auras besoin.",
    " <h4>Exemples de problèmes de pourcentages</h4> 1-Un article coûte 50 euros, pendant les soldes le prix baisse de 30%. Quel est le nouveau prix de cet article ?<br>2-Dans l’école de Modou, il y a 400 élèves. 60% des élèves jouent d’un instrument de musique. Combien d’élèves jouent d’un instrument ?<br>3-Dans l’école de Fatim, il y a 250 élèves. 20% des élèves jouent au foot. Combien d’élèves jouent au foot ?<br>",
    "<em>1-15 euros ,(50/100) X 30 = 15 <br> <em>2- 240 élèves joues d'un instrument de musique (400/100) X 60 = 240 <br> 3-50 élève,(250/100) X 20 = 50</em>",
    3,
    "lec4"
)



var lecons=[lecon1,lecon2,lecon3,lecon4];

function AfficheAstuce(){
    if(this.reponse != " "){
    ChangeClassActive(this.MenuIdLecon);
    document.getElementById('popupSceneAstuce').innerHTML = this.titre;
    document.getElementById('popupSceneAstuce').innerHTML += this.regle;
    document.getElementById('popupSceneAstuce').innerHTML += this.exemple;
    document.getElementById('popupSceneAstuce').innerHTML += "<br><button class='btn' onclick='AfficheReponse("+this.idLecon+")' >Voir la réponse</button>";
    
}else{
    ChangeClassActive(this.MenuIdLecon);
    document.getElementById('popupSceneAstuce').innerHTML = this.titre;
    document.getElementById('popupSceneAstuce').innerHTML += this.regle;
    document.getElementById('popupSceneAstuce').innerHTML += this.exemple;
    
}
}

function AfficheReponse(idLecon){
    document.getElementById('popupSceneAstuce').innerHTML = lecons[idLecon].titre;
    document.getElementById('popupSceneAstuce').innerHTML += lecons[idLecon].regle;
    document.getElementById('popupSceneAstuce').innerHTML += lecons[idLecon].exemple;
    document.getElementById('popupSceneAstuce').innerHTML += lecons[idLecon].reponse;
}
    
    
