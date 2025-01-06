# Proyecto Prepo2024

Este proyecto fue generado con Angular CLI versión 18.2.0.

# Arquitecura
Se usa una aquitectura basada en screaming arquitecture para la estructura de carpetas

# Prerrequisitos
Prerrequisitos
Asegúrate de tener instalados los siguientes componentes:

Node.js: Se recomienda gestionar las versiones con nvm.
Angular CLI: Asegúrate de instalar la versión correcta.
Nota: Consulta la documentación oficial de Angular para más detalles.

# Configuración inicial
- Clonar el repositorio: git clone https://github.com/fr0ste/prepo-2024.git
- Instalar dependencias: npm install o yarn install
- Iniciar servidor de desarrollo: ng serve y navegar a http://localhost:4200/

# Pasos para realizar una tarea (issue)
- Crear una rama: git checkout -b feature/tarea-123
- Realizar cambios: Hacer los cambios necesarios en el código
- Commit: Realizar un commit con un mensaje de commit claro y conciso utilizando la convención de commits de Conventional Commits:
  - feat: Agregar función de búsqueda
  - fix: Corregir error de renderizado
  - docs: Actualizar documentación
- Push: git push origin feature/tarea-123
- Crear pull request: Crear un pull request desde la rama feature/tarea-123 hacia la rama dev
- Revisar y aprobar: Asignar a un miembro y notifica para revisión.
- Merge: git merge feature/tarea-123 y eliminar la rama feature/tarea-123

# Conventional Commits
Utilizar la convención de commits de Conventional Commits para mantener un registro claro y conciso de los cambios realizados.
Utilizar los siguientes tipos de commits:
- feat: Agregar una nueva función o característica
- fix: Corregir un error o problema
- docs: Actualizar la documentación
- style: Cambios en la forma o estilo del código
- refactor: Refactorizar el código
- perf: Mejorar el rendimiento del código
- test: Agregar o corregir pruebas
- chore: Realizar tareas administrativas o de mantenimiento