const {sequelize} = require('../config/dbConfig');
const {DataTypes} = require('sequelize');
const Artista = require('./artistaModel.js');

const Album = sequelize.define('album', {
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
    idArtista: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'album'
});


module.exports = Album;