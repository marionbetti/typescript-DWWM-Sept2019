class Phone
{
    private numero:string;
    protected modele:string;
    dtAchat:Date ;

    constructor( num:string, modele:string, dt?:Date)
    {
        this.numero = num ;
        this.modele = modele;
        this.dtAchat = dt || new Date(); // si on lui fourni une date il va la prendre
                                        // sinon il va prendre new Date()
    }

    vente()
    {
        const produit = {
            "numéro de téléphone " : this.numero,
            "modele du téléphone" : this.modele,
            "date d'achat " : this.dtAchat
        }
        console.log(produit);
    }

    rachat()
    {
        this.numero = "20202";
        const num = this.numero
    }
}

const iphone = new Phone('060606060606', "5S")

iphone.vente();