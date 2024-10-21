module.exports = app => {
    let router = require("express").Router();
    const pokemonController = require("../controllers/pokemon.controller.js");

    // Ruta para listar los Pokémon con paginación
    router.get('/pokemones', pokemonController.listPokemones);

    // Ruta para buscar Pokémon por nombre, número de Pokédex o tipo
    router.get('/pokemones/search', pokemonController.searchPokemones);

    // Ruta para obtener un Pokémon por su ID
    router.get('/pokemones/:id', pokemonController.getPokemonById);

    // Ruta para crear o actualizar un Pokémon (con validaciones y subida de imagen)
    router.post('/pokemones', pokemonController.createOrUpdatePokemon);
    router.put('/pokemones/:id', pokemonController.createOrUpdatePokemon);

    // Ruta para eliminar un Pokémon por ID
    router.delete('/pokemones/:id', pokemonController.deletePokemon);

    // Ruta para subir una imagen para un Pokémon
    router.post('/pokemones/:id/upload', pokemonController.uploadImagen);

    // Ruta para obtener la línea evolutiva de un Pokémon
    router.get('/pokemones/:id/evoluciones', pokemonController.getLineaEvolutiva);

    // Ruta para obtener las estadísticas base de un Pokémon a nivel 100
    router.get('/pokemones/:id/stats', pokemonController.getStatsBase);

    app.use('/api', router);
};
