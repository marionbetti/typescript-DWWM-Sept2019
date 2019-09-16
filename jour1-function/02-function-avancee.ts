// tsc 02-function-avancee.ts -w
export{}

function Greeting (prenom:string, titre:string) :string
{
    const phrase = `Bonjour ${titre} ${prenom}`;
    return phrase;
}

const r :string  = Greeting("Alain", "M.");
console.log(r.toLocaleUpperCase());