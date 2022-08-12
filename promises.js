/*
 * Pastel
 * 1 - Leer la receta
 * 2 - Conseguir los ingredientes
 * 3 - Preparacion de la masa
 * 4 - Hornear el pastel
 * 5 - Decorar el pastel
*/
 const pastel = {
    recetaLeida : false,
    ingredientesConseguidos: false,
    masaPreparada: false,
    pastelHorneado: false,
    pastelDecorado: false
}


 const leerReceta = (recetaALeer) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            recetaALeer.recetaLeida = true;

            if (!recetaALeer.recetaLeida) {
                reject("No se pudo leer la receta");
            }
            resolve(recetaALeer);
        }, 1000);
    });
};

const conseguirIngredientes = (ingredientesAConseguir) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            ingredientesAConseguir.ingredientesConseguidos = true;

            if (!ingredientesAConseguir.ingredientesConseguidos) {
                reject("No se consiguieron los ingredientes");
            }
            resolve(ingredientesAConseguir);
        }, 1000);
    });
};

const prepararMasa = (masaAPreparar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            masaAPreparar.masaPreparada = true;

            if (!masaAPreparar.masaPreparada) {
                reject("No se preparó la masa");
            }
            resolve(masaAPreparar);
        }, 1000);
    });
};

const horenarPastel = (pastelAHornear) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelAHornear.pastelHorneado = true;

            if (!pastelAHornear.pastelHorneado) {
                reject("No se pudo hornear el pastel");
            }

            resolve(pastelAHornear);
        }, 1000);
    });
};

const decorarPastel = (pastelADecorar) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            pastelADecorar.pastelDecorado = true;

            if (!pastelADecorar.pastelDecorado) {
                reject("No se pudo decorar el pastel");
            }

            resolve(pastelADecorar);
        }, 1000);
    });
};

//EJECUCION

const pastelListo = leerReceta({ ...pastel});
pastelListo
    .then((pastelListo) => {
        console.log(pastelListo);

        // Conseguir iingredientes
        conseguirIngredientes({ ...pastelListo})
            .then((IngredientesListos) => {
                console.log("IngredientesListos", IngredientesListos);

                prepararMasa({ ...IngredientesListos})
                    .then((masaPreparada) => {
                        console.log("masaPreparada", masaPreparada);

                        horenarPastel({ ...masaPreparada})
                            .then((pastelHorneado) => {
                                console.log("pasetlHorenado", pastelHorneado);

                                decorarPastel({...pastelHorneado})
                                    .then((pastelDecorado) => {
                                        console.log("Exito", pastelDecorado);
                                    })
                                    .catch((error) =>{
                                        console.log("error", error)
                                    });
                            })
                            .catch((error) => {
                                console.log("error", error);
                            });
                    })
                    .catch((error) => {
                        console.log("Error", error);
                    });
            })
            .catch((error) => {
                console.log("error", error);
            });
    })
    .catch((error) => {
        console.log("error", error);
    });
