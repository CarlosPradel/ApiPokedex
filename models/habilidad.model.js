module.exports = (sequelize, Sequelize) => {
    const Habilidad = sequelize.define("habilidad", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Habilidad.associate = (models) => {
        Habilidad.belongsToMany(models.Pokemon, { through: 'Pokemon_Habilidades', foreignKey: 'habilidadId', as: 'pokemones' });
    };

    return Habilidad;
};
