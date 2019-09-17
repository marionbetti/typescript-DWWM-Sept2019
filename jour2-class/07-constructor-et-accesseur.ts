class Ordinateur
{
    // version compact
    // pas besoin de déclarer les propriétés de la class
    // car on a mis dans les arguments du contructeur 
    // accesseur en plus de la variable et de son type
    // technique valable uniquement pour la méthode constructor()
    constructor(private marque : string, public processeur: string )
    {
        
    }

    log()
    {
        console.log(this.marque, this.processeur);
    }
}

const hp = new Ordinateur("HP", "I7");
hp.log();