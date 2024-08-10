const express = require('express');
const dotenv = require('dotenv');
const  cors = require('cors');

// Cargamos las variables de entorno desde un archivo '.env' usando 'dotenv'.
dotenv.config();
// Creamos una instancia de la aplicación Express.
const app = express();

// Definimos el puerto en el que la aplicación escuchará las solicitudes.
// Usamos la variable de entorno 'PORT' si está definida, de lo contrario, usamos el puerto 3000.
const port = process.env.PORT || 3000;

// Importamos el enrutador principal de la aplicación desde el archivo 'routes'.
const routerApi = require('./routes');

// Habilitamos CORS para permitir solicitudes desde otros dominios.
app.use(cors());
// Habilitamos la capacidad de la aplicación para interpretar cuerpos de solicitud en formato JSON.
app.use(express.json());

// Definimos una ruta raíz ('/') que responde con un mensaje simple.
app.get('/', (req,res) => {
    res.send('Bacckend con NodeJS - Express + CRUD API REST + MYSQL');
});

// Llamamos a la función 'routerApi' y le pasamos la instancia de la aplicación Express.
// Esto configura las rutas de la API en la aplicación.
routerApi(app);

// Iniciamos el servidor para que escuche en el puerto especificado.
// Cuando el servidor está listo, se imprime un mensaje en la consola indicando el puerto en uso.
app.listen(port, ()=>{
    console.log("Port ==>", port);
});