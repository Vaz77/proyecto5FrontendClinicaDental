# Proyecto 5 - Sistema de Gestión de Citas para Clínica Dental - Frontend
<details>
  <summary>Contenido 📝</summary>
  <ol>
    <li><a href="#sobre-el-proyecto">Sobre el proyecto</a></li>
    <li><a href="#tecnologías-utilizadas"> Tecnologías utilizadas</a></li>
    <li><a href="#estructura-del-proyecto">Estructura del proyecto</a></li>
    <li><a href="#vistas">Vistas</a></li>
    <li><a href="#funcionalidades-implementadas">Funcionalidades implementadas</a></li>
    <li><a href="#funcionalidades-en-desarrollo">Funcionalidades en desarrollo</a></li>
    <li><a href="#agradecimientos">Agradecimientos</a></li>
    <li><a href="#instalacion-en-local">Instalación en local</a></li>
  </ol>
</details>

## Sobre el proyecto

Este proyecto se encuentra en desarrollo y tiene como objetivo crear una interfaz de usuario que se conecte con la API encargada de gestionar el modelo de negocio de una clínica dental. La parte frontal debe ser lo suficientemente versátil como para permitir el acceso de usuarios, dentistas y administradores, brindando la información adecuada para cada tipo de usuario.

## Tecnologías utilizadas

<div align="center">

<a href="https://www.reactjs.com/">
    <img src= "https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB"/>
</a>
 <a href="https://redux.js.org/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808568-89a147ae-a047-4b1c-8065-9de44bd9bcb2.svg"/>
</a>
<a href="https://nodejs.org/en">
    <img src= "https://user-images.githubusercontent.com/121863208/227808607-7170e528-cc5d-4a04-a7ec-edfad90e2a1e.svg"/>
</a>
<a href="https://react-bootstrap.github.io/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808594-021a15ab-7e14-454b-b977-4a5ade8287ed.svg"/>
</a>
<a href="https://developer.mozilla.org/es/docs/Web/CSS">
    <img src= "https://user-images.githubusercontent.com/121863208/227808642-a8dcfecb-74b9-4796-8b2b-7bfe5cf1b4ba.svg"/>
</a>
<a href="https://nextjs.org/">
    <img src= "https://user-images.githubusercontent.com/121863208/227808660-c8b59b3d-34bd-446f-83e1-8157f5a09b98.svg"/>
</a>
</div>

## Estructura del proyecto

El proyecto sigue la siguiente estructura de carpetas:

- src/common: Contiene los componentes reutilizables utilizados en diferentes partes de la aplicación.
- src/pages: Contiene las páginas principales de la aplicación, cada una correspondiente a una ruta específica.
- src/services: Contiene los servicios para realizar peticiones HTTP al backend.
- src/redux: Contiene la configuración de Redux, incluyendo acciones, reducers y el store.
- src/App.jsx: Contiene la configuración de las rutas utilizando React Router Dom.
- src/Main.jsx: Punto de entrada de la aplicación.

## Vistas

A continuación se pueden ver algunas de las vistas:

### Home
<img src="/src/assets/homePage.png">

<img src="/src/assets/vistaPrincipalBienvenida.png">  

<img src="/src/assets/vistaPrincipalTratamientos.png"> 


### Register
<img src="/src/assets/registro.png">

### Login
<img src="/src/assets/login.png">

### Todas las citas como usuario
<img src="/src/assets/todasLasCitas.png">

### Tratamientos
<img src="/src/assets/tratamientos.png">

### Ver como doctor todas las citas registradas
<img src="/src/assets/citasDoctor.png">

### Ver como admin todos los usuarios registrados
<img src="/src/assets/allUsers.png">



## Instalación en local

El proyecto está compuesto tanto de backend como de frontend, por lo que será necesario instalar las dos partes.

Se puede encontrar la base de datos en el siguiente link:

[Database GitHub](https://github.com/Vaz77/proyecto4BackendClinicaDental) 


Seguiremos los siguientes pasos:
1. Clonamos el repositorio `$git clone 'url-repository'`
2. Instalamos las dependencias ` $ npm install `
3. Conectamos nuestro repositorio con la base de datos ` $ npx sequelize db:create `
4. Ejecutamos las migraciones ` $ npx sequelize db:migrate `
5. Ejecutamos los seeders ` $ npx sequelize db:seed:all ` 
6. Conectamos el servidor` $ npm run dev ` 

En cuanto al frontend los pasos serán los siguientes:
1. Clonar el repositorio
2. ` $ npm install `
3. ``` $ npm run dev ```


## Funcionalidades implementadas
Las siguientes funcionalidades han sido implementadas hasta el momento:

- Registro de usuarios.
- Inicio de sesión de usuarios.
- Perfil de usuario.
- Panel de búsqueda, creación y modificación de citas.
- Vista de citas propias para clientes.
- Vista de todas las citas existentes para dentistas.
- Vista de todos los usuarios registrados para administradores.
- Logout


## Agradecimientos:

Agradezco a mis compañeros y profesores, que han hecho posible que realice este proyecto:


- **Dani**  
<a href="https://github.com/Datata" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

- **Mara**  
<a href="https://github.com/MaraScampini" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>

- **David**  
<a href="https://www.github.com/Dave86dev" target="_blank"><img src="https://img.shields.io/badge/github-24292F?style=for-the-badge&logo=github&logoColor=red" target="_blank"></a>





