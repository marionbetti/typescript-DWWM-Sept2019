/* créer une class Article

4 proprietes 
titre
contenu 
auteur 
etat Publié on non publié 

méthode pour générer un article dans la homepage

<h2>titre</h2>
<p>  30 lettres du contenu </p>
<footer><a href="#">lire la suite ... </a></footer>

si article n'est pas publié => dans la homepage ""

méthode pour générer un article dans une page 
<h2>titre</h2>
<div>  contenu </div>
<footer><strong>Auteur</strong></footer>

si article n'est pas publié => <p>Erreur 404 page non disponible</p>  */

interface optionArticle{
    titre : string,
    contenu :string,
    auteur : string,
    etat :boolean
}

class Article
{
    constructor(private article : optionArticle)
    {}

    generateArticleHome()
    {
        let html = `
        <h2>${this.article.titre}</h2>
        <p>${this.texte30(this.article.contenu)}</p>
        <footer><a href="#">lire la suite ... </a></footer>
        `;
        html = ( this.article.etat == false ) ? "":  html;
        console.log(html);
    }

    generateArticlePage()
    {
        let html = `
        <h2>${this.article.titre}</h2>
        <p>${this.article.contenu}</p>
        <footer><strong>${this.article.auteur}</strong></footer>
        `;
        html = ( this.article.etat == false ) ? "<p>Erreur 404 page non disponible</p>":  html;
        console.log(html);
    }

    private texte30(texte :string)
    {
        return texte.substr(0,30);
    }
}

const a = new Article({
    titre:"article 1",
    contenu: "lorem ipsum",
    auteur: "moi",
    etat: false
})

a.generateArticleHome();
a.generateArticlePage();