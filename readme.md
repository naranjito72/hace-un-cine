# TohII

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.5.

## Development server

Run `npm start` for a dev server. Navigate to `http://localhost:4500/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

No applying.

## Running end-to-end tests

No applying.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Documentation

[Interfaces](https://stackoverflow.com/questions/40973074/difference-between-interfaces-and-classes-in-typescript)

[Tutorial](https://ultimatecourses.com/blog/classes-vs-interfaces-in-typescript) Interface vs Class.

Movie [API](https://www.themoviedb.org/documentation/api)


# ¿ Hace un cine ?

![](https://imgur.com/nPVcCjj.jpg)

## Objetivo

- Crear un servicio Angular para compartir información con todos los componentes de tu aplicación.
- Crear rutas de Angular con parámetros.
- Crear componentes conectados entre si.

## Requisitos

- [Fork del repositorio](https://guides.github.com/activities/forking/)
- Clona **tu** repositorio en tu directorio local.

## Entrega

Después de completar ejercicio ejecuta las siguientes instrucciones:

```bash
$ git add .
$ git commit -m "completado"
$ git push origin master
```

Desde **tu** repositorio crea un `pull request` al repositorio original.

En el campo name añade tu nombre [+ el de la pareja].

## Introducción

Corren malos tiempos para las salas de cine. La competencia de internet está dañando la industria, la gente se descarga películas sin pagar por ello. Una sala de proyección ha contactado con nosotros para ayudarles a cambiar la visión que tiene la gente sobre el cine.

La idea es rehacer su sitio web usando Angular. Piensan que si usan las últimas tecnologías la gente los verá de otro modo.

El cine tiene 5 salas diferentes, donde podrás ver 5 películas. La propuesta del cine es proyectar las películas favoritas de la gente en lugar de los últimos estrenos. Tu tarea será ayudar a decir que películas programar.


### Iteración 1 | Creación del Servicio

Primero, crearemos un servicio Angular que contendrá toda la información de películas.

El servicio servirá las películas:

#### Movies

`movies` será un array de objetos que contendrá un ítem por cada sala del cine. Cada objeto tendra la siguiente información:

- **`id`** (Number) - Identificador único para distinguir las películas.
- **`title`** (String) - título.
- **`poster`** (String) - URL de un póster.
- **`synopsis`** (String) - Descripción breve.
- **`genres`** (Array of strings) - Géneros de la película: "Adventure", "Action", "Romantic Comedy" etc.
- **`year`** (Number) - Año de estreno.
- **`director`** (String) - Director.
- **`actors`** (Array of strings) - Nombre de los actores principales.
- **`hours`** (Array of strings) - Horario de proyección. ejemplo: `Wednesday 19:30, 22:30` Indica que se puede ver la película los miércoles a las  19:30h y a las 22:30h.
- **`room`** (Number) - Número de la sala valor entre 1 y 5.

Para crear el array puedes partir del fichero de muestra (sample-movies.js) y completar la información que falta. 

#### Métodos

En el servicio se implementarán dos métodos que se usarán después. Los métodos son *(array objetos propio)*:

- **`getMovies()`** - Devuelve un array de todas las películas.
- **`getMovie(id)`** - Recibe un id de película como parámetro y devuelve el objeto correspondiente.

Fake [API](https://my-json-server.typicode.com/naranjito72/hace-un-cine/movies)

- **`getMoviesHttp()`** 
- **`getMovieHttp(id)`** 

### Iteración 2 | Rutas

En la segunda iteración del ejercicio, crea dos rutas diferentes.

En la página principal de la aplicación mostraremos un lista de películas. Cuando se clique sobre una película se irá al detalle correspondiente.

1. Crea dos componentes para mostrar la información: `MyHomeComponent` y `MyMovieComponent`. *Creados `MovieListComponent` y `MovieDetailComponent`*

2. Crea las rutas:
   - `/movies `, that will render the `MovieListComponent` component.
   - `/movies/:id`, that will render the `MovieDetailComponent` component.


### Iteration 3 | Home Page

En `MovieListComponent` carga todas las películas usando el service  `movie.service.ts` y añade un vínculo al detalle de cada película.

Recuerda que estamos tratando de revolucionar el mundo del cine y convertir a todos los milenials. Añade un estilismo impactante a la página.

![](https://imgur.com/ho1XP03.png)

### Iteración 4 | Movie Page

Mostraremos ahora los detalles de cada película. Utilizaremos el service `movie.service.ts` apra cargar toda la información de una película. En esta página desplegaremos todos los detalles además de un botón para volver atrás.
Dale tu toque personal a la página.

![](https://imgur.com/kTenY67.png)

### Scrum

1. Creaci&oacute;n proyecto
	- CLI
	- Lineas comandos ng new | g | c
	- Componentes y servicios

2. Creación modelo
	- Interface Movie
	- Array Movies
	
3. Routing
	- forRoot(routes)
	- forChildren(routes)
	- loadChildren: () => {}
	
4. Servicios
	- getMovies() & getMovie(id: number) => json
	- getMoviesHttp() & getMovieHttp(id: number) => json-server
	- [Observables](https://www.youtube.com/watch?v=Tux1nhBPl_w)
	
5. Lista Movies
	- *ngFor*
	- *ngIf*
	- *[src]*
	- *[routerLink]*
	
6. Movie
	- @Input()
	- Comunicaci&oacute;n entre componentes

7. A&ntilde;adir b&uacute;squeda
	- Navbar (commons)
  - [SharedModule](https://stackoverflow.com/questions/61148358/angular-custom-pipe-not-working-pipe-not-found) *Dos d&iacute;s me ha tenido bloqueado!!*
  - Pipes
  
	
8. Dise&ntilde;o juego

9. Implementaci&oacute;n juego

10. API Cinema
	

