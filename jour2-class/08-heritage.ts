export{}
class Ordinateur
{
    private prix : number;

    constructor(protected marque : string, public processeur: string )
    {
        this.marque = marque;
        this.processeur = processeur;
    }

    log()
    {
        console.log(this.marque, this.processeur);
    }
}

//héritage

class Portable extends Ordinateur
{
    vendre()
    {
        console.log("vente de portable" + this.marque );
    }
}

const p = new Portable("Apple", "I9");
p.log(); // méthode du parent de Portable : Ordinateur
p.vendre(); // méthode de Portable
