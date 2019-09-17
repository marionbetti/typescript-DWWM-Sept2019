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
var Article = /** @class */ (function () {
    function Article(article) {
        this.article = article;
    }
    Article.prototype.generateArticleHome = function () {
        var html = "\n        <h2>" + this.article.titre + "</h2>\n        <p>" + this.article.contenu.substr(0, 30) + "</p>\n        <footer><a href=\"#\">lire la suite ... </a></footer>\n        ";
        html = (this.article.etat == false) ? "" : html;
        console.log(html);
    };
    Article.prototype.generateArticlePage = function () {
        var html = "\n        <h2>" + this.article.titre + "</h2>\n        <p>" + this.article.contenu + "</p>\n        <footer><strong>" + this.article.auteur + "</strong></footer>\n        ";
        html = (this.article.etat == false) ? "<p>Erreur 404 page non disponible</p>" : html;
        console.log(html);
    };
    return Article;
}());
var a = new Article({
    titre: "article 1",
    contenu: "lorem ipsum",
    auteur: "moi",
    etat: false
});
a.generateArticleHome();
a.generateArticlePage();
