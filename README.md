# Laboratorio Angular Ingeniería Web

**Nombre: Carolina García Clavijo**

Para el desarrollo de este laboratorio se tienen varios servicios para manejar la información referente al owner, estos son:

* **getAll():** Obtiene todos los owners registrados (usa el metodo get de HTTP).
* **getByDni(dni):** Obtiene la información del owner enviando como parametro su dni (usa el metodo get de HTTP).
* **save(owner):** Recibe como parametro el owner que se quiere agregar(Usa el metodo post de HTTP) o si se quiere actualizar la información de este(Usa el metodo put de HTTP).
* **delete(href):** Usa el href que identifica el owner que se quiere eliminar (Usa el metodo delete de HTTP).

 Dentro de la solución de este laboratorio fue necesario agregar nuevos componentes, estos son:
 
 * **owner-list:** Se usa para listar los owners agregados y para eliminar uno o varios de ellos.
 * **owner-edit:** Se usa para agregar, editar o eliminar un owner.
 * **owner-car:** Se utiliza para listar los carros con su respectivo owner.

# CarServiceClient

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
