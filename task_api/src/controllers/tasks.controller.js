const TaskService = require('../services/tasks.service');
const service = new TaskService();

// Controlador para crear una nueva tarea.
// Este método maneja las solicitudes POST a la API para crear una tarea.
const create = async (req, res) => {
    try {
        const response = await service.create(req.body);
        res.json({success: true, data: response});
    } catch (error) {
        res.status(500).send({success: false, message: error.message});
    }
}

// Controlador para obtener todas las tareas.
// Este método maneja las solicitudes GET a la API para obtener todas las tareas.
const get = async ( req, res ) => {
    try {
        const response = await service.find();
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

// Controlador para obtener una tarea específica por su ID.
// Este método maneja las solicitudes GET a la API para obtener una tarea específica.
const getById = async ( req, res ) => {
    try {
        const { id } = req.params;
        const response = await service.findOne(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

// Controlador para actualizar una tarea existente.
// Este método maneja las solicitudes PUT a la API para actualizar una tarea.
const update = async (req, res) => {
    try {
        const { id } = req.params;
        const body = req.body;
        const response = await service.update(id,body);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

// Controlador para eliminar una tarea existente.
// Este método maneja las solicitudes DELETE a la API para eliminar una tarea.
const _delete = async (req, res) => {
    try {
        const { id } = req.params; 
        const response = await service.delete(id);
        res.json(response);
    } catch (error) {
        res.status(500).send({ success: false, message: error.message });
    }
}

module.exports = { create, get, getById, update, _delete };