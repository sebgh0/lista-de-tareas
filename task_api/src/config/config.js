require('dotenv').config();

const config = {
    // Entorno de ejecución de la aplicación ('dev' por defecto si no se especifica).
    env: process.env.NODE_ENV || 'dev',
    // Puerto en el que se ejecutará la aplicación (3000 por defecto si no se especifica).
    port: process.env.PORT || 3000,
    // Credenciales y detalles de la conexión a la base de datos, obtenidos de las variables de entorno.
    dbUser: process.env.DB_USER,            // Usuario de la base de datos.
    dbPassword: process.env.DB_PASSWORD,    // Contraseña del usuario de la base de datos.
    dbHost: process.env.DB_HOST,            // Host donde se encuentra la base de datos.
    dbName: process.env.DB_NAME,            // Nombre de la base de datos.
    dbPort: process.env.DB_PORT,            // Puerto de la base de datos.

}

module.exports = { config };