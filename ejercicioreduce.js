

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

const nombres = [
    "Rodolfo", // 0
    "Araceli", // 1
    "Brisa", // 2
    "Eduardo",
    "Gio", // nopmbre corto
    "Jose", // nombre corto
    "Luis",
    "Marco",
    "Mariana", // nombre largo
    "Pete",
    "Sebastian",
    "Sofia"
  ]

  
const transformarNombres = (names) => {
    return names.reduce((accumulador, valorActual, indice) => {
      return {
        ...accumulador, // spread operator
        [indice]: {
          name: valorActual,
          length: valorActual.length,
          isGreaterThanFour: valorActual.length > 3
        }
      }
    }, {})
  }
  
  const nombresTransformados = transformarNombres(nombres)
  console.log("nombresTransformados", nombresTransformados)
  */