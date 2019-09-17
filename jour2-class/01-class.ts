// concept très important 
// rassembler de nombreuses choses que l'on vient de voir

// fonction dessinerLigne (x , y)

// interface x : chiffre
//           y : chiffre

// 1ère manière écrire 

interface optionDessin {
    x:number,
    y:number
}

function dessinerLigne(coordonnee : optionDessin)
{
 // balise canvas html permet de lui dessiner dessus en javascript
 const phrase = `je dessine un trait dans un canvas premier point ${coordonnee.x}
                    deuxieme point ${coordonnee.y} `;
}

dessinerLigne({x:10,y:30});

// liaison très forte entre interface et la fonction
// l'un fonctionne avec l'autre 

// repenser ce code sous forme de class
// mettre l'ensemble des traitements dans une class (encapsuler)
class Ligne
{
    // intérieur de l'interface
    // propriété de la class
    x:number ;
    y:number ;

    // dans une class il y a des méthodes (ne pas mettre le mot clé function)
    dessinerLigne()
    {
     // balise canvas html permet de lui dessiner dessus en javascript
     const phrase = `je dessine un trait dans un canvas premier point ${this.x}
                        deuxieme point ${this.y} `;
        console.log(phrase);
    }
}

// instancier ma class
let l = new Ligne(); // dans la mémoire de l'ordinateur créer une zone spéciale 
                    // avec toutes les instructions de la class
l.x = 30;
l.y = 50;
l.dessinerLigne();


let l2 = new Ligne();
