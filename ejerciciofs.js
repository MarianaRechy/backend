/*
Ejercicio 2
 * Con callbacks
 * 1 - Leer los archivos de un directorio y eliminarlos.
 * - Tienen que validar que tenga archivos, si no imprimir un console.log de no hay archivos
 */


const fs = require("fs")

const files = () => {

    fs.readdir("TEST", "utf-8", (err, file) => {
        if (err) {
            console.log("err", err)
        } 
        console.log(file)
         if (file.length !== 0) {

            file.forEach((cv) => {
                fs.unlink(`TEST/${cv}`, (err) => {
            if (err) {
                    console.log("error", err);
                    return
                }
                console.log("Tu archivo fue eliminado con éxito")
            });
            })
        }
    })
}

files()





