var Phone = /** @class */ (function () {
    function Phone(num, modele, dt) {
        this.numero = num;
        this.modele = modele;
        this.dtAchat = dt || new Date(); // si on lui fourni une date il va la prendre
        // sinon il va prendre new Date()
    }
    Phone.prototype.vente = function () {
        var produit = {
            "numéro de téléphone ": this.numero,
            "modele du téléphone": this.modele,
            "date d'achat ": this.dtAchat
        };
        console.log(produit);
    };
    return Phone;
}());
var iphone = new Phone('060606060606', "5S");
iphone.vente();
