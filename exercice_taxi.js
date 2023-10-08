"use strict";

// Consignes : 
//John essaie de rentrer chez lui en taxi.
//Probleme : Il a horreur d’écouter Anissa de Wejdene qui passe tout le temps à la radio.
//Dès qu’il entend cette musique, il perd 1 de santé mentale et change de taxi.
//Partons du principe qu’une musique se change à chaque feu rouge qu’il rencontre et qu’il est à 30 feux de chez lui
//À chaque feu rouge, afficher la musique jouée + le nombre de feux restants.
//Deux possibilités de fin :
//- Si il a passé les 30 feux rouges, il est arrivé à destination et donc affiche qu’il est bien arrivé et 
//qu’il lui a fallu x changements de taxi pour y arriver
//- Sa santé mentale tombe à 0, il explose et donc affiche « explosion » 
//Nous avons besoin d’un Personnage avec un prénom et une santé mentale à 10.
//Nous avons besoin d’une liste de 5 musiquesdont Anissa - Wejdene
//Nous avons besoin d’un Trajet avec une radio, 30 feux rouges et un nombre de changements

// Mise en place des éléments principaux : 
let SanteMentaleDeJohn = 10; //John et sa santé mentale
let NombreDeFeux = 30; //Le nombre de feu avant d'arriver chez lui
let ChangementsDeTaxi = 0; //Le nombre de changement de taxi avant d'arriver chez lui
let TableauMusiquesRadio = ["Anissa de Wejdene", "The Real Folk Blues", "Toh-I Sakebi", "Emerald Sword", "Almost Blue"]; //Les musiques qui passent à la radio

// Pour commencer le Trajet 
PassageFeuRouge();
function PassageFeuRouge(){ // Mise en place de ce qu'il se passe au passage d'un feu rouge grâce à function 
  for (let i = 1; i <= NombreDeFeux; i++) { //Pour faire avancer John au fur et à mesure des feux rouges
    let musique = TableauMusiquesRadio[Math.floor(Math.random() *4)]; //Permet de randomizer une musique du tableau
    console.log(`La musique qui passe à la radio est : ${musique}, Il reste : ${NombreDeFeux - i + 1} feux avant destination`);
    
    if (musique === "Anissa de Wejdene"){
      SanteMentaleDeJohn -= 1;
      ChangementsDeTaxi += 1; 
      
      if (SanteMentaleDeJohn <= 0){
        console.log("Oh non! Boom explosion");
        return;
      }
    }
  }
  console.log("John a survécu et est arrivé à destination en " + ChangementsDeTaxi + " changements de taxi.");
}
