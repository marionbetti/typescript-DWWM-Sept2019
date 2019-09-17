class Serveur
{
    port : number ;
    constructor(portChoisi:number)
    {
        this.port = portChoisi ;
    }
    start()
    {
        console.log(`Je suis démarré sur le port ${this.port}`);
    }
}

const express = new Serveur(3000);
express.start();