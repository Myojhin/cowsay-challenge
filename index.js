// index.js

// Importer les modules
import dotenv from 'dotenv';
import cowsay from 'cowsay';

// Charger les variables d'environnement depuis le fichier .env
dotenv.config();

// Récupérer les variables d'environnement
const name = process.env.NAME;
const campus = process.env.CAMPUS;

// Afficher le message avec cowsay
console.log(
  cowsay.say({
    text: `Hello I'm ${name} from ${campus}!`,
    e: "oO",
    T: "U "
  })
);
