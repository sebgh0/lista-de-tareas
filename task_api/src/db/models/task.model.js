const { Model, DataTypes} = require('sequelize');

const TASK_TABLE = 'tasks';

class Task extends Model {
    static config(sequelize){
        return {
            sequelize,
            tableName: TASK_TABLE,
            modelName: 'Task',
            timestamps: true,
            createdAt: 'created_at',
            updatedAt: 'updated_at'
        }
    }

}

const TaskSchema = {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER
    },
    title:{
        type: DataTypes.STRING(255),
        allowNull: false
    },
    description:{
        type: DataTypes.TEXT,
        allowNull: true
    },
    status:{
        type: DataTypes.ENUM('pendiente', 'en_progreso', 'completada'),
        defaultValue: 'pendiente',
        allowNull: false
    },
    created_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updated_at:{
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
        onUpdate: DataTypes.NOW
    }  
}

module.exports = {Task, TaskSchema};