"use strict";
exports.__esModule = true;
// void : rien = vide 
// ne pas confondre avec undefined / any
function hello() {
    console.log("hello");
    // return
}
var h = hello();
// fonction avec arguments
function lorem(liste) {
    console.log(liste.length);
}
lorem(["12", "bonjour", "true", "autre éléments"]);
// fonction avec argument et retourne une valeur
function lorem2(verif) {
    /* if(verif)
    {
        return 20
    }
    else
    {
        return 0
    } */
    if (verif)
        return 20;
    else
        return 0;
}
var resultat = lorem2(true);
console.log(resultat);
