import { puissance , Article , Voiture } from "./lib" ;

// par rapport à Node const { puissance } = require ("./lib");

console.log(puissance(2,6));

const a : Article = {
    id: 2,
    titre : "nouvel article",
    contenu : "lorem ipsum"
}

const v = new Voiture();