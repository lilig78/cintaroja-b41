const {Perro} = require('./Perro')
//Clase hija de Mascota
class SuperPerro extends Perro{

    constructor(raza,color,nombre,nickname,estaEncubierto){
        super(raza,color,nombre);
        console.log('Se creo el SuperPerro');
        this.nickname = nickname;
        this.estaEncubierto = estaEncubierto;
    }

    getSaludo(){
        /*
        let mensaje = '';
        if (this.estaEncubierto) {
          mensaje = `Soy ${this.nombre}.`;
        } else {
          mensaje = `Soy ${this.nickname}.`;
          mensaje = 'Soy' + this.nickname;
        }
        return mensaje;
        */
        // ternario: condición ? 'si se cumple' : 'si no se cumple'
        return this.estaEncubierto 
          ? `Soy ${this.nombre}` 
          : `Soy ${this.nickname}`;
    }
}

module.exports = {
    SuperPerro
}