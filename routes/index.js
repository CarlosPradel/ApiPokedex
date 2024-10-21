module.exports = app => {
    require("./pokemon.routes")(app);
    require("./tipo.routes")(app);
    require("./habilidad.routes")(app);
    require("./evolucion.routes")(app);
};
