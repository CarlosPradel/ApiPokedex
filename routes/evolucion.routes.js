module.exports = app => {
    let router = require("express").Router();
    const evolucionController = require("../controllers/evolucion.controller.js");

    // Ruta para listar todas las evoluciones
    router.get('/evoluciones', evolucionController.listEvoluciones);

    // Ruta para crear una evolución de un Pokémon específico
    router.post('/pokemones/:pokemonId/evoluciones', evolucionController.createEvolucion);

    // Ruta para subir una imagen para una evolución
    router.post('/evoluciones/:id/upload', evolucionController.uploadImagenEvolucion);

    // Ruta para obtener evoluciones previas y siguientes de un Pokémon por su ID
    router.get('/evoluciones/pokemon/:pokemonId', evolucionController.getEvolucionByPokemonId);

    // Ruta para actualizar una evolución existente
    router.put('/pokemones/:pokemonId/evoluciones/:evolucionId', evolucionController.updateEvolucion);

    // Ruta para eliminar una evolución por ID
    router.delete('/evoluciones/:evolucionId', evolucionController.deleteEvolucion);

    // Ruta para obtener una evolución por su ID
    router.get('/evoluciones/:evolucionId', evolucionController.getEvolucionById);


    app.use('/api', router);
};
