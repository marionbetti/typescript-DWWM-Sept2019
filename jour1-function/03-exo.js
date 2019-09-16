"use strict";
// créer une fonction dans un fichier typescript
exports.__esModule = true;
function generateMore(nbLettre, version) {
    var phrase = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam sodales et neque sit amet sodales. Curabitur sollicitudin nulla risus, sit amet feugiat metus finibus vitae. Vestibulum fermentum laoreet augue, quis ultrices felis iaculis et. In aliquet nisl quis felis interdum posuere sed sed leo. Sed accumsan nisl id nisl suscipit fringilla. Quisque vel pellentesque risus, ac blandit arcu. Maecenas auctor nisi non interdum consectetur. Suspendisse turpis sapien, porttitor et nisl quis, porttitor pellentesque turpis. Morbi vehicula lectus nec odio facilisis, ut porttitor enim sodales. Quisque bibendum eros nec condimentum feugiat. Vivamus id mi quis enim feugiat faucibus in vel urna. Suspendisse eget consequat eros, ac pharetra nunc. Nulla finibus turpis vel auctor gravida. ";
    if (version == false)
        return phrase.substr(0, nbLettre) + " <a href=\"#\" target=\"_blank\"> lire la suite ...</a>";
    return phrase.substr(0, nbLettre);
}
var extrait = generateMore(10, false);
console.log(extrait);
//tsc 03-exo.ts -w
