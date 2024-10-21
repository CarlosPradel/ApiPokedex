module.exports = app => {
    let router = require("express").Router();
    const tipoController = require("../controllers/tipo.controller.js");

    // Ruta para listar todos los tipos
    router.get('/tipos', tipoController.listTipos);

    // Ruta para crear un nuevo tipo
    router.post('/tipos', tipoController.createTipo);

    app.put('/api/tipos/:id', tipoController.updateTipo);

    // Obtener un tipo por su ID
    app.get('/api/tipos/:id', tipoController.getTipoById);

    app.delete('/api/tipos/:id', tipoController.deleteTipo);

    // Ruta para filtrar Pokémon por tipo
    router.get('/tipos/:tipo/pokemones', tipoController.getPokemonesByTipo);

    app.use('/api', router);
};
