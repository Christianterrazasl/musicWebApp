const {sequelize} = require('../config/dbConfig');
const {DataTypes} = require('sequelize');
const Album = require('./albumModel.js');
const Cancion = sequelize.define('cancion', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type: DataTypes.STRING,
        allowNull: false
    },
    archivoUrl: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: null
    }, 
    idAlbum: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    timestamps: false,
    tableName: 'cancion'
});

Album.hasMany(Cancion, {
    foreignKey: 'idAlbum',
    sourceKey: 'id',
    onDelete: 'CASCADE'
});
Cancion.belongsTo(Album, {
    foreignKey: 'idAlbum',
    targetKey: 'id'
});
module.exports = Cancion;