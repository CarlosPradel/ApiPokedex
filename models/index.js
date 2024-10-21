const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
  dbConfig.DB,
  dbConfig.USER,
  dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,
  }
);

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Modelos
db.pokemon = require("./pokemon.model")(sequelize, Sequelize);
db.tipo = require("./tipo.model")(sequelize, Sequelize);
db.habilidad = require("./habilidad.model")(sequelize, Sequelize);
db.evolucion = require("./evolucion.model")(sequelize, Sequelize);

// Relaciones entre Pokémon y Tipos (Muchos a Muchos)
db.pokemon.belongsToMany(db.tipo, { through: "Pokemon_Tipos", foreignKey: "pokemonId", as: "tipos" });
db.tipo.belongsToMany(db.pokemon, { through: "Pokemon_Tipos", foreignKey: "tipoId", as: "pokemones" });

// Relaciones entre Pokémon y Habilidades (Muchos a Muchos)
db.pokemon.belongsToMany(db.habilidad, { through: "Pokemon_Habilidades", foreignKey: "pokemonId", as: "habilidades" });
db.habilidad.belongsToMany(db.pokemon, { through: "Pokemon_Habilidades", foreignKey: "habilidadId", as: "pokemones" });

// Relaciones entre Pokémon y Evoluciones (Uno a Muchos)
db.pokemon.hasMany(db.evolucion, { as: "evoluciones", foreignKey: "pokemonId" });
db.evolucion.belongsTo(db.pokemon, { as: "pokemon", foreignKey: "pokemonId" });

// Relaciones entre Evoluciones previas y siguientes
db.evolucion.belongsTo(db.pokemon, { as: 'pokemonOrigen', foreignKey: 'idEvPrevia' });
db.evolucion.belongsTo(db.pokemon, { as: 'pokemonDestino', foreignKey: 'idEvSiguiente' });

// Sincronización con la base de datos
db.sequelize.sync({ alter: true })
  .then(() => {
    console.log("Base de datos sincronizada.");
  })
  .catch(err => {
    console.error("Error al sincronizar la base de datos: ", err);
  });

module.exports = db;
