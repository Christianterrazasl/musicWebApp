const {sequelize} = require('../config/dbConfig.js');
const Genero = require('./generoModel.js');
const Artista = require('./artistaModel.js');
const Album = require('./albumModel.js');
const Cancion = require('./cancionModel.js');

const db = {
    sequelize,    
    Genero,
    Artista,
    Album,
    Cancion,
}

const syncDB = async ()=>{
    try{
        await sequelize.sync({alter:true});
        console.log("Base de datos sincronizada");
    }catch(err){
        console.error("Error al sincronizar la base de datos");
    }
}

syncDB();

module.exports = db;