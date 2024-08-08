import { Component, h, Prop, Event, EventEmitter, State } from '@stencil/core';

@Component({
    tag: 'task-delete',
    styleUrl: 'task-delete.css',
    shadow: true
  })
export class TaskDelete {
  @Prop() taskId: number;
  @Event() taskDeleted: EventEmitter<void>;
  @State() isLoading: boolean = false;

  // Método handleDeleteTask, que se encarga de eliminar una tarea
  async handleDeleteTask() {
    this.isLoading = true;
    try {
      // Realiza una petición DELETE a la API para eliminar la tarea
      await fetch(`http://localhost:3000/api/v1/tasks/${this.taskId}`, {
        method: 'DELETE',
      });
      this.taskDeleted.emit();
    } catch (error) {
      // Si ocurre un error, lo registra en la consola
      console.error('Error deleting task:', error);
    } finally {
      this.isLoading = false;
    }
  }

  render() {
    return (
      <button onClick={() => this.handleDeleteTask()} disabled={this.isLoading}>
        Eliminar
      </button>
    );
  }
}
