const { Model, DataTypes} = require('sequelize');

const TASK_TABLE = 'tasks';

class Task extends Model {
    static config(sequelize){
        return {
            sequelize,                  // Instancia de Sequelize.
            tableName: TASK_TABLE,      // Nombre de la tabla en la base de datos.
            modelName: 'Task',          // Nombre del modelo.
            timestamps: true,           // Habilita la creación automática de campos 'created_at' y 'updated_at'.
            createdAt: 'created_at',    // Define el nombre del campo para la fecha de creación.
            updatedAt: 'updated_at'     // Define el nombre del campo para la fecha de actualización.
        }
    }

}

// Definimos el esquema de la tabla 'tasks' con los campos que tendrá en la base de datos.
const TaskSchema = {
    id: {
        allowNull: false,       // No permite valores nulos.
        autoIncrement: true,    // El valor se incrementa automáticamente.
        primaryKey: true,       // Define este campo como clave primaria.
        type: DataTypes.INTEGER // Tipo de dato entero.
    },
    title:{
        type: DataTypes.STRING(255),    // Tipo de dato string con una longitud máxima de 255 caracteres.
        allowNull: false                // No permite valores nulos.
    },
    description:{
        type: DataTypes.TEXT,   // Tipo de dato texto largo.
        allowNull: true         // Permite valores nulos.
    },
    status:{
        type: DataTypes.ENUM('pendiente', 'en_progreso', 'completada'), // Enumera los valores posibles para el campo.
        defaultValue: 'pendiente',      // Valor predeterminado es 'pendiente'.
        allowNull: false                // No permite valores nulos.
    },
    created_at:{
        type: DataTypes.DATE,           // Tipo de dato fecha.
        allowNull: false,               // No permite valores nulos.
        defaultValue: DataTypes.NOW     // El valor predeterminado es la fecha y hora actual.
    },
    updated_at:{
        type: DataTypes.DATE,           // Tipo de dato fecha.
        allowNull: false,               // No permite valores nulos.
        defaultValue: DataTypes.NOW,    // El valor predeterminado es la fecha y hora actual.
        onUpdate: DataTypes.NOW         // Actualiza el valor automáticamente cuando se modifica el registro.
    }  
}

module.exports = {Task, TaskSchema};