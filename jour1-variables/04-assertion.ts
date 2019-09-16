//tsc 04-assertion.ts -w
export {};

// dans la mesure du possible écrire 
let a : boolean = true ;

// lorsque c'est vous même qui avez écrit 100% code
// il arrive que vous soyez entrain d'utiliser une fonction / méthode
// variable écrite par un autre développeur 
// par exemple jQuery // underscore / joi  ??
// librairie télécharger depuis npmjs.com et que tu vas utiliser 
// dans ton code source
// npm i express
// const express = require("express")
// const app = express();
// app.get("path", (req,resp) => {})

let b ; // déclaration 

(<string>b) = "bonjour"; // affectation 

b = "2";


let c ;
const result = (<string>c ).toLocaleUpperCase();