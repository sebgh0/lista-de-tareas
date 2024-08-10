import { Component, h } from '@stencil/core';

@Component({
    tag: 'task-header',
    styleUrl: 'task-header.css',
    shadow: true
  })

export class TaskHeader {
    // Método de renderizado del componente.
    render() {
      return (
        // Renderizamos un elemento <header> con la clase 'task-header'.
        <header class="task-header">
          <h1 >Gestión de Tareas</h1>
        </header>
      );
    }
  }
