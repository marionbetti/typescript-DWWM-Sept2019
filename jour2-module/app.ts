//import { puissance , Article , Voiture } from "./lib" ;
import * as lib from "./lib" ;

// par rapport à Node const { puissance } = require ("./lib");

import genererMenu from "./html-lib" ;
// pas besoin d'écrire import {genererMenu} from "./html-lib" ;

console.log(lib.puissance(2,6));

const a : lib.Article = {
    id: 2,
    titre : "nouvel article",
    contenu : "lorem ipsum"
}

const v = new lib.Voiture();

genererMenu();