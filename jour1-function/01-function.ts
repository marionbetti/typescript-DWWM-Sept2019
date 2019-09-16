// tsc 01-function.ts -w
export {}

// void : rien = vide 
// ne pas confondre avec undefined / any
function hello() : void {
    console.log("hello");
    // return
}

const h = hello();

// fonction avec arguments

function lorem(liste : Array<string>) : void
{
    console.log(liste.length)
}

lorem(["12", "bonjour","true","autre éléments"]);

// fonction avec argument et retourne une valeur

function lorem2 (verif : boolean) :number
{
    /* if(verif)
    {
        return 20
    } 
    else
    {
        return 0
    } */

    if (verif) return 20
    else return 0

}

const resultat = lorem2(true);

console.log(resultat);