// concept très important 
// rassembler de nombreuses choses que l'on vient de voir
function dessinerLigne(coordonnee) {
    // balise canvas html permet de lui dessiner dessus en javascript
    var phrase = "je dessine un trait dans un canvas premier point " + coordonnee.x + "\n                    deuxieme point " + coordonnee.y + " ";
}
dessinerLigne({ x: 10, y: 30 });
// liaison très forte entre interface et la fonction
// l'un fonctionne avec l'autre 
// repenser ce code sous forme de class
// mettre l'ensemble des traitements dans une class (encapsuler)
var Ligne = /** @class */ (function () {
    function Ligne() {
    }
    // dans une class il y a des méthodes (ne pas mettre le mot clé function)
    Ligne.prototype.dessinerLigne = function () {
        // balise canvas html permet de lui dessiner dessus en javascript
        var phrase = "je dessine un trait dans un canvas premier point " + this.x + "\n                        deuxieme point " + this.y + " ";
        console.log(phrase);
    };
    return Ligne;
}());
// instancier ma class
var l = new Ligne(); // dans la mémoire de l'ordinateur créer une zone spéciale 
// avec toutes les instructions de la class
l.x = 30;
l.y = 50;
l.dessinerLigne();
var l2 = new Ligne();
