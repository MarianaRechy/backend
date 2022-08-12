
/*

DESTRUCTURACION

De objetos{}
Se accede con [] o .
Importa el nombre
Ejemplo



De arrays []
Se accede con .push
Importa la pocision dentro del array (que define separada con comas)
Ejemplo
let mentors = ["Alfred", "Ferdi"]
let mentors2 = [...mentors]

mentors2.push("Alejandra")


METODOS DE OBJETOS

.map((valos,indice,array))
.forEach((valor,indice,array))
.reduce  1 -> callback -> accumulador, currentValue, indice, arreglo
          2 -> valor inicial del accumulador



  // Spread operator

// spread operator
// Acceder a las variables
// 1 - Por referencia
// 2 - Por valor

const a = 10
let b = a

// Con cualquier cosa, numero, string o booleano

b = b + 5
// console.log("a", a)
// console.log("b", b)

//con objetos se accede por referencia 


Reduce
1 callback --> acc,cv,indice,array
2 valor inicial del acumulador

Asincronidad --> cuando varias cosas se estan haciendo al mismo tiempo y hace la mas sencilla primero
Se identifica con Async EN FILESYSTEM
sincronidad -->Que se esta haciendo una cosa despues de la otra
Se identifica en los archivos como SYNC EN FILESYSTEM

Recursividad
Tenemos que decirle cuando se tiene que detener
Funciones generator
Hacer contadores




/**
 //!Asyn Await
 * Va a cambiar la forma de ejecutar la forma de ejecutarse nuestras promesas
 * Async Await
 * 
 * Async -> Cuando vamos a hacer una funcion asyncrona
 * Await -> Va a ESPERAR una promesas. -> 5 segundos
 * 
 * Reglas:
 * Async va en la declaracion de la funcion, se esta declarando como asincrona
 * Await va dentro de esa funcion que se declaro como asincrona
 * 
 * No puedo usar await sin el async.
 * 
 * Sintaxis:
 */


// Sintaxis
// Arrow function

// const funcionAsincrona = async () => {

//   // Todo lo de adentro va a ser asincrono
//   // Que se puede usar Await aqui adentro
//   // Que el retorno de esta funcion va a ser una promesa
// }

// // Funcion normal
// async function asincronidadFuncion() {
//   // Todo lo de adentro va a ser asincrono
//   // Que se puede usar Await aqui adentro
//   // Que el retorno de esta funcion va a ser una promesa
// }
