var Serveur = /** @class */ (function () {
    function Serveur(portChoisi) {
        this.port = portChoisi;
    }
    Serveur.prototype.start = function () {
        console.log("Je suis d\u00E9marr\u00E9 sur le port " + this.port);
    };
    return Serveur;
}());
var express = new Serveur(3000);
express.start();
