const {Perro} = require('./Perro');
const {Gato} = require('./Gato');
const { SuperPerro } = require('./SuperPerro');

// const snoopy = new Perro('Beagle','Negro y Blanco','Snoopy');
// console.log(snoopy);

const supercan = new SuperPerro('Pastor','café y blanco','Firulais','Supercan',true);
supercan.estaEncubierto = false;
console.log(supercan.getSaludo());
