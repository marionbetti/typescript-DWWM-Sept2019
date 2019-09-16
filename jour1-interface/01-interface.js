// fonction avec 7 paramètres 
function more(a, b, c, d, e, f, g) {
}
;
function more2(args) {
    console.log(args.texte, args.nbCaractere, args.finition, args.texteMore);
}
more2({
    texte: "lorem ipsum texte de mon article",
    nbCaractere: 2,
    finition: true,
    texteMore: "Lire la suite ..."
});
//tsc 01-interface.ts -w
