const {sequelize} = require('../config/dbConfig');
const {DataTypes} = require('sequelize');
const Genero = require('./generoModel.js');

const Artista = sequelize.define('artista', {
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
    idGenero: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'artista'
});

module.exports = Artista;
