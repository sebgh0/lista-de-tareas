const express = require('express');
const router = express.Router(); 
const taskController = require('../controllers/tasks.controller');

// Ruta para obtener todas las tareas.
router
    .get('/', taskController.get )
    // Ruta para obtener una tarea específica por su ID.
    // Cuando se recibe una solicitud GET en la ruta '/:id', se ejecuta el método 'getById' del controlador.
    // ':id' es un parámetro de ruta que representa el ID de la tarea.
    .get('/:id', taskController.getById )
    // Ruta para crear una nueva tarea.
    // Cuando se recibe una solicitud POST en la ruta raíz ('/'), se ejecuta el método 'create' del controlador.
    .post('/', taskController.create )
    // Ruta para actualizar una tarea existente por su ID.
    // Cuando se recibe una solicitud PUT en la ruta '/:id', se ejecuta el método 'update' del controlador.
    .put('/:id', taskController.update )
    // Ruta para eliminar una tarea existente por su ID.
    // Cuando se recibe una solicitud DELETE en la ruta '/:id', se ejecuta el método '_delete' del controlador.
    .delete('/:id', taskController._delete );

// Exportamos el enrutador para que pueda ser utilizado en otras partes de la aplicación, como por ejemplo en la configuración de las rutas principales.
module.exports = router;