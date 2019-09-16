// créer une fonction dans un fichier typescript

// s'appelle : generateMore
// deux arguments
    // nombre de lettre : chiffre
    // version  : boolean

// signature de la fonction

// traitements attendus
// retourner une chaine de caractères de longueur variable "nombre de lettre"

// si version false : ajoute ...

// function "more ..."
export {};

function generateMore(nbLettre : number, version : boolean) : string
{
    const phrase :string = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales et neque sit amet sodales. Curabitur sollicitudin nulla risus, sit amet feugiat metus finibus vitae. Vestibulum fermentum laoreet augue, quis ultrices felis iaculis et. In aliquet nisl quis felis interdum posuere sed sed leo. Sed accumsan nisl id nisl suscipit fringilla. Quisque vel pellentesque risus, ac blandit arcu. Maecenas auctor nisi non interdum consectetur. Suspendisse turpis sapien, porttitor et nisl quis, porttitor pellentesque turpis. Morbi vehicula lectus nec odio facilisis, ut porttitor enim sodales. Quisque bibendum eros nec condimentum feugiat. Vivamus id mi quis enim feugiat faucibus in vel urna. Suspendisse eget consequat eros, ac pharetra nunc. Nulla finibus turpis vel auctor gravida. ";
    
    if(version == false) return phrase.substr(0,nbLettre) + " ...";

    return phrase.substr(0,nbLettre) ;
}

const extrait = generateMore(10, false);
console.log(extrait);

//tsc 03-exo.ts -w