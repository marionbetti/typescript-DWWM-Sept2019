// Créer une class 
//nom Fenetre

// trois propriétés
// titre : chaine de caractère
// body :  chaine de caractère
// id : chaine de caractère

// un méthode :
// nom afficher
// traitement suivants :
// afficher dans la console la chaine suivante :
//<section id="la variable id de la class Fenetre">
//    <header>la variable titre de la class Fenetre</header>
//    <div>la variable body de la class Fenetre</div>
//</section>

// créer la fenêtre titre Panneau de configuration / body liste <ul><li> / id config
// créer la fenêtre titre option / body liste <ul><li> / id option

// https://github.com/webdevproformation/typescript-DWWM-Sept2019

class Fenetre
{
    titre : string;
    body : string;
    id : string;

    afficher() :void
    {
        const html = `
            <section id="${this.id}">
                <header>${this.titre}</header>
                <div>${this.body}</div>
            </section>
        `;
        console.log(html) ;
    }
}

const f1 = new Fenetre();
f1.titre = "Panneau de configuration";
f1.body = `
<ul>
    <li><a href="admin.html">Admin</a></li>
    <li><a href="login.html">login</a></li>
    <li><a href="logout.html">déconnexion</a></li>
</ul>
`;
f1.id= "config" ;
f1.afficher();
//tsc 02-exo.ts -w
