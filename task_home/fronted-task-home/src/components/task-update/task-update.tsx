import { Component, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'task-update',
  styleUrl: 'task-update.css',
  shadow: true
})
export class TaskUpdate {
  @Prop() taskId: number;
  @Prop() taskTitle: string;
  @Prop() taskDescription: string;
  @Prop() taskStatus: string;

  @State() title: string;
  @State() description: string;
  @State() status: string;

  @Event() taskUpdated: EventEmitter;

  private statusSelect: HTMLSelectElement;

  componentWillLoad() {
    this.title = this.taskTitle;
    this.description = this.taskDescription;
    this.status = this.taskStatus || 'pendiente';
  }

  componentDidLoad() {
    this.updateSelectValue();
  }

  handleInputChange(event: Event) {
    const { name, value } = event.target as HTMLInputElement;
    this[name] = value;
  }

  handleSelectChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.status = select.value;
  }

  updateSelectValue() {
    if (this.statusSelect) {
      this.statusSelect.value = this.status;
    }
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    try {
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
      this.taskUpdated.emit();
    } catch (err) {
      console.error('Failed to update task', err);
    }
  }

  render() {
    return (
      <form onSubmit={(e) => this.handleSubmit(e)}>
        <div>
          <label htmlFor="title">Título:</label>
          <input
            type="text"
            id="title"
            name="title"
            value={this.title}
            onInput={(event) => this.handleInputChange(event)}
          />
        </div>
        <div>
          <label htmlFor="description">Descripción:</label>
          <textarea
            id="description"
            name="description"
            value={this.description}
            onInput={(event) => this.handleInputChange(event)}
          ></textarea>
        </div>
        <div>
          <label htmlFor="status">Estado:</label>
          <select 
            class="content-select"
            id="status"
            name="status"
            onChange={(event) => this.handleSelectChange(event)}
            ref={(el) => this.statusSelect = el as HTMLSelectElement}
          >
            <option value="pendiente">Pendiente</option>
            <option value="en_progreso">En Progreso</option>
            <option value="completada">Completada</option>
          </select>
        </div>
        <button type="submit">Actualizar Tarea</button>
      </form>
    );
  }
}