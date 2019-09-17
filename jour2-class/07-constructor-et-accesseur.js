var Ordinateur = /** @class */ (function () {
    // version compact
    // pas besoin de déclarer les propriétés de la class
    // car on a mis dans les arguments du contructeur 
    // accesseur en plus de la variable et de son type
    // technique valable uniquement pour la méthode constructor()
    function Ordinateur(marque, processeur) {
        this.marque = marque;
        this.processeur = processeur;
        this.marque = marque;
        this.processeur = processeur;
    }
    Ordinateur.prototype.log = function () {
        console.log(this.marque, this.processeur);
    };
    return Ordinateur;
}());
var hp = new Ordinateur("HP", "I7");
hp.log();
