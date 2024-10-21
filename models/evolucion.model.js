module.exports = (sequelize, DataTypes) => {
    const Evolucion = sequelize.define('evolucion', {
        pokemonId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            references: {
                model: 'pokemons',
                key: 'id'
            }
        },
        idEvPrevia: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'pokemons',
                key: 'id'
            }
        },
        idEvSiguiente: {
            type: DataTypes.INTEGER,
            allowNull: true,
            references: {
                model: 'pokemons',
                key: 'id'
            }
        },
        nivelEvolucion: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        imagen_url: DataTypes.STRING
    });

    Evolucion.associate = (models) => {
        Evolucion.belongsTo(models.pokemon, { foreignKey: 'pokemonId', as: 'pokemon' });
        Evolucion.belongsTo(models.pokemon, { foreignKey: 'idEvPrevia', as: 'pokemonOrigen' });
        Evolucion.belongsTo(models.pokemon, { foreignKey: 'idEvSiguiente', as: 'pokemonDestino' });
    };

    return Evolucion;
};
