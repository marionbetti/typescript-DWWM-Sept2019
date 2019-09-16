"use strict";
exports.__esModule = true;
function Greeting(prenom, titre) {
    var phrase = "Bonjour " + titre + " " + prenom;
    return phrase;
}
var r = Greeting("Alain", "M.");
console.log(r.toLocaleUpperCase());
