const { Task, TaskSchema } = require('./task.model');

// Función que configura los modelos de la base de datos.
// Recibe la instancia de Sequelize como parámetro.
function setupModels(sequelize){
    // Inicializamos el modelo 'Task' utilizando el esquema 'TaskSchema' y la configuración proporcionada.
    // Esto vincula el modelo con la tabla correspondiente en la base de datos.
    Task.init(TaskSchema, Task.config(sequelize));
}

module.exports = setupModels;