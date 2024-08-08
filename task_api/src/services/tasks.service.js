const { models } = require('../libs/sequelize');

class TaskService {

    constructor() {}

    async find() {
        const res = await models.Task.findAll();
        return res;
    }

    async findOne(id) {
        const res = await models.Task.findByPk(id);
        return res;
    }

    async create(data) {
        const res = await models.Task.create(data);
        return res;
    }
  
    async update(id, data) {
        const model = await this.findOne(id);
        const res = await model.update(data);
        return res;
    }
  
    async delete(id) {
        const model = await this.findOne(id);
        await model.destroy();
        return { deleted: true };
    }
}

module.exports = TaskService;