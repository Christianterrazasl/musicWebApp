const {sequelize} = require('../config/dbConfig.js');
const Genero = require('./generoModel.js');
const Artista = require('./artistaModel.js');
const Album = require('./albumModel.js');
const Cancion = require('./cancionModel.js');

// Configurar asociaciones
Genero.hasMany(Artista, {
    foreignKey: 'idGenero',
    onDelete: 'CASCADE',
});
Artista.belongsTo(Genero, {
    foreignKey: 'idGenero',
});

Artista.hasMany(Album, {
    foreignKey: 'idArtista',
    onDelete: 'CASCADE',
});
Album.belongsTo(Artista, {
    foreignKey: 'idArtista',
});

Album.hasMany(Cancion, {
    foreignKey: 'idAlbum',
    onDelete: 'CASCADE',
});
Cancion.belongsTo(Album, {
    foreignKey: 'idAlbum',
});


const syncDB = async ()=>{
    try{
        await sequelize.sync({alter:true});
        console.log("Base de datos sincronizada");
    }catch(err){
        console.error("Error al sincronizar la base de datos");
    }
}

syncDB();

module.exports = {
    sequelize,
    Genero,
    Artista,
    Album,
    Cancion,
};