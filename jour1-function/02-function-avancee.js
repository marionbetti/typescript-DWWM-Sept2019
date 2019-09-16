"use strict";
exports.__esModule = true;
function greeting(prenom, titre) {
    var phrase = "Bonjour " + titre + " " + prenom;
    return phrase;
}
var r = greeting("Alain", "M.");
console.log(r.toLocaleUpperCase());
// fonction avec argument facultatif et retourne du texte 
function planning(complet) {
    if (complet)
        return [
            { id: 1, jour: "Lundi", sujet: "NodeJS" },
            { id: 2, jour: "Mardi", sujet: "Typescript" }
        ];
    else
        return [
            { sujet: "NodeJS" },
            { sujet: "Typescript" }
        ];
}
console.log(planning()); // version courte
console.log(planning(true)); // version longue
