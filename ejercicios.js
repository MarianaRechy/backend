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

  /*
  Hacer una funcion que se llame transformarNombres reciba como parametro un array de nombres y regresar un objeto de objetos que contenga el nombre, el length del nombre y si es mayor a 4 o no
  Input: ["Ale", "Mariana", "Adrian"]...
  Output:
  {
      0: {
          name: "Ale", -> string
          length: 3, -> numero
          isGreaterThanFour: true -> booleano
      }
  }

  
}

printName(nombre)


const transformarNombres = (names) => {

    const objet = {}

    names.reduce ((acc,cv) => {

        let objetName = {acc,}

         objetName.push(cv.parse)
         objetName.push(cv.length.parse) 
         if( typeof cv > 4 ){
            objetName.push(cv.parse)
         }
        objet.push(objetName)
    });


    return objet;
  }

  console.log (transformarNombres(nombres))

  //Al tratar con un objeto se accede a la información con [] o . no con push
  // Spread operator


/**
 * Crear una funcion que reciba un nombre del proceso.
 * Y en esa misma funcion imprimirla con color arcoiris.
 * Utilizar el paquete colors
 */
let colors = require('colors');

const processName = (name) =>{
  console.log('name'.rainbow); // rainbow
}

processName(process.argv[2])

