const {sequelize} = require('../config/dbConfig');
const {DataTypes} = require('sequelize');

const Genero = sequelize.define('genero', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    }, 
    imagenUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    },
}, {
    timestamps: false,
    tableName: 'genero'
});

module.exports = Genero;