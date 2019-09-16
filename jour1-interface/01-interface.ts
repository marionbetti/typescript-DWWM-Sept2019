
// fonction avec 7 paramètres 
function more(a,b,c,d,e,f,g)
{

}
// marche mais c'est illisible 
// plutôt remplacer tous les paramètres par un objet 

// fonction a 1 seule paramètre qui est un objet 

interface OptionMore {
    texte : string ,
    nbCaractere : number,
    finition : boolean,
    texteMore : string
};

function more2(args : OptionMore ) : void
{
    console.log(args.texte, args.nbCaractere, args.finition, args.texteMore)
}

more2(
    {
        texte:"lorem ipsum texte de mon article",
         nbCaractere : 2,
         finition : true ,
         texteMore : "Lire la suite ..."
    }
)
//tsc 01-interface.ts -w

