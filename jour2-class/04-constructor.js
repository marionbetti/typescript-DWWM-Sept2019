"use strict";
exports.__esModule = true;
var Ligne = /** @class */ (function () {
    // fonction spéciale dédiée aux class
    function Ligne(pointDepart, pointFinal) {
        // initialiser les propriétés de la class
        this.x = pointDepart;
        this.y = pointFinal;
    }
    Ligne.prototype.dessinerLigne = function () {
        var phrase = "je dessine un trait dans un canvas \n                    premier point " + this.x + "\n                    deuxieme point " + this.y + " ";
        console.log(phrase);
    };
    return Ligne;
}());
var l = new Ligne(10, 10);
l.dessinerLigne();
