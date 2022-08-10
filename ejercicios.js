/**
 * Construir una funcion que separe los nombres largos de los cortos 
 * un nombre largo es aquel que supera los 4 caracteres de longitud.
 * 
 * 
 * Input: ["Rodolfo" ...]
 * Destructurando
 * Output: const [nombresCortos, nombresLargos] = funcion(nombres) // retornando esto
 

const nombres = [
    "Rodolfo",
    "Araceli",
    "Brisa",
    "Eduardo",
    "Gio",
    "Jose",
    "Luis",
    "Marco",
    "Mariana",
    "Pete",
    "Sebastian",
    "Sofia"
  ]

  /*
const separateNames = (names) => {
    let shortNames = []
    let largeNames = []

  names.forEach((cv) => {
    if(names.length < 4) { 
        shortNames.push(cv)
      }else {
        largeNames.push(cv)
  }
  return [shortNames, largeNames]

})
}

const [nombresCortos, nombresLargos] = separateNames(nombres) //En esta destructuración no importa el nombre,
//sino la pocision dentro del array que se define separada por comas.
console.log("nombres cortos", nombresCortos)
console.log("nombres largos", nombresLargos)




/**
 EJERCICIO PARA UTILIZAR PAQUETE COLORS
 * Crear una funcion que reciba un nombre del proceso.
 * Y en esa misma funcion imprimirla con color arcoiris.
 * Utilizar el paquete colors
 


let colors = require('colors');

const processName = (name) =>{
  return(name.rainbow); // rainbow
}

const final=processName(process.argv[2])
console.log(final)


*/
