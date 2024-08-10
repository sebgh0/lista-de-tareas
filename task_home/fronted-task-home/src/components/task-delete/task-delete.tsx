import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
    tag: 'task-delete',
    styleUrl: 'task-delete.css',
    shadow: true
  })
export class TaskDelete {
  // Definimos una propiedad del componente llamada 'taskId' que recibirá el ID de la tarea a eliminar.
  @Prop() taskId: number;
  // Definimos un evento llamado 'taskDeleted' que se emitirá cuando se haya eliminado una tarea.
  @Event() taskDeleted: EventEmitter<void>;
  // Definimos un estado local 'isLoading' para manejar el estado de carga del botón.
  @State() isLoading: boolean = false;

  // Método handleDeleteTask, que se encarga de eliminar una tarea
  async handleDeleteTask() {
    this.isLoading = true;
    try {
      // Realiza una petición DELETE a la API para eliminar la tarea
      await fetch(`http://localhost:3000/api/v1/tasks/${this.taskId}`, {
        method: 'DELETE',
      });
      // Emitimos el evento 'taskDeleted' para notificar que la tarea ha sido eliminada.
      this.taskDeleted.emit();
    } catch (error) {
      // Si ocurre un error, lo registra en la consola
      console.error('Error deleting task:', error);
    } finally {
      this.isLoading = false;
    }
  }

  // Método de renderizado del componente.
  render() {
    return (
      // Renderizamos un botón que, al hacer clic, llama al método 'handleDeleteTask'.
      <button onClick={() => this.handleDeleteTask()} disabled={this.isLoading}>
        Eliminar
      </button>
    );
  }
}
