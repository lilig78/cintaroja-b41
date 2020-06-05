var dimensiones = {
    altura: 34,
    anchura: 455
}

//console.log("altura: ",dimensiones.altura)
//console.log("anchura: ",dimensiones.anchura)

class Poligono {
  constructor(figura,alto, ancho) {
    // this: nos va a hacer referencia a una propiedad dentro de su clase
    this.figura = figura
    this.alto = alto;
    this.ancho = ancho;
  }
  getName(){
    return this.figura;
  };
  getArea(){
      return this.alto * this.ancho
  }
};

class Dibujo {
  constructor(figura) {
    // this: nos va a hacer referencia a una propiedad dentro de su clase
    this.figura = figura;
   
  }
  getName(){
    return this.figura;
  

  }
};




// new:  nos va ayudar a crear una instancia de la clase === "objeto"

const rectangulo = new Poligono("rectangulo",33,44);

const cuadrado = new Poligono("cuadrado",36,44);


console.log(rectangulo.getName());

console.log(cuadrado.getName());

//console.log("Area del poligono: ",rectangulo.getArea());
console.log("Area del poligono: ",cuadrado.getArea());


const figura = new Dibujo ("para alumnos");


console.log(dibujo1.figura);

