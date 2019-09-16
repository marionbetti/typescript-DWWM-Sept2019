enum config {
    root = ".",
    domaine = "http://localhost" ,
    port = 3000 ,
    route = "POST,DELETE,GET,PUT"
  };

console.log(config.route);

// tsc 3-exo-enum.ts transpiler en js
// node 3-exo-enum.js => pour voir dans la console si tout est ok
// exécuter mon fichier .js qui a été transpilé depuis .ts

// tsc 3-exo-enum.ts && node 3-exo-enum.js