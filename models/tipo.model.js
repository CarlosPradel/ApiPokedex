module.exports = (sequelize, Sequelize) => {
    const Tipo = sequelize.define("tipo", {
        nombre: {
            type: Sequelize.STRING,
            allowNull: false
        }
    });

    Tipo.associate = (models) => {
        Tipo.belongsToMany(models.Pokemon, { through: 'Pokemon_Tipos', foreignKey: 'tipoId', as: 'pokemones' });
    };

    return Tipo;
};
