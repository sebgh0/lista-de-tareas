import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'task-update',
  styleUrl: 'task-update.css',
  shadow: true
})
export class TaskUpdate {
  // Propiedades del componente que reciben los datos iniciales de la tarea a actualizar.
  @Prop() taskId: number;         // ID de la tarea a actualizar.
  @Prop() taskTitle: string;      // Título de la tarea.
  @Prop() taskDescription: string;// Descripción de la tarea.
  @Prop() taskStatus: string;     // Estado de la tarea.

  // Estados locales del componente para almacenar los valores actuales del formulario.
  @State() title: string;
  @State() description: string;
  @State() status: string;

  // Evento que se emite cuando la tarea ha sido actualizada.
  @Event() taskUpdated: EventEmitter;

  // Referencia al elemento <select> para el estado de la tarea.
  private statusSelect: HTMLSelectElement;

  // Método que se ejecuta antes de que el componente se cargue.
  // Inicializa los estados locales con los valores recibidos a través de las propiedades.
  componentWillLoad() {
    this.title = this.taskTitle;
    this.description = this.taskDescription;
    this.status = this.taskStatus || 'pendiente'; // Establece un valor predeterminado si no se proporciona el estado.
  }

  // Método que se ejecuta después de que el componente se haya cargado.
  // Actualiza el valor del <select> con el estado actual.
  componentDidLoad() {
    this.updateSelectValue();
  }

  // Maneja los cambios en los campos de entrada de texto.
  handleInputChange(event: Event) {
    const { name, value } = event.target as HTMLInputElement;
    this[name] = value; // Actualiza el estado correspondiente basado en el nombre del campo.
  }

  // Maneja los cambios en el campo de selección del estado.
  handleSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.status = select.value; // Actualiza el estado con el valor seleccionado.
  }

  // Actualiza el valor del campo de selección del estado.
  updateSelectValue() {
    if (this.statusSelect) {
      this.statusSelect.value = this.status;
    }
  }

  // Maneja el envío del formulario.
  async handleSubmit(event: Event) {
    event.preventDefault();
    try {
      // Envía una solicitud PUT a la API para actualizar la tarea con los datos proporcionados.
      await fetch(`http://localhost:3000/api/v1/tasks/${this.taskId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
          status: this.status,
        }),
      });
      // Emite el evento 'taskUpdated' para notificar que la tarea ha sido actualizada.
      this.taskUpdated.emit();
    } catch (err) {
      console.error('Failed to update task', err);
    }
  }

  // Método de renderizado del componente.
  render() {
    return (
      // Renderizamos un formulario con campos para título, descripción y estado de la tarea.
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.title} // Vinculamos el valor del campo con el estado del componente.
            onInput={(event) => this.handleInputChange(event)} // Maneja los cambios en el campo de entrada.
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={this.description} // Vinculamos el valor del campo con el estado del componente.
            onInput={(event) => this.handleInputChange(event)} // Maneja los cambios en el campo de entrada.
          ></textarea>
        </div>
        <div>
          <label htmlFor="status">Estado:</label>
          <select 
            class="content-select"
            id="status"
            name="status"
            onChange={(event) => this.handleSelectChange(event)} // Maneja los cambios en el campo de selección.
            ref={(el) => this.statusSelect = el as HTMLSelectElement} // Referencia al elemento <select>.
          >
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>
        <button type="submit">Actualizar Tarea</button>  {/* Botón para enviar el formulario. */}
      </form>
    );
  }
}