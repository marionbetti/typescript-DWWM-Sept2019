
// Typescript :

// sur ensemble de Javascript : contient tout javascript 
// ajoute du vocabulaire en plus sur deux concepts importants
// freine pour l'utilisation de Javascript sur des projets d'envergues
// - typage
// - class
// --------------------------
// Transpilation

// ts -> js via un module global de Node qui s'appelle typescript : tsc
// la commande tsc dispose drapeaux / options par exemple 
// tsc fichier.ts --target es6 --outDir build 

// pour éviter d'avoir à saisir la commande tsc avec toutes ses options 
// il est possible de créer un fichier tsconfig.json (pour les commandes verbeuses =
// avec beaucoup d'options)

// --------------------------
// Conseil

// en ts => const et let (éviter var)


// --------------------------
// Jour 1 = les ajouts le typage
export {};

let a = "string"; // javascript vanille (sans ajout)

// type de base = pour la variable simple = variable qui contient 1 valeur

let b:string = "autre text" ;
let c:boolean = true ;
let d:number = 20;
let e:any = "n'importe quoi" ;

// type scalaire = variable complexe = variable qui contient plusieurs valeurs
// très pratique 1 variable qui contient tout le texte dans un site internet

// tableau et les objets

let f:Array<any> = [2, true, "Victor", [],{}, undefined];
let g:string[] = ["Node JS", a, ` ${d} `];

// objet => interface 

//forme d'une objet
// mini documentation : jQuery / lodash 
interface option {
    x : number ,
    y : number ,
    unite : string,
    isVerif : boolean,
    texte : Array<string>
}

const fenetre : option = {
    x : 2,
    y : 10,
    unite : "cm",
    isVerif : true,
    texte : ["entête fenêtre", "body fenêtre", "footer"]
}

function renderWindow(args : option) :string
{
    // traitement
    return "";
}

function renderWindow2(args : option) :void
{
    // traitement
}

function calcul2(x:number, y?:number) :number
{
    // y est facultatif

    if(typeof y == undefined)
    y = 20; // valeur par défaut

    return x * y;
}


// valeur par défaut pour y 
function calcul3(x:number, y:number=20) :number
{

    return x * y;
}

console.log(calcul3(10))