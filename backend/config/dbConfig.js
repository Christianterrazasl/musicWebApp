const {Sequelize} = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false
    }    
)

async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log("Bd conectada");
    }catch(err){
        console.error("Error al conectar db: ", err);
    }
} 

testConnection()

module.exports={Sequelize, sequelize}