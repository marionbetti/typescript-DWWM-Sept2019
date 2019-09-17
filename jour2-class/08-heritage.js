"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Ordinateur = /** @class */ (function () {
    function Ordinateur(marque, processeur) {
        this.marque = marque;
        this.processeur = processeur;
    }
    Ordinateur.prototype.log = function () {
        console.log(this.marque, this.processeur);
    };
    return Ordinateur;
}());
//héritage
var Portable = /** @class */ (function (_super) {
    __extends(Portable, _super);
    function Portable() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Portable.prototype.vendre = function () {
        console.log("vente de portable" + this.marque);
    };
    return Portable;
}(Ordinateur));
var p = new Portable("Apple", "I9");
p.log(); // méthode du parent de Portable : Ordinateur
p.vendre(); // méthode de Portable
