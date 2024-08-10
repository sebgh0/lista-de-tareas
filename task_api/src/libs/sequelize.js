const { Sequelize } = require('sequelize');

// Importamos la configuración de la base de datos desde el archivo 'config.js', que contiene las credenciales y otros parámetros.

const { config } = require('../config/config');
// Importamos la función 'setupModels', que define los modelos de datos y sus relaciones.
const setupModels = require('./../db/models');

const sequelize = new Sequelize(
    config.dbName,      // Nombre de la base de datos.
    config.dbUser,      // Nombre de usuario para la conexión.
    config.dbPassword,  // Contraseña para la conexión.
    {
        host: config.dbHost,
        dialect: 'mysql'
    }
);

sequelize.sync();
setupModels(sequelize);
 
module.exports = sequelize;