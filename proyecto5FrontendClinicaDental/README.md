# Proyecto 5 - Sistema de Gestión de Citas para Clínica Dental - Frontend
<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#tecnologías-utilizadas"> Tecnologías utilizadas</a></li>
    <li><a href="#estructura-del-proyecto">Estructura del proyecto</a></li>
    <li><a href="#funcionalidades-implementadas">Funcionalidades implementadas</a></li>
    <li><a href="#funcionalidades-en-desarrollo">Funcionalidades en desarrollo</a></li>
        <li><a href="#agradecimientos">Agradecimientos</a></li>
  </ol>
</details>

## Sobre el proyecto

Este proyecto se encuentra en desarrollo y tiene como objetivo crear una interfaz de usuario que se conecte con la API encargada de gestionar el modelo de negocio de una clínica dental. La parte frontal debe ser lo suficientemente versátil como para permitir el acceso de usuarios, dentistas y administradores, brindando la información adecuada para cada tipo de usuario.

## Tecnologías utilizadas

Las tecnologías utilizadas en el desarrollo de este proyecto son:

- React
- React Router
- React Bootstrap
- Redux (para el manejo del estado)
- Axios (para realizar peticiones HTTP)
- Vite

## Estructura del proyecto

El proyecto sigue la siguiente estructura de carpetas:

- src/common: Contiene los componentes reutilizables utilizados en diferentes partes de la aplicación.
- src/pages: Contiene las páginas principales de la aplicación, cada una correspondiente a una ruta específica.
- src/services: Contiene los servicios para realizar peticiones HTTP al backend.
- src/redux: Contiene la configuración de Redux, incluyendo acciones, reducers y el store.
- src/App.jsx: Contiene la configuración de las rutas utilizando React Router Dom.
- src/Main.jsx: Punto de entrada de la aplicación.

## Funcionalidades implementadas
Las siguientes funcionalidades han sido implementadas hasta el momento:

- Registro de usuarios.
- Inicio de sesión de usuarios.
- Perfil de usuario.
- Panel de búsqueda, creación y modificación de citas.
- Vista de citas propias para clientes.

## Funcionalidades en desarrollo
- Vista de todas las citas existentes para dentistas.
- Vista de todos los usuarios registrados para administradores.
- Logout


## Agradecimientos
Agradezco a mis compañeros y profesores por el tiempo dedicado a este proyecto.