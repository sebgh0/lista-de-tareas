import { Component, h, State } from '@stencil/core';

// Definición de la interfaz Task para tipar los datos de las tareas
interface Task {
  id: number;           // Identificador único de la tarea
  title: string;        // Título de la tarea
  description: string;  // Descripción de la tarea
  status: string;       // Estado de la tarea
}

@Component({
  tag: 'task-list',  // Etiqueta HTML personalizada para este componente
  styleUrl: 'task-list.css',  // Archivo CSS asociado
  shadow: true  // Usa Shadow DOM para encapsular estilos
})
export class TaskList {
  // Estado para almacenar la lista de tareas
  @State() tasks: Task[] = [];
  // Estado para controlar qué tarea está siendo editada (si hay alguna)
  @State() editTaskId: number | null = null;

  // Método del ciclo de vida: se ejecuta antes de que el componente se cargue
  async componentWillLoad() {
    await this.loadTasks(); // Carga las tareas desde la API
  }

  // Método para cargar las tareas desde la API
  async loadTasks() {
    const response = await fetch('http://localhost:3000/api/v1/tasks/');
    const tasks = await response.json();
    this.tasks = tasks;   // Actualiza el estado con las tareas cargadas
  }

  // Manejador para cuando se crea una nueva tarea
  handleTaskCreated = async () => {
    await this.loadTasks();  // Recarga las tareas
  };

  // Manejador para cuando se elimina una tarea
  handleTaskDeleted = async () => {
    await this.loadTasks();  // Recarga las tareas
  };

  // Manejador para cuando se actualiza una tarea
  handleTaskUpdated = async () => {
    this.editTaskId = null;  // Desactiva el modo de edición
    await this.loadTasks();  // Recarga las tareas
  };

  // Manejador para activar el modo de edición de una tarea
  handleEditTask = (taskId: number) => {
    this.editTaskId = taskId;
  };

  // Método de renderizado del componente
  render() {
    return (
      <div>
        {/* Componente para crear nuevas tareas */}
        <task-create onTaskCreated={this.handleTaskCreated}></task-create>
        <h2>Listado de Tareas</h2>
        <ul>
          {this.tasks.map(task => (
            <li key={task.id}>
              {/* Renderizado condicional: modo edición o visualización */}
              {task.id === this.editTaskId ? (
                // Componente de actualización de tarea
                <task-update
                  taskId={task.id}
                  taskTitle={task.title}
                  taskDescription={task.description}
                  taskStatus={task.status}
                  onTaskUpdated={this.handleTaskUpdated}
                ></task-update>
              ) : (
                // Visualización normal de la tarea
                <div>
                  <p>ID: {task.id}</p>
                  <h2>{task.title}</h2>
                  <p>{task.description}</p>
                  <p>Estado: <span>{task.status}</span></p>
                </div>
              )}
              {/* Componente para eliminar tarea */}
              <task-delete
                taskId={task.id}
                onTaskDeleted={this.handleTaskDeleted}
              ></task-delete>
              {/* Botón de edición (solo visible si la tarea no está en modo edición) */}
              {task.id !== this.editTaskId && (
                <button onClick={() => this.handleEditTask(task.id)}>Editar</button>
              )}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}