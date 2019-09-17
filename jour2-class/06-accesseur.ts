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

// si rien devant une méthode / une propriété d'une class = public
// elle est utilisable dans et hors de la  class

// si vous mettez private devant  une méthode / une propriété d'une class 
// propriete / méthode ne peut être utilisée que DANS la class
// sécurité éviter que un script puisse réaliser des actions non voulues

// protected : dans le cas ou la class dispose d'un héritier 
// la class enfant peut utiliser  une méthode / une propriété protected

// protection lorsque l'on a un projet avec des centaines de class 
// qui communiquent les uns avec les autres 
// ce qui rend le risque de collision (override = surcharge = modification)
// plus grand