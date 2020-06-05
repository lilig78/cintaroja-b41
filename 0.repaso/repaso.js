//VARIABLES
console.log('\n---------------------VARIABLES-----------------------\n')

const string = "Hola mundo"; // const -> nunca va a cambiar su valor
let entero = 63;// let -> solo se puede usar en el scope creado
var flotante = 4789; //var -> Se usa de manera global
const booleano = false;

console.log("Tipo de la variable: ",typeof(string));

//OPERADORES 
console.log('\n---------------------OPERADORES-----------------------\n')

console.log("Operador '==': ", 2 == 2 ) // Verifica que el valor sea el mismo
console.log("Operador '!=': ", 2 != 4) // Verifica que el valor sea diferente
console.log ("Operador '>': ", 5 > 1) // Verifica si el valor es mayor que
console.log("Operador '>='",5 >= 5)//Verifica si el valor es mayor o igual
console.log("Operador '<' ", 3 < 7)//Verifica si el valor es menor
console.log("Operador '<=' ", 9 <= 9 ) //Verifica si el valor es  menor o igual

console.log('\n---------------------ESTRUCTURAS DE CONTROL-----------------------\n')

//El if sirve para evaluar una sentencia logica, si es verdad ejecutara lo que tiene en su interior  de lo contrario ejecutar el else
let edad = 12
if(edad >= 18 ){
  console.log("IF: Eres mayor de edad")
}else{
  console.log("iF: No eres mayor de edad")
}

//El IF ELSE es ocupado cuando queremos evaluar diversos casos logicos y cubrir cualquier posibilidad.
let fruta = "Naranja"
if(fruta == "Manzana"){
  console.log("IFELSE: Tu fruta es una manzana")

}else if(fruta == "Pera"){
  console.log("IFELSE: Tu fruta es una pera")

}
else if(fruta == "Mango"){
    console.log("IFELSE: Tu fruta es un mango")
}
else {
      console.log("IFELSE: Tu fruta es ",fruta)

}

//El switch suele usuarse como alternativa al IF ELSE
switch(fruta){

  case 'Manzana':
    console.log("SWITCH: Tu fruta es una manzana")
    break;
  
  case 'Pera':
    console.log("SWITCH: Tu fruta es una Pera")
    break;
  
  case 'Mango':
    console.log("SWITCH: Tu fruta es una Mango")
    break;
  
  default:
    console.log("SWITCH: Tu fruta es ",fruta)
    break
  
}

//
