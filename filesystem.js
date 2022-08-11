/*

//!CRUD CON NODE

//Para crear contenido

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


//Para leer contenido

const fs = require("fs")

console.log("fs read", fs.readFile)

fs.readFile('/mnt/c/Users/rechy/Desktop/BOOTCAMP/back/text1.txt',"utf8",(err, data) =>{
    if(err) {
        console.log("err", err)
        return //Salte
      }else {
        console.log("data", data)
      }
    
      // Si no, todo lo demas
      console.log("El archivo se puede leer")

})


//Para editar contenido

const fs = require("fs")

fs.appendFile("text1.txt", "\nEsto es nuevo","utf8",(err) => {
  if(err) {
    console.log("err", err)
    return
  }

  console.log("Tu archivo fue actualizado con exito")
})



//Para eliminar contenido

const fs = require("fs")

fs.unlink("test.txt", (err) => {
  if (err) { 
  console.log("error", err);
  return
  }
  console.log("Tu archivo fue eliminado con éxito")
});

*/













