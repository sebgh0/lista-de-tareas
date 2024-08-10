import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'task-create',
  styleUrl: 'task-create.css',
  shadow: true
})
export class TaskCreate {
  // Definimos los estados del componente: 'title' y 'description'.
  @State() title: string = '';        // Estado para el título de la tarea.
  @State() description: string = '';  // Estado para la descripción de la tarea.
  
  // Definimos un evento 'taskCreated' que se emite cuando se crea una tarea.
  @Event() taskCreated: EventEmitter<void>;

  // Maneja los cambios en los campos de entrada.
  handleInputChange(event: Event) {
    // Extraemos el nombre y el valor del campo de entrada.
    const { name, value } = event.target as HTMLInputElement;
    // Actualizamos el estado correspondiente basado en el nombre del campo.
    this[name] = value;
  }

  // Maneja el envío del formulario.
  async handleSubmit(event: Event) {
    event.preventDefault();
    try {
      // Envía una solicitud POST para crear una nueva tarea.
      await fetch('http://localhost:3000/api/v1/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,              // Enviamos el título de la tarea.
          description: this.description,  // Enviamos la descripción de la tarea.
        }),
      });
      this.taskCreated.emit();
      // Reinicia el formulario después de enviar los datos.
      this.resetForm();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }

  // Reinicia los campos del formulario.
  resetForm() {
    this.title = '';
    this.description = '';
  }

  // Renderiza el formulario de creación de tareas.
  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <h1>Crear Tarea</h1>
        <label>Título:</label>
          <input
            type="text"
            name="title"
            value={this.title}
            onInput={(event) => this.handleInputChange(event)}
          />
        
        <label>Descripción:</label>
          <textarea
            name="description"
            value={this.description}
            onInput={(event) => this.handleInputChange(event)}
          ></textarea><br></br>
        
        <button type="submit">Agregar Tarea</button> {/* Botón para enviar el formulario. */}
      </form>
    );
  }
}
