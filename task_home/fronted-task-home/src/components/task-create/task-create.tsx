import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'task-create',
  styleUrl: 'task-create.css',
  shadow: true
})
export class TaskCreate {
  @State() title: string = '';
  @State() description: string = '';
  @Event() taskCreated: EventEmitter<void>;

  handleInputChange(event: Event) {
    const { name, value } = event.target as HTMLInputElement;
    this[name] = value;
  }

  async handleSubmit(event: Event) {
    event.preventDefault();
    try {
      await fetch('http://localhost:3000/api/v1/tasks/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title: this.title,
          description: this.description,
        }),
      });
      this.taskCreated.emit();
      this.resetForm();
    } catch (error) {
      console.error('Error creating task:', error);
    }
  }

  resetForm() {
    this.title = '';
    this.description = '';
  }

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
        
        <button type="submit">Agregar Tarea</button>
      </form>
    );
  }
}
