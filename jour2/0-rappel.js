"use strict";
// Typescript :
exports.__esModule = true;
var a = "string"; // javascript vanille (sans ajout)
// type de base = pour la variable simple = variable qui contient 1 valeur
var b = "autre text";
var c = true;
var d = 20;
var e = "n'importe quoi";
// type scalaire = variable complexe = variable qui contient plusieurs valeurs
// très pratique 1 variable qui contient tout le texte dans un site internet
// tableau et les objets
var f = [2, true, "Victor", [], {}, undefined];
var g = ["Node JS", a, " " + d + " "];
var fenetre = {
    x: 2,
    y: 10,
    unite: "cm",
    isVerif: true,
    texte: ["entête fenêtre", "body fenêtre", "footer"]
};
function renderWindow(args) {
    // traitement
    return "";
}
function renderWindow2(args) {
    // traitement
}
function calcul2(x, y) {
    // y est facultatif
    if (typeof y == undefined)
        y = 20; // valeur par défaut
    return x * y;
}
// valeur par défaut pour y 
function calcul3(x, y) {
    if (y === void 0) { y = 20; }
    return x * y;
}
console.log(calcul3(10));
