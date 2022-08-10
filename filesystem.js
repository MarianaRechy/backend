/*
const fs = require("fs")

console.log("fs write", fs.writeFile)

fs.writeFile("text1.txt", "Archivo creado desde node", "utf8", (err) => {
  // Logica negativa
  if(err) {
    console.log("err", err)
    return //Salte
  }

  // Si no, todo lo demas
  console.log("El archivo fue creado exito")
})
*/

const fs = require("fs")

console.log("fs read", fs.readFile)

fs.readFile('/mnt/c/Users/rechy/Desktop/BOOTCAMP/back/text1.txt',"utf8",(err, data) =>{
    if(err) {
        console.log("err", err)
        return //Salte
      }
    
      // Si no, todo lo demas
      console.log("El archivo se puede leer")

})

