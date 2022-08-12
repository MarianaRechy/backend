
/***
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el paster
 */

 const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}


const leerReceta = (recetaALeer, callback) => {
    let error = null;
    setTimeout(() => {
        // Voy a leer la receta
        recetaALeer.recetaLeida = true;

        // Si la receta no fue leída, lanzar un error
        if (!recetaALeer.recetaLeida) {
            error = "No ha sido laída la receta";
        }
        callback(error, recetaALeer);
    }, 2000);
};


const conseguirIngredientes = (ingredientesAConseguir, callback) => {
    let error = null;
    setTimeout(() => {
      
        ingredientesAConseguir.ingredientesConseguidos = true;

        if (!ingredientesAConseguir.ingredientesConseguidos) {
            error = "No se han conseguido los ingredientes";
        }
        callback(error, ingredientesAConseguir);
    }, 2000);
};

const prepararMasa = (masaAPreparar, callback) => {
    let error = null;
    setTimeout(() => {
      
        masaAPreparar.masaPreparada = true;

        if (!masaAPreparar.masaPreparada) {
            error = "No se han conseguido los ingredientes";
        }
        callback(error, masaAPreparar);
    }, 2000);
};

const horenarPastel = (pastelAHornear, callback) => {
    let error = null;
    setTimeout(() => {
      
        pastelAHornear.pastelHorneado = true;

        if (!pastelAHornear.pastelHorneado) {
            error = "No se han conseguido los ingredientes";
        }
        callback(error, pastelAHornear);
    }, 2000);
};

const decorarPastel = (pastelADecorar, callback) => {
    let error = null;
    setTimeout(() => {
      
        pastelADecorar.pastelDecorado = true;

        if (!pastelADecorar.pastelDecorado) {
            error = "No se han conseguido los ingredientes";
        }
        callback(error, pastelADecorar);
    }, 2000);
};



leerReceta({...pastel},(err,recetaleida) =>{
    if(err){
        console.log ("err", err)
        return
    }
    
    //Aquí la receta ya está leída
    conseguirIngredientes({...recetaleida},(err,ingredientesAConseguir)=>{
        if(err){
            console.log ("err", err)
            return
        }
    //Aquí ya se consiguieron los ingredientes

        prepararMasa({...ingredientesAConseguir},(err,masaPreparada)=>{
        if(err){
            console.log ("err", err)
            return
        }

    //Aquí ya se preparó la masa
            horenarPastel({...masaPreparada},(err,pastelHorneado)=>{
                if(err){
                    console.log ("err", err)
                    return
                }
                console.log("pastelHorneado",pastelHorneado)
    //Aquí ya se Horneo el pastel
                    decorarPastel({...pastelHorneado},(err,pastelDecorado)=>{
                        if(err){
                            console.log ("err", err)
                            return
                        }
    //Aquí ya se decoró el pastel
                        console.log("Exito",pastelDecorado)

                    })

            })


    })

})
})
