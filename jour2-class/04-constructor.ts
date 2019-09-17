export {}
class Ligne
{
    x:number ;
    y:number ;

    // fonction spéciale dédiée aux class
    constructor(pointDepart :number, pointFinal :number)
    {
        // initialiser les propriétés de la class
        this.x = pointDepart;
        this.y = pointFinal;
    }

    dessinerLigne()
    {
     const phrase = `je dessine un trait dans un canvas 
                    premier point ${this.x}
                    deuxieme point ${this.y} `;
     console.log(phrase);
    }
}

const l = new Ligne(10, 10);

l.dessinerLigne();