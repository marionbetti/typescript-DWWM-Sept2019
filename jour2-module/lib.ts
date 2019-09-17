function calc(x:number, y:number) : number
{
    return x + y ;
}

// je souhaite utiliser la fonction puissance dans un autre fichier app.ts
// export
// différent ce que l'on avait l'habitude avec Node
// module.exports

export function puissance (x:number, pow:number) : number 
{
    return Math.pow(x,pow);
}


