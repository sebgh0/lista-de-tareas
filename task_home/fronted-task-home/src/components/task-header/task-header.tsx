import { Component, h } from '@stencil/core';

@Component({
    tag: 'task-header',
    styleUrl: 'task-header.css',
    shadow: true
  })

export class TaskHeader {
    render() {
      return (
        <header class="task-header">
          <h1 >Gestión de Tareas</h1>
        </header>
      );
    }
  }
