# lista-de-tareas

### Descripción

Este proyecto es una aplicación de gestión de tareas desarrollada con StencilJS y TypeScript. La aplicación permite a los usuarios crear, actualizar y eliminar tareas. Es un ejemplo básico de una aplicación CRUD (Crear, Leer, Actualizar, Eliminar) utilizando componentes web.

## Tecnologías
### Backend:

- Node.js
- Express
- Sequelize (ORM para MySQL)

### Frontend:

- Stencil.js (para componentes web)
- HTML/CSS

## Estructura del Proyecto

### Backend
- **`src/services/tasks.service.js`**: Implementa la lógica de negocio para las tareas, incluyendo métodos para crear, leer, actualizar y eliminar tareas.
- **`src/routes/tasks.routes.js`**: Define las rutas de la API REST para las tareas.
- **`src/routes/index.js`**: Configura las rutas de la API.
- **`src/db/config.js`**: Configura la conexión a la base de datos utilizando Sequelize.
- **`src/db/models/task.model.js`**: Define el modelo de datos para las tareas.
- **`src/db/models/index.js`**: Configura los modelos de Sequelize.
- **`src/index.js`**: Configura y arranca el servidor Express.

### Frontend
- **`task-create.tsx`**: Componente para crear nuevas tareas.
- **`task-list.tsx`**: Componente que muestra la lista de tareas y permite editarlas o eliminarlas.
- **`task-update.tsx`**: Componente para actualizar una tarea existente.
- **`task-delete.tsx`**: Componente para eliminar tareas.
- **`task-header.tsx`**: Componente del encabezado de la aplicación
- **`index.html`**: Página principal que incluye los componentes de Stencil y carga los archivos JavaScript necesarios.

## Uso

### Crear una Tarea

1. Completa los campos de título y descripción en el formulario de creación de tareas.
2. Haz clic en el botón "Agregar Tarea".
3. La nueva tarea aparecerá en la lista de tareas.

### Actualizar una Tarea

1. Haz clic en el botón "Editar" junto a la tarea que deseas modificar.
2. Edita los campos necesarios en el formulario de actualización.
3. Haz clic en "Actualizar Tarea" para guardar los cambios.

### Eliminar una Tarea

1. Haz clic en el botón de eliminar junto a la tarea que deseas eliminar.
2. La tarea se eliminará de la lista.

## Capturas

![alt text](/screens/image.png) 

![alt text](/screens/image2.png)


## Instalación

Sigue estos pasos para configurar y ejecutar el proyecto en tu entorno local:

1. **Clonar el repositorio**:
    ```bash
    git clone https://github.com/sebgh0/lista-de-tareas.git
    ```

2. **Navegar al directorio del Proyecto**:
    Importa el script `.sql`  


3. **Navega al directorio del backend**:
    ```bash
    cd task_api/
    ```

4. **Configurar las variables de entorno**:
Modifica en archivo .env y edita los resultados con tu configuración de MySQL

5. **Ejecutar la API**:
    ```bash
    
    npm run dev
    ```

6. **Navegar al directorio de la interfaz**:
    ```bash
    cd task_home/fronted-task-home/
    ```

7. **Instalar dependencias**:
    ```bash
    npm install
    ```

8. **Ejecutar la aplicación**:
    ```bash
    npm start
    ```


