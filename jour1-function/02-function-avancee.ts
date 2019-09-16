// tsc 02-function-avancee.ts -w
export{}

function greeting (prenom: string, titre: string) : string
{
    const phrase = `Bonjour ${titre} ${prenom}`;
    return phrase;
}

const r :string  = greeting("Alain", "M.");
console.log(r.toLocaleUpperCase());

// fonction avec argument facultatif et retourne du texte 

function planning (complet ?: boolean) : Array<Object>
{
 if(complet )
    return [
        {id:1, jour:"Lundi",sujet:"NodeJS"},
        {id:2, jour:"Mardi",sujet:"Typescript"}
    ]
 else
    return [
        {sujet:"NodeJS"},
        {sujet:"Typescript"}
    ]
}


console.log(planning()) // version courte
console.log(planning(true)) // version longue