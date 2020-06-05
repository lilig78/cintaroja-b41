
// ECMA 5
var persona = "LILI";

/* 
ECMA 6      variables  ( let y consts)

let personaLet =  [" ", 3];     se puede asignar a varios  esa variable
personaLet = "pablo";

const personaConst = "lili" ;   con esta ya no se puede asignar esa variable porque es constante

 */


//   condicion 

/* 
const obj = {};

const arry =  [];

arry.push("lili");

*/




 /* Tipos de datos para las variables


String   " "   ' '  ` `

Number    123456789

Boolean    true/false     nos permite tener solo dos de los valores 


el signo !)
!  +  =  -   sera negativo
!  -  =  +    sera positivo

  */




/* 

let islloviendo = false;

if (islloviendo) {
    alert("lleva sombrilla!");
} else if (!islloviendo)  {
    alert(" disfruta tu caminata");

} */




/* 
let isfun = true;

let islloviendo = true;



if (islloviendo) {
    alert("lleva sombrilla!");
} else  {
    alert(" disfruta tu caminata");

}
 */


// funcion que no regresa nada

function nombreFuncion(parametro){

}


// funcion que regresa algo
function nombreFuncion(parametro){
 return  "regresan algo"
}


// (`  ${ }`)  otra opcion para concatenar



let perro = {
    nombre: "ayudante de santa",
    color: "cafe",
    numPatas: 4,
    tieneDueño:  true,
    ladrar(aQuien, estaDormido){
        if(estaDormido){
            return false; //si esta dormido aca termina el codigo
        }
        if(aQuien) {
        //console.log(`guao, guao, ${aQuien}! sal de mi casa `);
        return true;
        
        }
        //console.log("guao, guao, quien eres? " );
        return false;
        

    },

};

// poner return al final es para que llegue ahi, es decir deja de ocurrir el codigo  o lo para  y ya no pida mas 

// para asignar una nueva propiedad a mi objeto

perro.numOjos = 2;


//  el  .   es para llamar propiedades, es decir Asignar un nuevo método a mi objeto

perro.respirar = function respirar () {

    console.log("sniff");
    
};

console.log(perro.numPatas);

console.log(perro.ladrar());

//console.log(perro.ladrar('gato'));



if (perro.ladrar("gato")){
    alert("ya no ladres") // pedazo de codigo, para que haga algo si el perro ladra

}
else {
    console.log("y el perro?");
    
}




/* 
metodo    es dentro del objeto   ejemplo una   console.log();

function  es afuera del objeto   ejemplo una     alert 
 */


