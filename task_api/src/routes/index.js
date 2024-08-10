const express = require('express'); 

// Importamos el enrutador de tareas desde el archivo 'tasks.routes', que contiene las rutas específicas para las tareas.
const tasksRouter = require('./tasks.routes');

function routerApi(app) {
  // Creamos un enrutador principal que agrupa las rutas de la API.
  const router = express.Router();
  // Definimos una ruta base '/api/v1' para todas las rutas del enrutador principal.
  // Todas las rutas definidas a continuación estarán precedidas por '/api/v1'.
  app.use('/api/v1', router); 
  // Asignamos el enrutador de tareas a la ruta '/tasks'.
  // Todas las rutas relacionadas con las tareas estarán precedidas por '/api/v1/tasks'.
  router.use('/tasks', tasksRouter);
}

module.exports = routerApi;