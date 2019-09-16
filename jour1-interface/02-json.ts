interface Article {
    id:number,
    titre: string,
    contenu : string,
    auteur : number,
    commentaire ?: Array<string>
}

const articles : Array<Article> = [
    {id:1 , titre : "article1" , contenu : "lorem" , auteur : 2 },
    {id:2 , titre : "article2" , contenu : "lorem" , auteur : 2 },
    {id:3 , titre : "article3" , contenu : "lorem" , auteur : 2 },
    {id:4 , titre : "article4" , contenu : "lorem" , auteur : 2 },
    {
        id:5 , 
        titre : "article5" , 
        contenu : "lorem" , 
        auteur : 2 ,
        commentaire : [
            "super article", "autre commentaire", "...."
        ]
    },
]


articles[0].contenu