console.log("hola mundo")
console.log(process.argv)


// 1 - Funcion que recoiba de parametro un nombre del
// process.argv, y si existe que me imprima “Bienvenido y el nombre”
// SI NO, imprimir “Afuera de aqui”


/*
// Esta es mi solución
let welcome = (name)=>{
    if(name != undefined){
        console.log(`Bienvenido ${name}`)}
    else console.log("Afuera de aquí")

    return 
    }

result= welcome(process.argv[2])
console.log(result);
*/

// Esta es la solución optima
const nombre = process.argv[2]

const printName = (nombre) => {
  if(nombre) { 
    console.log(`Bienvenido ${nombre}`)
    return // Salte
  }
  console.log("Afuera de aqui")
}

printName(nombre)