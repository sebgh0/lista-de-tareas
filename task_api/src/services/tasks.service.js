const { models } = require('../libs/sequelize');

class TaskService {

    // El constructor de la clase,
    constructor() {}

    // Método asincrónico para obtener todas las tareas de la base de datos.
    // Retorna una lista de todas las instancias del modelo 'Task'.
    async find() {
        const res = await models.Task.findAll(); // Realiza una consulta para obtener todas las tareas.
        return res; // Retorna el resultado de la consulta.
    }
    
    // Método asincrónico para obtener una tarea específica por su identificador (id).
    // Retorna la tarea correspondiente o 'null' si no se encuentra.
    async findOne(id) {
        const res = await models.Task.findByPk(id); // Busca una tarea por su clave primaria (id).
        return res;
    }

    // Método asincrónico para crear una nueva tarea en la base de datos.
    // Recibe un objeto 'data' con la información de la nueva tarea y la inserta en la base de datos.
    async create(data) {
        const res = await models.Task.create(data); // Crea una nueva tarea con los datos proporcionados.
        return res;
    }
  
    // Método asincrónico para actualizar una tarea existente en la base de datos.
    // Recibe el 'id' de la tarea a actualizar y un objeto 'data' con los nuevos valores.
    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
  
    // Método asincrónico para eliminar una tarea existente de la base de datos.
    // Recibe el 'id' de la tarea a eliminar.
    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return { deleted: true };
    }
}

module.exports = TaskService;