// tsc 02-typage.ts -w
export {}

// maintenant nous allons découvrir des nouveaux mots / syntaxe
// qui sont dans Typescript

const text : string = "Bonjour";

let text2 : string = "hello";

text2 = "q";

// type de base 

let number : number = 2 ; // 2 , 1.3 , -2.5
let phrase : string = "du lorem ipsum";
let isOk : boolean = false ;

let variable :any ;
variable = 2;
variable = "bonjour";
variable = true;

// variable scalaire = variable complexe = variable qui contient
// plusieurs valeurs 

const liste : Array<string> = ["Lundi","Mardi","Mercredi"];
// variable complexe tableau / objet Array Object => il faut préciser
// le type du contenu

const liste2 : string[] = ["Nodejs","Javascript vanille"];

let liste3 : Array<string | number > = ["pomme", 2] ;

let liste4 : (string | number )[] = ["pomme", 2] ;

let liste5 : Array<any> = [true, "hello", 2 , {}];

// objet 
// interface 

const formation = { "sujet" : "NodeJS", "cours" : "http://...com"};

// JSON

const articles : Array<Object>= [
    {id : 2, titre: "article 2"},
    {id : 2, titre: "article 2"},
    {id : 2, titre: "article 2"},
    {id : 2, titre: "article 2"},
]



const articles2 : Object[]= [
    {id : 2, titre: "article 2"},
    {id : 2, titre: "article 2"},
    {id : 2, titre: "article 2"},
    {id : 2, titre: "article 2"},
]