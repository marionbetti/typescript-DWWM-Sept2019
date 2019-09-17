// Créer une class 
//nom Fenetre
// trois propriétés
// titre : chaine de caractère
// body :  chaine de caractère
// id : chaine de caractère
// un méthode :
// nom afficher
// traitement suivants :
// afficher dans la console la chaine suivante :
//<section id="la variable id de la class Fenetre">
//    <header>la variable titre de la class Fenetre</header>
//    <div>la variable body de la class Fenetre</div>
//</section>
// créer la fenêtre titre Panneau de configuration / body liste <ul><li> / id config
// créer la fenêtre titre option / body liste <ul><li> / id option
// https://github.com/webdevproformation/typescript-DWWM-Sept2019
var Fenetre = /** @class */ (function () {
    function Fenetre() {
    }
    Fenetre.prototype.afficher = function () {
        var html = "\n            <section id=\"" + this.id + "\">\n                <header>" + this.titre + "</header>\n                <div>" + this.body + "</div>\n            </section>\n        ";
        console.log(html);
    };
    return Fenetre;
}());
var f1 = new Fenetre();
f1.titre = "Panneau de configuration";
f1.body = "\n<ul>\n    <li><a href=\"admin.html\">Admin</a></li>\n    <li><a href=\"login.html\">login</a></li>\n    <li><a href=\"logout.html\">d\u00E9connexion</a></li>\n</ul>\n";
f1.id = "config";
f1.afficher();
//tsc 02-exo.ts -w
