# Angular 17

- [Angular 17](#angular-17)
  - [**PARTE 1. Iniciando un proyecto en Angular**](#parte-1-iniciando-un-proyecto-en-angular)
    - [Creación del proyecto](#creación-del-proyecto)
    - [Incorporación de Linters](#incorporación-de-linters)
      - [ESLint](#eslint)
      - [Prettier](#prettier)
    - [Primera aproximación a Angular](#primera-aproximación-a-angular)
      - [Revisión del Scaffolding resultante](#revisión-del-scaffolding-resultante)
        - [El workspace](#el-workspace)
        - [El proyecto de tipo aplicación](#el-proyecto-de-tipo-aplicación)
        - [El proceso de arranque (bootstrap) de la aplicación](#el-proceso-de-arranque-bootstrap-de-la-aplicación)
      - [Revisión de las operaciones básicas con el CLI (1): scaffolding y server](#revisión-de-las-operaciones-básicas-con-el-cli-1-scaffolding-y-server)
        - [Development server](#development-server)
        - [Code scaffolding. El componente Sample](#code-scaffolding-el-componente-sample)
      - [COMPONENTE (Review)](#componente-review)
      - [Revisión de las operaciones básicas con el CLI (2): build y test](#revisión-de-las-operaciones-básicas-con-el-cli-2-build-y-test)
        - [Build](#build)
        - [_Running tests unitarios_](#running-tests-unitarios)
        - [_Running tests end-to-end_](#running-tests-end-to-end)
        - [Further help](#further-help)
      - [_Re-configuración del entorno de test_](#re-configuración-del-entorno-de-test)
  - [**PARTE 2. Elementos básicos. Routing, componentes y pipes. Librerías. Testing**](#parte-2-elementos-básicos-routing-componentes-y-pipes-librerías-testing)
    - [Páginas y Routing: lazy loading en las rutas](#páginas-y-routing-lazy-loading-en-las-rutas)
      - [Creación de componentes pages: Home y About](#creación-de-componentes-pages-home-y-about)
      - [Rutas](#rutas)
      - [Rutas lazy](#rutas-lazy)
      - [Menu: navegación sin recarga para una SPA](#menu-navegación-sin-recarga-para-una-spa)
    - [Componentes: estado y binding. Eventos. Templates y control flow. Estilos](#componentes-estado-y-binding-eventos-templates-y-control-flow-estilos)
      - [Opciones del menu como propiedad: uso de @for](#opciones-del-menu-como-propiedad-uso-de-for)
        - [Opciones del menu leídas desde las rutas](#opciones-del-menu-leídas-desde-las-rutas)
      - [Componente Contador (Counter): estado y eventos](#componente-contador-counter-estado-y-eventos)
      - [Uso condicional de clases CSS](#uso-condicional-de-clases-css)
      - [Limites en el contador: renderizado condicional](#limites-en-el-contador-renderizado-condicional)
      - [Componente saludo: two-way data binding with ngModel](#componente-saludo-two-way-data-binding-with-ngmodel)
      - [Los estilos y los componentes](#los-estilos-y-los-componentes)
    - [Challenge 1](#challenge-1)
      - [Solución de Challenge 1](#solución-de-challenge-1)
    - [Librerías, más componentes. Proyección de componentes](#librerías-más-componentes-proyección-de-componentes)
      - [Creación de una librería](#creación-de-una-librería)
      - [Componentes Header y Footer en la librería](#componentes-header-y-footer-en-la-librería)
      - [Componente Layout: proyección de componentes](#componente-layout-proyección-de-componentes)
      - [Componente Logo](#componente-logo)
      - [Proyección de más de un contenido](#proyección-de-más-de-un-contenido)
    - [Pipes](#pipes)
      - [Valores "localizados": Locale](#valores-localizados-locale)
    - [_Testing de los componentes_](#testing-de-los-componentes)
      - [_Test de la aplicación_](#test-de-la-aplicación)
      - [_Tests de la librería_](#tests-de-la-librería)
      - [_Test del componente Message_](#test-del-componente-message)
      - [_Test del componente Menu_](#test-del-componente-menu)
      - [_Test del componente Counter_](#test-del-componente-counter)
      - [_Test del componente Greeting_](#test-del-componente-greeting)
    - [Challenge 2. Construyendo componentes](#challenge-2-construyendo-componentes)
      - [Redistribuyendo un componente](#redistribuyendo-un-componente)
        - [Solución: Componentización del ejemplo que viene con Angular](#solución-componentización-del-ejemplo-que-viene-con-angular)
      - [Página TODO. Componente 'TODO List' unitario](#página-todo-componente-todo-list-unitario)
        - [Solución del Challenge 2: ToDo List](#solución-del-challenge-2-todo-list)
        - [La vista (template)](#la-vista-template)
        - [La lógica del componente](#la-lógica-del-componente)
        - [_Los tests_](#los-tests)
    - [Scripts npm y Terminales](#scripts-npm-y-terminales)
  - [**PARTE 3. Comunicación entre componentes. Design System**](#parte-3-comunicación-entre-componentes-design-system)
    - [Comunicación entre componentes](#comunicación-entre-componentes)
      - [Inputs: paso de parámetros a los hijos](#inputs-paso-de-parámetros-a-los-hijos)
        - [_Test del componente Menu_](#test-del-componente-menu-1)
      - [Outputs: eventos hacia el padre](#outputs-eventos-hacia-el-padre)
        - [_Test del componente Clicker_](#test-del-componente-clicker)
        - [_Test del componente Click. SpyOn en Jasmine_](#test-del-componente-click-spyon-en-jasmine)
    - [Challenge 3. Comenzando un Design system](#challenge-3-comenzando-un-design-system)
      - [Solución. Componentes genéricos](#solución-componentes-genéricos)
        - [Componentes del layout: Layout, Header y Footer](#componentes-del-layout-layout-header-y-footer)
        - [_Testing de los componentes Header y Footer_](#testing-de-los-componentes-header-y-footer)
        - [Componente input](#componente-input)
        - [_Testing del Componente input_](#testing-del-componente-input)
      - [RWD: Menu en mobile y desktop](#rwd-menu-en-mobile-y-desktop)
        - [Menu-Icon como componente de la librería](#menu-icon-como-componente-de-la-librería)
        - [Layout responsive](#layout-responsive)
        - [El menú en formato vertical](#el-menú-en-formato-vertical)
        - [_Test del layout_](#test-del-layout)
    - [Ampliando el design system con el ejemplo de Angular](#ampliando-el-design-system-con-el-ejemplo-de-angular)
      - [Logotipo de Angular](#logotipo-de-angular)
      - [Iconos de redes sociales](#iconos-de-redes-sociales)
  - [**PARTE 5. Arquitectura básica. Servicios**](#parte-5-arquitectura-básica-servicios)
    - [Modelo controlador (contenedor) / presentadores](#modelo-controlador-contenedor--presentadores)
    - [Challenge 4. Lista de notas: List / Cards + Add](#challenge-4-lista-de-notas-list--cards--add)
      - [Solución: Lista de notas](#solución-lista-de-notas)
        - [Componente notesList](#componente-noteslist)
        - [Componente noteAdd](#componente-noteadd)
        - [Componente noteCard](#componente-notecard)
      - [_Testing de los componentes interrelacionados_](#testing-de-los-componentes-interrelacionados)
        - [_Test del componente noteAdd_](#test-del-componente-noteadd)
        - [_Test del componente noteCard_](#test-del-componente-notecard)
        - [_Problemas en el orden de los test_](#problemas-en-el-orden-de-los-test)
        - [_Test del componente noteList_](#test-del-componente-notelist)
    - [Abstracción de la lógica en servicios. Repositorio](#abstracción-de-la-lógica-en-servicios-repositorio)
      - [Nueva feature: Courses](#nueva-feature-courses)
      - [Repositorio inMemory](#repositorio-inmemory)
      - [_Test del servicio y del componente que lo usa_](#test-del-servicio-y-del-componente-que-lo-usa)
        - [_Test del componente_](#test-del-componente)
        - [_Test del servicio_](#test-del-servicio)
    - [Persistencia en el repositorio con localStore](#persistencia-en-el-repositorio-con-localstore)
      - [Creación de un servicio storage abstrayendo localStore/sessionStore](#creación-de-un-servicio-storage-abstrayendo-localstoresessionstore)
      - [_Test del servicio Storage_](#test-del-servicio-storage)
      - [Uso del servicio en un nuevo repo: courses.local.repo](#uso-del-servicio-en-un-nuevo-repo-courseslocalrepo)
      - [_Test del repo CoursesLocalRepo_](#test-del-repo-courseslocalrepo)
        - [_Test usando prototipos_](#test-usando-prototipos)
        - [_Test inyectando un mock_](#test-inyectando-un-mock)
      - [Uso del repo courses.local.repo en el componente](#uso-del-repo-courseslocalrepo-en-el-componente)
      - [_Test del componente CoursesList_](#test-del-componente-courseslist)
      - [Paso de servicios a la librería: Storage](#paso-de-servicios-a-la-librería-storage)
  - [**PARTE 7. Programación reactiva (1). Mejorando la arquitectura: Gestión de estado centralizada**](#parte-7-programación-reactiva-1-mejorando-la-arquitectura-gestión-de-estado-centralizada)
    - [Reactividad basada en RxJs](#reactividad-basada-en-rxjs)
      - [OBSERVABLES](#observables)

## **PARTE 1. Iniciando un proyecto en Angular**

En esta primera parte

- veremos como crear un **workspace** de Angular e incluir en el un primer proyecto de tipo **aplicación**.
- incorporaremos ayudas a la programación como **ESLint** y **Prettier** correctamente configurado
- exploraremos el **scaffolding** del proyecto creado, para conocer sus principales elementos y como funciona una aplicación de Angular
- conoceremos las principales herramientas del **CLI** para
  - desarrollar (**ng serve**)
  - construir para producción (**ng build**)
  - testar nuestra aplicación (**ng test**)
- revisaremos el concepto de **componente standalone** en Angular y como el CLI nos ayuda a generarlos

### Creación del proyecto

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.0.6.

```shell
ng new ng.17.taller --create-application false
cd ng.17.taller
ng g app demo --ssr false --style scss -p isdi

// ng g lib isdi-core --standalone -p isdi
```

### Incorporación de Linters

#### ESLint

```shell
ng add @angular-eslint/schematics
```

El resultado será el siguiente

```shell
CREATE .eslintrc.json (993 bytes)
CREATE projects/demo/.eslintrc.json (647 bytes)
UPDATE package.json (1420 bytes)
UPDATE angular.json (3255 bytes)
```

#### Prettier

Para que la extensión de Prettier en VSC utilice la última versión de Prettier,
capaz de formatear correctamente las nuevas estructuras de control de flujo de Angular,
hay que instalarla como dependencia (de desarrollo) del proyecto

```shell
  npm i -D prettier
```

Además es necesario que el formateador de HTML definido en los settings de VSC sea Prettier

```json
 "[html]": {
    // "editor.defaultFormatter": "vscode.html-language-features",
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "files.insertFinalNewline": true
  },
```

### Primera aproximación a Angular

#### Revisión del Scaffolding resultante

##### El workspace

Gitignore, Editorconfig  y README inicial

- ng.17.taller/.editorconfig (274 bytes)
- ng.17.taller/.gitignore (548 bytes)
- ng.17.taller/README.md (1065 bytes)

Fichero de VSC

- ng.17.taller/.vscode/extensions.json (130 bytes)
- ng.17.taller/.vscode/launch.json (470 bytes)
- ng.17.taller/.vscode/tasks.json (938 bytes)

Ficheros de configuración

- .eslintrc.json (993 bytes)
- ng.17.taller/package.json (996 bytes)
- ng.17.taller/tsconfig.json (903 bytes)
- ng.17.taller/angular.json (139 bytes)

##### El proyecto de tipo aplicación

Ficheros de configuración actualizados

- UPDATE angular.json (2992 bytes)
- UPDATE package.json (1044 bytes)

La carpeta del proyecto: Ficheros de configuración

- projects/demo/tsconfig.app.json (285 bytes)
- projects/demo/tsconfig.spec.json (295 bytes)
- projects/demo/.eslintrc.json (647 bytes)

La carpeta sources (src): Ficheros globales en la raíz del proyecto

- projects/demo/src/main.ts (256 bytes)
- projects/demo/src/favicon.ico (15086 bytes)
- projects/demo/src/index.html (308 bytes)
- projects/demo/src/styles.scss (81 bytes)

La carpeta app: configuración del bootstrap y las rutas

- projects/demo/src/app/app.config.ts (235 bytes)
- projects/demo/src/app/app.routes.ts (80 bytes)

La carpeta app: el componente principal (app)

- projects/demo/src/app/app.component.html (21220 bytes)
- projects/demo/src/app/app.component.spec.ts (951 bytes)
- projects/demo/src/app/app.component.ts (382 bytes)
- projects/demo/src/app/app.component.scss (0 bytes)

La carpeta assets preparada

- projects/demo/src/assets/.gitkeep (0 bytes)

##### El proceso de arranque (bootstrap) de la aplicación

En projects/demo/src/ están los ficheros responsables de que exista la aplicación

```schema
index.html + styles.scss
   (definido en angular.json)
          ┕━━━━━━━> main.ts
                    (bootstrap with)
                      ┝━━━━━━━>  app.config.ts
                      ┃                ┕━━━━━━━> rutas desde app.routes.ts
                      ┕━━━━━━━> app.component.ts
                                       ┝━━━━━━━━> app.component.html
                                       ┕━━━━━━━━> app.component.scss
```

#### Revisión de las operaciones básicas con el CLI (1): scaffolding y server

##### Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`.
The application will automatically reload if you change any of the source files.

Estando activo ng serve comprobamos como se refleja un cambio e.g. el valor del titulo almacenado en app.component

##### Code scaffolding. El componente Sample

Run `ng generate component component-name` to generate a new component.
You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

Generamos un componente sample en la carpeta components (también se generara)

```shell
ng g c components/sample --dry-run
```

Nos llevamos al nuevo componente todo el ejemplo que viene con angular:

- template HTML
- estilos, desde el HTML al fichero de estilos
- propiedades de la clase
- elementos del test

Utilizamos el nuevo componente desde app

- lo importamos
- lo consumimos en el template de app

#### COMPONENTE (Review)

- Clase + decorador
- template (html + elementos de Angular)
- estilos (css, scss, sass...)

#### Revisión de las operaciones básicas con el CLI (2): build y test

##### Build

Run `ng build` to build the project.
The build artifacts will be stored in the `dist/` directory.

Se crea la carpeta dist/demo/browser

favicon.ico
index.html

Los resultados de la compilación por parte de esbuild

main-FMCIX442.js      | main          | 191.64 kB |                52.66 kB
polyfills-RX4V3J3S.js | polyfills     |  33.01 kB |                10.68 kB
styles-5INURTSO.css   | styles        |   0 bytes |                 0 bytes

Este contenido es el que aparecerá en el server donde hagamos es despliegue de la aplicación (Vercel, Netlify...)

Podemos probarlo localmente, e.g. con LiveServer desde linea de comandos, si lo tenemos instalado global

```shell
npm list -g
npm i -g live-server
```

##### _Running tests unitarios_

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

El test de componente fallará hemos cambiado un valor en una propiedad sin reflejarlo en el test.
lo corregimos y observamos la estructura de los test

El test del ejemplo ya nos muestra los **dos niveles de test**

- las propiedades del componente como clase (caja blanca)
- los elementos y comportamientos del template (caja negra: orientación UX)

Cambiamos la forma de esta última orientación sustituyendo querySelector de elemento HTML
por el debugElement de testing y sus propios métodos

```ts
    // const compiled = fixture.nativeElement as HTMLElement;
    // const elementH1 = compiled.querySelector('h1') as HTMLHeadingElement
    const debugElement = fixture.debugElement;
    const elementH1 = debugElement.query(By.css('h1'))
      .nativeElement as HTMLHeadingElement;
    expect(elementH1.textContent).toContain('Hello, demo');

```

Con los cambios hechos y los test en verde, podemos hacer un **commit**

##### _Running tests end-to-end_

Run `ng e2e` to execute the end-to-end tests via a platform of your choice.
To use this command, you need to first add a package that implements end-to-end testing capabilities.

##### Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

#### _Re-configuración del entorno de test_

```shell
npm i -D karma-mocha-reporter
ng g config karma
```

Configuración de karma: projects/demo/karma.conf.js (1356 bytes)

```js
  plugins: [
      // ...
      require("karma-mocha-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],


    coverageReporter: {
      //...
      reporters: [{ type: "lcov" }, { type: "text" }],
    },
    reporters: ["mocha", "kjhtml"],
    //...

```

script de ejecución del test

```json
    "test": "ng test --code-coverage --browsers=ChromeHeadless",
    "test:prod": "ng test --code-coverage --no-watch --browsers=ChromeHeadless",
```

Nuestro entrono de test es ahora similar al de Jest que ya conocemos

```shell
✔ Browser application bundle generation complete.
10 01 2024 19:27:41.353:WARN [karma]: No captured browser, open http://localhost:9876/
10 01 2024 19:27:41.370:INFO [karma-server]: Karma v6.4.2 server started at http://localhost:9876/
10 01 2024 19:27:41.370:INFO [launcher]: Launching browsers ChromeHeadless with concurrency unlimited
10 01 2024 19:27:41.380:INFO [launcher]: Starting browser ChromeHeadless
10 01 2024 19:27:42.165:INFO [Chrome Headless 120.0.6099.216 (Windows 10)]: Connected on socket 8CaGnX-85MTwA1diAAAB with id 93006915

START:
  SampleComponent
    √ should have the 'demo' title
    √ should render title
    √ should create
  AppComponent
    √ should create the app

Finished in 0.049 secs / 0.045 secs @ 19:27:43 GMT+0100 (hora estándar de Europa central)

SUMMARY:
√ 4 tests completed
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |     100 |      100 |     100 |     100 |
 app                   |     100 |      100 |     100 |     100 |
  app.component.ts     |     100 |      100 |     100 |     100 |
 app/components/sample |     100 |      100 |     100 |     100 |
  sample.component.ts  |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------
```

## **PARTE 2. Elementos básicos. Routing, componentes y pipes. Librerías. Testing**

En esta segunda parte veremos

- el **enrutamiento** entre componentes a los que vamos a denominar página
- la **carga diferida** (lazy loading) de esas **páginas** (componentes standalone)
- las principales funcionalidades de los **componentes**
  - la clase ES y su template
  - el estado y el binding con el template
  - los eventos
  - los nuevos elementos de 'control flow' de Angular 17
  - los estilos CSS
- la creación de proyectos de tipo **librería**
- la **proyección de contenidos** el los componentes
- los **pipes**

Finalmente comenzaremos el tema del **testing** completando los tests de todos los componentes creados hasta ahora

### Páginas y Routing: lazy loading en las rutas

#### Creación de componentes pages: Home y About

Para disponer de enrutamiento vamos a crear las páginas **_Home_** y **_About_**

NO existen como tal las páginas
Podemos llamar así a los componentes invocados directamente en las rutas y usarlos como contenedores
podemos crearlos con el modo inline para el template (-t) y para los estilos  (-s)

```shell
ng g c pages/home -t -s
ng g c pages/about -t -s
```

Igualmente podemos eliminar el selector (--skip-selector),
ya que la página será accedida como ruta y en ningún caso consumida desde otro template

```shell
ng g c pages/home -t -s --skip-selector
ng g c pages/about  -t -s --skip-selector
```

Modificamos nuestro componente para incluir propiedades y su interpolación en el template

```ts

@Component({
  // selector: 'isdi-home',
  standalone: true,
  imports: [],
  template: `<h2>{{ title }}</h2>`,
  styles: ``,
})
export default class HomeComponent {
  title = 'Home page'
}
```

#### Rutas

En el fichero de rutas, añadimos las páginas incluyendo las re-direcciones para la url vacía o cualquier error

```ts
  export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', title: 'Home', component: HomeComponent },
    { path: 'about', title: 'Acerca de', component: AboutComponent },
    { path: '**', redirectTo: 'home' },
  ];
```

Comprobamos su funcionamiento escribiendo directamente las rutas en el navegador

El componente sample lo reubicamos en la página about
Vemos que para usar un componente es necesario **importarlo en los metadata** del otro

#### Rutas lazy

Cambiamos las rutas para que carguen la páginas de forma lazy o diferida:
en el momento en el que son requeridas por primera vez

Para ello angular usa los import dinámicos soportados por el actual estándar de ES

El objeto Route disponía de la propiedad loadChildren, para referirse a los módulos en carga lazy;
en las últimas versiones se añade la propiedad **loadComponent**, con la misma funcionalidad para los componentes

Nos aseguramos de no importar los componentes de forma estática

```ts
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component').then((c) => c.HomeComponent),
  },

  {
    path: 'about',
    title: 'Acerca de',
    loadComponent: () =>
      import('./pages/about/about.component').then((c) => c.AboutComponent),
  },
  { path: '**', redirectTo: 'home' },
```

Si los componentes usados como páginas **exportan** la clase como **default**,
no es necesario el método then para indicar el nombre del componente

```ts
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    title: 'Home',
    loadComponent: () =>
      import('./pages/home/home.component'),
  },

  {
    path: 'about',
    title: 'Acerca de',
    loadComponent: () =>
      import('./pages/about/about.component'),
  },
  { path: '**', redirectTo: 'home' },
```

#### Menu: navegación sin recarga para una SPA

Creamos un componente menu

```shell
ng g c components/menu
```

Lo incorporamos en app.component, antes del router outlet

Para poder usar directivas de routing es necesario que el componente importe de Angular
el módulo responsable de esta funcionalidad, RoutingModule

```ts
@Component({
  selector: 'isdi-menu',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent {}
```

De esa forma, el template puede definir el comportamiento de los hiperenlaces como una navegación SPA

```html
<a [routerLink]="'home'" routerLinkActive="link-active">Home</a>
```

Si incluimos la clase CSS en los estilos, se aplicara automáticamente en el elemento del menu que esté activo

```scss
  nav {
    ul {
      list-style: none;
      display: flex;
      li {
        display: block;
        padding: 0.2rem 0.5rem;
        a {
          text-decoration: none;
          color: inherit;
        }
      }
    }
  }

  .link-active {
    font-weight: 500;
    font-size: 1.1rem;
    position: relative;
    top: -2px;
    transition: font-weight 2s;
    border-bottom: 1px solid;
  }
```

### Componentes: estado y binding. Eventos. Templates y control flow. Estilos

#### Opciones del menu como propiedad: uso de @for

Creamos un interface con el CLI

```shell
  ng g i interfaces/menu.option
```

Definimos en el el objeto que representa una ruta (path y label)

```ts
  export interface MenuOption {
    path: string;
    label: string;
  }
```

Añadimos en el componente menu una propiedad con el array de opciones del menu

```ts
  options: MenuOption[] = [
    { path: 'home', label: 'Home' },
    { path: 'about', label: 'Acerca de' },
  ];
```

En el template iteramos sobre esa propiedad para construir el menu

```html
 @for (option of options; track $index) {
  <li><a [routerLink]="option.path" routerLinkActive="link-active">{{option.label}}</a></li>
  }
```

Estamos usando una de las nuevas flow controls, que sustituyen a las directivas estructurales en Angular 17

Al mismo tiempo vemos las dos formas de incorporar expresiones de ES en los templates de Angular

- como atributos de los componentes: []
- como interpolaciones en el contenido: {{}}

##### Opciones del menu leídas desde las rutas

En lugar de definir las opciones del menu en el componente app, podemos leerlas directamente de las rutas, creando para ello una función en el archivo de rutas

```ts
  const createMenuOptions = (routes) =>  routes
    .filter(
      (route) =>
        !route.path?.includes(':') &&
        !route.path?.includes('*') &&
        route.path !== '',
    )
    .map((route) => ({ path: route.path, label: route.title }) as MenuOption);
```

Generamos las opciones del menu en el componente app leyéndolas de las rutas

```ts
  menuOptions: MenuOption[] = createMenuOptions(routes);
```

El haber añadido en las rutas la propiedad title, para luego leerla directamente en el componente,
hace que Jasmine detecte en el test las líneas de llamada a los componentes como no cubiertas

Por tanto añadimos un test para el fichero routes, que incluirá un componente de prueba

```ts
  @Component({
    template: '',
  })
  class TestComponent {
    private router = inject(Router);
    goto(route: string) {
      this.router.navigate([route]);
    }
  }
```

En el test

- espiaremos al método navigate del router
- llamaremos al método goto del componente
- comprobaremos que el método navigate ha sido llamado con el argumento esperado

```ts
  TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
    }).compileComponents();
    ...
    router = TestBed.inject(Router);
    navigateSpy = spyOn(router, 'navigate').and.callThrough();

    component.goto('home');
    expect(navigateSpy).toHaveBeenCalledWith(['home']);

    component.goto('about');
    expect(navigateSpy).toHaveBeenCalledWith(['about']);
```

#### Componente Contador (Counter): estado y eventos

Creamos un componente contador y lo añadimos en la página home

```shell
  ng g c components/counter
```

- Cualquier propiedad de la clase es en si un estado: sus cambios se reflejan en la vista
- En la vista podemos definir la respuesta a los eventos con el operador ()
- En esa respuesta podemos hacer directamente cambios en el estado, que automáticamente actualizaran la vista

```html
  <button type="button" (click)="counter =  counter - 1">➖</button>
  <span>{{counter}}</span>
  <button type="button" (click)="counter =  counter + 1">➕</button>
```

Sería mucho mejor práctica llevar la lógica a un método manejador del evento click

```ts
  updateCounter(value: number) {
    this.counter = this.counter + value;
  }
```

#### Uso condicional de clases CSS

La directiva ngClass es un ejemplo de las directivas de atributo
Para usar las directivas en un componente es necesario importar en él CommonModule

NgClass se puede usar de varias maneras.
La más potente es vincularla con un objeto con la directiva en el que

- los nombres de las propiedades corresponden a clases CSS
- su valor boolean determina si se aplican o no

```html
  <span [ngClass]="{'negative': counter < 0}">{{counter}}</span>
```

Una mejor alternativa no necesitaría la directiva de Angular, sino que se podría hacer directamente con el operador ternario

```html
  <span [class.negative]="counter < 0">{{counter}}</span>
```

#### Limites en el contador: renderizado condicional

Si definimos como límites -10 y 10, podemos deshabilitar el botón que ya no es valido dando al atributo disable un valor booleano.
Vemos de nuevo como el operador [] permite vincular un atributo a una expresión

```html
  <button type="button" (click)="updateCounter(-1)" [disabled]="counter === -10">➖</button>
  <span [ngClass]="{negative: counter < 0}">{{counter}}</span>
  <button type="button" (click)="updateCounter(+1)" [disabled]="counter === 10">➕</button>
```

Pero ademas, podemos añadir información al usuario que se renderizará condicionalmente
Para ello tenemos también un nuevo flow control, @if, que viene a sustituir a la directiva estructural nf-if

```html
  @if (counter === 10) {
  <p class="info">has alcanzado el límite superior</p>
  } @else if (counter === -10) {
  <p class="info">has alcanzado el límite inferior</p>
```

#### Componente saludo: two-way data binding with ngModel

Creamos un componente saludo y lo añadimos en la página home

```shell
  ng g c components/greeting
```

Añadimos un input de HTML y vemos como vincularlo a una propiedad,
de forma similar a lo que hacemos en los formularios controlados de react

```html
 <input type="text" placeholder="Dime tu nombre" [value]="user" (input)="updateInput($event)">
```

```ts
 updateInput(event: Event) {
    this.user = (event.target! as HTMLInputElement).value as string;
  }
```

El value del input se iguala a la propiedad del componente
En respuesta al evento input, se actualiza la propiedad con el valor del input

Podemos añadir un botón de borrado, que elimina el valor de la propiedad
reflejándose en el template, incluso en el valor del input

```ts
  cleanInputUser() {
    this.user = '';
  }
```

De esta forma se consigue el binding bidireccional (two-way data binding)
entre la vista (template) y el componente

Además, Angular proporciona una directiva de atributo, **ngModel**,
junto con su evento específico **ngModelChange** que permiten reescribir el código de forma mas simple

Para usarla debemos importar formsModule en nuestro componente

```html
  <input type="text" placeholder="El nombre de tu mascota" [ngModel]="pet" (ngModelChange)="pet = $event">
```

Finalmente, la referencia a la directiva y su método puede unificarse con el operador [()] con ngModel.
Así es como usaremos siempre el binding bidireccional

```html
<input type="text" placeholder="Y de donde eres" [(ngModel)]="place">
```

#### Los estilos y los componentes

El fichero de estilos src/styles define los estilos generales.

En el podemos colocar las variables que teníamos en el componente sample o las propiedades de main

La etiqueta main la pasamos a app.component, quitándola de sample, ya que solo puede ser usada una vez.

Como vemos, el css se sigue aplicando, ya que esta en el fichero global, no vinculado a ningún componente.

En el componente sample sigue existiendo la etiqueta **:host**, auto-referencia al propio componente

```scss
:host {
  min-height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;
}
```

Para comprobar la encapsulación de los estilos, vamos al componente counter y
aplicamos el estilo al párrafo de mensaje directamente en la etiqueta p, sin usar clases

Los párrafos de otros componente no se ven afectados

Creamos un componente mensaje para incluirlo en counter y ver que pasa con el css en un componente hijo

```shell
  ng g c components/message
```

Tampoco le afecta el css del componente: los estilos están encapsulados en su componente

Podemos ver en el inspector de las developer Tools como se consigue esto aplicando los estilos
junto con atributos en forma de hash creados por Angular durante la compilación

Este comportamiento puede modificarse con el metadato **encapsulation** al que podemos asignar el valor **ViewEncapsulation.None**

### Challenge 1

Crea una página **works** con su correspondiente ruta y acceso desde el menú
Crea en ella un componente **estilos** que

- recoja un texto en un input, con un botón que permita borrarlo
- recoja los valores de color, tamaño y tipo de fuente
- muestre el texto aplicándole todos los valores recogidos

Testa a fondo el componente

Pista: usa la directiva de atributo ngStyle, similar a ngClass pero para aplicar estilos inline, sin usar clases
Ya sabes que esto no es en general una buena práctica, pero es necesario en este caso

#### Solución de Challenge 1

Añadimos la página, la ruta y la opción en el array con las opciones de componente menu

```shell
ng g c pages/work -t -s --project demo
```

Creamos el componente styles y lo incorporamos a la página

```shell
ng g c components/styles --project demo
```

La entrada del texto, su display y el botón de borrar reflejan el two-wat data binding que ya conocemos

Añadimos los inputs de color y tamaño y un select para la lista de fuentes.
Es fácil encontrar como conseguir la lista con una pequeña función  (no es importante)

Para crear un select/options iteramos sobre el array con @for

```html
  <select [(ngModel)]="font">
    <option value=""></option>
    @for (item of availableFonts; track $index) {
    <option [value]="item">{{item}}</option>
    }
  </select>
```

La presentación del texto en pantalla recibe los estilos elegidos por el usuario de forma dinámica gracias a propiedades de [style] asociadas a variables

```html
  <output [style.color]="refColor.value ? refColor.value : '#000000' " [style.fontSize]="size + 'rem'"
      [style.fontFamily]="font ? font : 'inherit'">{{sample}}</output>
```

Las variables están asociadas a los inputs de color y tamaño y al select de fuentes a traves de ngModel con propiedades del componente o utilizando referencias locales de la vista, independientes de la lógica del componente.

```html
  <input type="color" name="" id="" ngModel #color> // referencia local
  <input type="number" step="0.5" min="0.5" max="5" [(ngModel)]="size"> // propiedad del componente
```

Estas variables pueden incluso ser leídas en el componente gracias al decorador @ViewChild

```ts

export class StylesComponent implements OnInit {
  ...
  @ViewChild('refColor', { static: true }) color!: ElementRef;

  ngOnInit(): void {
    this.getFonts();
    console.log('Color:', this.color.nativeElement.value);
  }
  ... }
```

En cuanto a los test:

- comprobamos que se puede dar valor al input, que se refleja el texto y que se puede borrar
- comprobamos que se pueden asignar valores a los controles de los estilos y que estos aparecen en la vista, tal como hemos programado

El único caso novedoso es el select, que a diferencia del input, tiene asociado el evento change

```ts
  it('should use the style values selected', () => {
    component.availableFonts = new Set(['Arial']);
    fixture.detectChanges();
     const selectElement: HTMLSelectElement = debugElement.query(
      By.css('.styles select')
    ).nativeElement;
    const pElement: HTMLParagraphElement = debugElement.query(
      By.css('p')
    ).nativeElement;
    selectElement.value = selectElement.options[1].value;
    // También válido
    // selectElement.value = 'Arial';
    selectElement.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(pElement.textContent).toContain('Arial');
  });
```

### Librerías, más componentes. Proyección de componentes

Los workspaces, además de aplicaciones pueden contener librerías:

- no tiene index.html, porque no se renderizan directamente
- exportan elementos (componentes, servicios...) pare ser usados en las aplicaciones
- pueden ser publicadas en npm de forma pública o privada

#### Creación de una librería

Creamos la librería 'core'

```shell
ng g lib core -p isdi --dry-run
```

El resultado es

```shell
CREATE projects/core/ng-package.json (159 bytes)
CREATE projects/core/package.json (220 bytes)
CREATE projects/core/README.md (987 bytes)
CREATE projects/core/tsconfig.lib.json (328 bytes)
CREATE projects/core/tsconfig.lib.prod.json (250 bytes)
CREATE projects/core/tsconfig.spec.json (287 bytes)
CREATE projects/core/src/public-api.ts (118 bytes)
CREATE projects/core/src/lib/core.component.spec.ts (605 bytes)
CREATE projects/core/src/lib/core.component.ts (235 bytes)
CREATE projects/core/src/lib/core.service.spec.ts (363 bytes)
CREATE projects/core/src/lib/core.service.ts (142 bytes)
CREATE projects/core/.eslintrc.json (647 bytes)
UPDATE angular.json (4503 bytes)
UPDATE package.json (1611 bytes)
UPDATE tsconfig.json (971 bytes)
```

El scaffolding es más simple que el de una aplicación

Ficheros de configuración de TS

- projects/core/tsconfig.lib.json (328 bytes)
- projects/core/tsconfig.lib.prod.json (250 bytes)
- projects/core/tsconfig.spec.json (287 bytes)

Readme, .eslintrc.json, package.json y configuración propia de Angular

- projects/core/README.md (987 bytes)
- projects/core/.eslintrc.json (647 bytes)
- projects/core/package.json (220 bytes)
- projects/core/ng-package.json (159 bytes)

En la carpeta sources (src)

Ejemplos de componente y servicio

- projects/core/src/lib/core.component.spec.ts (605 bytes)
- projects/core/src/lib/core.component.ts (235 bytes)
- projects/core/src/lib/core.service.spec.ts (363 bytes)
- projects/core/src/lib/core.service.ts (142 bytes)

Definición del API de la librería, con los elementos que exporta

- projects/core/src/public-api.ts (118 bytes)

En el workspace se actualizan los ficheros

UPDATE angular.json (4503 bytes)
UPDATE package.json (1611 bytes)
UPDATE tsconfig.json (971 bytes)

El cambio en tsconfig.json supone añadir un path que mapea la nueva librería,
necesario para poder usarla desde las aplicaciones del workspace sin instalarla
siempre que la tengamos compilada (build) para que este disponible en la carpeta dist/core

Para ello es util añadir una variación al script watch de npm

```json
  "build:lib": "ng build --watch --configuration development --project core",
```

La primera vez puede dar un error Cannot find module 'ng-packagr'
que se corrige con un npm i para actualizar el paquete que no ha sido instalado correctamente

```shell
Building Angular Package

------------------------------------------------------------------------------
Building entry point 'core'
------------------------------------------------------------------------------
✔ Compiling with Angular sources in Ivy full compilation mode.
✔ Generating FESM bundles
✔ Copying assets
✔ Writing package manifest
✔ Built core

------------------------------------------------------------------------------
Built Angular Package
 - from: D:\Desarrollo\Skylab.base\trying\ng.17.taller\projects\core
 - to:   D:\Desarrollo\Skylab.base\trying\ng.17.taller\dist\core
------------------------------------------------------------------------------
```

Comprobamos que podemos importar el componente CoreComponent
desde la aplicación como desde cualquier librería instalada

```ts
import { CoreComponent} from 'core';

@Component({
  ...
  imports: [CommonModule, RouterOutlet, MenuComponent, CoreComponent],
  ...
  })
```

Una vez importado, lo consumimos por su selector, como cualquier componente

#### Componentes Header y Footer en la librería

Añadimos los clásicos componentes header y footer en la librería.
Como en otros componentes podríamos optar por hacer inline template (-t) y estilos (-s)
o por prescindir de la carpeta para el componente (--flat)

```shell
  ng g c components/header --project core -t -s --flat --dry-run
```

En nuestro caso, los dejamos con el estilo que venimos usando en la aplicación

```shell
  ng g c components/header --project core
  ng g c components/footer --project core
```

Para poder usar los nuevos componentes los añadimos al API de la librería (public-api.ts)

En los estilos de los componentes de la librería podemos hacer referencia a variables CSS que definiremos en la aplicación.

#### Componente Layout: proyección de componentes

En lugar de exportar header y footer podemos crear un componente layout

```shell
  ng g c components/layout --project core
```

En el consumiremos header y footer dejando un espacio para todo el contenido que envuelva el componente

Para indicar donde se colocará el contenido utilizamos la directiva ngContent

```html
<isdi-header></isdi-header>

<ng-content></ng-content>

<isdi-footer></isdi-footer>
```

Para poder usar el nuevo componentes lo añadimos al API de la librería (public-api.ts).
Al mismo tiempo dejamos de exportar header y footer

Al consumir el componente en la aplicación es un wrapper que envuelve todo el contenido que se va a proyectar dentro de el

```html
<isdi-layout>
  <isdi-menu></isdi-menu>
  <main class="main">
    <router-outlet></router-outlet>
  </main>
</isdi-layout>
```

#### Componente Logo

Incorporamos en la librería un componente logo que ya nos dan hecho

Lo usamos el header, pasándole los parámetros que necesita.
Como veremos a partir de aquí, los componentes se comunican entre si

#### Proyección de más de un contenido

Si queremos integrar el menu en el header a nivel de html, el layout deberá
recibir dos contenidos diferentes y colocarlos donde corresponda

Angular lo permite en base a cualquier selector válido de los contenidos

```html
<isdi-header>
  <ng-content select='.menu'></ng-content>
</isdi-header>

<ng-content select=".main"></ng-content>

<isdi-footer></isdi-footer>
```

A su vez el menu se proyecta al componente header, que tendrá definido donde renderizarlo

Una vez definido así, usamos el layout en la aplicación como wrapper de los dos elementos que espera recibir

```html
<isdi-layout>
  <isdi-menu class="menu"></isdi-menu>
  <main class="main">
    <router-outlet></router-outlet>
  </main>
</isdi-layout>
```

Como se ve la proyección de contenido es una potente herramienta que permite la **composición de componentes**, muy utilizada por las librerías al permitir componentes envolventes preparados para manejar y renderizar el contenido que les será proporcionado en las aplicaciones

### Pipes

Son funciones transformadoras de la salida de datos que se utilizan de forma declarativa, en los templates

Existen una serie de Built-in pipes

- DatePipe: Formats a date value according to locale rules.
- UpperCasePipe: Transforms text to all upper case.
- LowerCasePipe: Transforms text to all lower case.
- CurrencyPipe: Transforms a number to a currency string, formatted according to locale rules.
- DecimalPipe: Transforms a number into a string with a decimal point, formatted according to locale rules.
- PercentPipe: Transforms a number to a percentage string, formatted according to locale rules.
- AsyncPipe: Subscribe and unsubscribe to an asynchronous source such as an observable.
- JsonPipe: Display a component object property to the screen as JSON for debugging.

Para ver el uso de DatePipe, añadimos la fecha y hora en el **componente Mensaje**, que tendrá que importar DatePipe

Este sería el aspecto inicial:

```ui
Pagina cargada Thu Jan 11 2024 14:04:40 GMT+0100 (hora estándar de Europa central)
```

Y este cuando filtramos la salida para darle un formato

```ui
Pagina cargada  Thursday, January 11, 2024
```

#### Valores "localizados": Locale

Los pipes con Date, Currency, Decimal y Percent pueden recibir un parámetro que les indica la localización a usar,
que debe haber sido previamente registrada en el fichero de configuración (app.config.ts)

```ts
import localeEs from '@angular/common/locales/es';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localeEs);
```

A partir de ahí, podemos indicas la localización ES en los formatos de los pipes citados

```html
<p>Pagina cargada el {{today | date: 'fullDate' : '' : 'ES' }}
  a las {{today | date: 'mediumTime' : '' : 'ES' }}
</p>
```

Otra posibilidad es cambiar globalmente el locale que usa la aplicación, en el mismo app.config.ts

Importando el token LOCALE_ID y añadiéndolo al provider global de la aplicación con un valor 'es'

```ts
import { ApplicationConfig, LOCALE_ID } from '@angular/core';
...

export const appConfig: ApplicationConfig = {
  providers: [{ provide: LOCALE_ID, useValue: 'es' }, provideRouter(routes)],
};

```

### _Testing de los componentes_

#### _Test de la aplicación_

Los errores de los test iniciales suelen deberse a las carencias del entorno de test, frente al entorno de ejecución del componente.

El error NullInjectorError indica que en el test no hay un provider del servicio, es decir no se esta importando algún modulo.
En el caso del RouterModule, lo sustituimos por el RouterTestingModule que se importa de'@angular/router/testing'.

Sin apenas más cambios este es nuestro resultado

```shell
√ 10 tests completed
-------------------------|---------|----------|---------|---------|-------------------
File                     | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-------------------------|---------|----------|---------|---------|-------------------
All files                |   89.28 |      100 |      70 |      85 |
 app                     |     100 |      100 |     100 |     100 |
  app.component.ts       |     100 |      100 |     100 |     100 |
 app/components/counter  |      75 |      100 |      50 |   66.66 |
  counter.component.ts   |      75 |      100 |      50 |   66.66 | 17
 app/components/greeting |   71.42 |      100 |   33.33 |   66.66 |
  greeting.component.ts  |   71.42 |      100 |   33.33 |   66.66 | 17-21
 app/components/menu     |     100 |      100 |     100 |     100 |
  menu.component.ts      |     100 |      100 |     100 |     100 |
 app/components/message  |     100 |      100 |     100 |     100 |
  message.component.ts   |     100 |      100 |     100 |     100 |
 app/components/sample   |     100 |      100 |     100 |     100 |
  sample.component.ts    |     100 |      100 |     100 |     100 |
 app/pages/about         |     100 |      100 |     100 |     100 |
  about.component.ts     |     100 |      100 |     100 |     100 |
 app/pages/home          |     100 |      100 |     100 |     100 |
  home.component.ts      |     100 |      100 |     100 |     100 |
-------------------------|---------|----------|---------|---------|-------------------
```

Hay que tener en cuenta que son solo los test de humo que auto-completa Angular y que,
con independencia del coverage, solo están testando que se instancian correctamente los componentes.

#### _Tests de la librería_

En el caso de la librería, falta ajustar la configuración como hicimos en la aplicación.

```shell
ng g config karma --project core
```

Crea el fichero de configuración y lo referencia en angular.json

```shell
CREATE projects/core/karma.conf.js (1356 bytes)
UPDATE angular.json (4561 bytes)
```

Aplicamos la misma configuración de karma que a la aplicación en projects/core/karma.conf.js

```js
  plugins: [
      // ...
      require("karma-mocha-reporter"),
      require("@angular-devkit/build-angular/plugins/karma"),
    ],


    coverageReporter: {
      //...
      reporters: [{ type: "lcov" }, { type: "text" }],
    },
    reporters: ["mocha", "kjhtml"],
    //...

```

Los resultados de partida parecen aún más contundentes

```shell
√ 7 tests completed
-----------------------|---------|----------|---------|---------|-------------------
File                   | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
-----------------------|---------|----------|---------|---------|-------------------
All files              |     100 |      100 |     100 |     100 |
 lib                   |     100 |      100 |     100 |     100 |
  core.component.ts    |     100 |      100 |     100 |     100 |
  core.service.ts      |     100 |      100 |     100 |     100 |
 lib/components/footer |     100 |      100 |     100 |     100 |
  footer.component.ts  |     100 |      100 |     100 |     100 |
 lib/components/header |     100 |      100 |     100 |     100 |
  header.component.ts  |     100 |      100 |     100 |     100 |
 lib/components/layout |     100 |      100 |     100 |     100 |
  layout.component.ts  |     100 |      100 |     100 |     100 |
 lib/components/logo   |     100 |      100 |     100 |     100 |
  logo.component.ts    |     100 |      100 |     100 |     100 |
-----------------------|---------|----------|---------|---------|-------------------
```

#### _Test del componente Message_

Aunque ya tiene un 100% de coverage, deberíamos testar ue renderiza realmente lo esperado.

- Añadimos el debugElement a partir de la fixture
- Buscamos él con el selector de la etiqueta p
- Nos quedamos con el correspondiente nativeElement
- Comprobamos que contiene el texto esperado

```ts
  it('should render a paragraph', () => {
    let pElement: HTMLParagraphElement = debugElement.query(
      By.css('p')
    ).nativeElement;
    expect(pElement.textContent).toContain('Página cargada');
  });
```

#### _Test del componente Menu_

A diferencia de lo que sucede en Jest, tenemos acceso a las propiedades de la instancia.
Por ejemplo podríamos añadir una nueva opción al menu y comprobar que se renderiza

```ts
  it('should render a menu item', () => {
    component.options.push({
      path: 'Test',
      label: 'Test',
    });
    fixture.detectChanges();
    let itemElement: HTMLLiElement = debugElement.queryAll(By.css('li'))[2]
      .nativeElement;
    expect(itemElement.textContent).toContain('Test');
  });
```

#### _Test del componente Counter_

Como tenemos botones, debemos comprobar su funcionalidad.

El debugElement dispone para es del método triggerEventHandler() para disparar el click del botón.
Después de usarlo es importante lanzar **fixture.detectChanges()** para que la vista refleje los cambios en el componente. El proceso de detección del cambio automático en los componentes de Angular no lo es en el entorno de test, por lo que hay que ejecutar el correspondiente método de la fixture

```ts
 describe('When we use the buttons', () => {
    let spanElement: HTMLSpanElement;
    let buttonDebugElements: DebugElement[];
    beforeEach(() => {
      spanElement = debugElement.query(By.css('span')).nativeElement;
      buttonDebugElements = debugElement.queryAll(By.css('button'));
    });

    it('should increase the display when the button + is clicked', () => {
      component.counter = 0;
      buttonDebugElements[1].triggerEventHandler('click');
      fixture.detectChanges();
      expect(spanElement.textContent).toBe('1');
    });

    it('should increase the display when the button + is clicked', () => {
      component.counter = 0;
      buttonDebugElements[0].triggerEventHandler('click');
      fixture.detectChanges();
      expect(spanElement.textContent).toBe('-1');
    });
  });
```

#### _Test del componente Greeting_

Las responsabilidades de este componente son

- recoger el valor que escribe el usuario
- actualizar con el el estado del componente y reflejarlo en la vista
- responder al click en el botón modificando el estado y la vista

Para tester lo primero, accedemos al input, cambiamos su valor y despachamos un evento input.
De esa forma simulamos la interacción del usuario con el input
A continuación, tras lanzar la detección de cambios, comprobamos que la vista se ha actualizado.

Como ya vimos antes, disparamos el evento click del botón con el método triggerEventHandler del debugElement
y de nuevo, tras lanzar la detección de cambios, comprobamos que la vista se ha actualizado.

```ts
  it('should type a user name and see in the document', () => {
    let inputElement: HTMLInputElement = debugElement.query(
      By.css('.user input')
    ).nativeElement;
    inputElement.value = 'Test';
    inputElement.dispatchEvent(new Event('input'));
    fixture.detectChanges();

    let pElement: HTMLParagraphElement = debugElement.query(
      By.css('.user p')
    ).nativeElement;
    expect(pElement.textContent).toBe('Hola Test');

    let buttonDebugElement = debugElement.query(By.css('.user button'));
    buttonDebugElement.triggerEventHandler('click');
    fixture.detectChanges();
    expect(pElement.textContent).toBe('Hola amigo');
  });
```

### Challenge 2. Construyendo componentes

#### Redistribuyendo un componente

- A partir del componente Sample (el ejemplo de Angular) creamos 3 nuevos componentes

  - el logotipo de Angular
  - la lista de enlaces
  - la lista de redes sociales

Repasa el uso de Built-in control flow @for (antes directivas estructurales)
Comprueba como se crean componentes para encapsular SVG

##### Solución: Componentización del ejemplo que viene con Angular

Añadimos 3 nuevos componentes

```shell
ng g c components/sample/links -t -s --project demo
ng g c components/sample/socials -t -s --project demo
ng g c components/sample/angular-logo -t -s --project demo
```

Redistribuimos los elementos del componente inicial

- el logotipo de Angular: el componente se limita a encapsular el svg para poder utilizarlo donde sea necesario
- la lista de enlaces, que los guarda como un array para iterar sobre ellos
- la lista de redes sociales, que de nuevo se guardan como un array para iterar sobre ellos

#### Página TODO. Componente 'TODO List' unitario

Crea una lista de tareas en un solo componente
Las tareas estarán en un array en el propio componente
Se ajustaran a un modelo o entidad:  id - titulo - isComplete
El id sera generado con crypto
Se podrá cambiar el estado de la tarea de completa a incompleta
Se podrá cambiar el titulo en la propia lista

Repasa el uso de

- Built-in control flow (antes directivas estructurales):  @for / @if
- directivas de atributo y CSS: ngClass (y ngStyle)
- two-way data binding
- manejadores de eventos: (click) ...

##### Solución del Challenge 2: ToDo List

Generamos el  modelo de datos (entidad)

```shell
ng g i entities/task --project demo
```

Creamos el componente ToDo y lo consumimos en la página works

```shell
  ng g c components/todo --project demo
```

El componente importara FormsModules, para poder vincular el input de nueva tarea con ngModel

##### La vista (template)

En la vista (template) incluimos

- un **details** para la parte del componente que añade tareas. s
  - un input, con la estética que ya hemos utilizado, ligado con un ngModel
  - un botón con su manejador del evento click
  - un párrafo de errores, que se renderiza condicionalmente cuando hays errores

Como solo hay un input y no hemos visto aún formularios, no lo utilizamos

```html
  <details #refDetails>
    <summary>Añadir tarea</summary>
    <div class="form">
      <div class="control">
        <label>
          <!-- Don`t remove placeholder: used by CSS implementation -->
          <input type="text" placeholder=" " [(ngModel)]="title" (focus)="addError = ''">
          <span>Describe la tarea</span>
        </label>
      </div>
      <div class="buttons">
        <button type="button" (click)="handleAddTask()">Add</button>
      </div>
    </div>
    @if (addError) {<p class="info-error">{{addError}}</p>}

  </details>
```

- una **lista** que itera sobre el array de tareas
- cada **item** de la lista tendrá
  - un checkbox con el atributo checked ligado al item.isComplete
  - un input ligado con ngModel al item.title, que
    - sera readonly hasta que pasemos a modo edición con el botón correspondiente
    - tendrá un manejador del evento blur para salvar cuando dejemos de editar
  - dos botones para editar y borrar con sus manejadores del eventoClick

```html
  <ul #refLista>
    @for (item of tasks; track item.id) {
      <li [title]="item.id" [id]="item.id">
        <div class="card">
          <span><input type="checkbox" [checked]="item.isComplete" (change)="handleChangeTasks(item)"></span>
          <input type="text" [readOnly]="!editMode[item.id]" [(ngModel)]="item.title" (blur)="handleSave(item)" />

          <!-- <span [contentEditable]="editMode">{{item.title}}</span> -->

          <span class="buttons">
            @if (!editMode[item.id]) {
            <button type="button" (click)="handleEdit(item)">Edit</button>

            }
            <button type="button" (click)="handleDeleteTask(item)">Delete</button>
          </span>
        </div>

      </li>
    }
  </ul>
```

Tanto en el details como en la lista (ul) incorporamos referencias locales que permitirán desde el componente acceder a los elementos del DOM, para operaciones como colapsar el details o darle foco al input al activar su edición

##### La lógica del componente

Para obtener unos datos iniciales, creamos un fichero tasks mock, donde una función nos devuelve una promesa con un array de tareas predefinido (hardcoded) en el propio fichero.

En el ngOnInit del componente cargamos los datos, como si vinieran de un API.

Los manejadores de eventos responden a cada uno de los eventos asociados a ellos en la vista

- handleAddTask: añadir tareas
- handleChangeTasks: cambiar el estado 'completada' de una tarea
- handleEdit: poner en modo edición el titulo de una tarea
- handleSave: salir del modo edición salvando los datos
- handleDeleteTask: borrar una tarea

```ts
  handleAddTask() {
    if (!this.title) {
      this.addError = 'Invalid data';
      return;
    }
    const newTaskData: Omit<Task, 'id' | 'isComplete'> = {
      title: this.title,
    };
    this.title = '';
    this.addTask(newTaskData);
    this.refDetails.nativeElement.removeAttribute('open');
  }

  handleChangeTasks(item: Task) {
    item.isComplete = !item.isComplete;
    this.updateTask(item);
  }

  handleEdit(item: Task) {
    this.editMode[item.id] = true;
    this.refLista.nativeElement.children[
      item.id
    ].children[0].children[1].focus();
  }

  handleSave(item: Task) {
    this.editMode[item.id] = false;
    this.updateTask(item);
  }

  handleDeleteTask(item: Task) {
    this.deleteTask(item);
    delete this.editMode[item.id];
  }
```

Como previo a llevar parte de la lógica a un servicio aplicando el patrón repo,
las operaciones sobre el array se han llevado a métodos separados, invocados desde los manejadores:

- addTask
- updateTask
- deleteTask

```ts
  addTask(taskData: Omit<Task, 'id' | 'isComplete'>) {
    const task: Task = {
      id: crypto.randomUUID(),
      isComplete: false,
      ...taskData,
    };
    this.tasks = [...this.tasks, task];
  }

  updateTask(updatedItem: Task) {
    this.tasks = this.tasks.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
  }

  deleteTask(deletedItem: Task) {
    this.tasks = this.tasks.filter((item) => item.id !== deletedItem.id);
  }
```

##### _Los tests_

En este caso, como nuestro componente tiene mucha lógica, y esta no se ve cubierta por el test base, tenemos apenas un 30% de coverage de partida

En los test tendremos que cubrir las responsabilidades del componente:

- añadir una tares
- pasar a completa/incompleta una tarea
- modificar el texto de una tarea
- eliminar una tarea

Como las tareas iniciales ya son en cierto modo un mock, podemos dejarlas en el test.

En el beforeAll inicial, tenemos que esperar de ngOnInit termine el proceso de carga asíncrona de los datos

```ts
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TodoComponent);
    component = fixture.componentInstance;
    debugElement = fixture.debugElement;
    fixture.detectChanges(); // dispara ngOnInit
    await fixture.whenStable();
    fixture.detectChanges();
  });
```

El resto de los test escribe en los inputs, hace check o click y emitir los eventos correspondientes (input, change, blur) a los que hay asociados manejadores, de forma muy similar a lo que ya hemos visto

### Scripts npm y Terminales

Al tener varios proyectos (aplicaciones, librerías) con sus terminales para ejecutar

- el build de desarrollo (npm start -- --project ...)
- los test (npm test -- --project ...)

puede ser util ir creando nuevos scrips en npm

Otra opción es guardar los terminales con los comandos que ejecutan,
gracias a la extensión de VSC **Restore Terminals**

Las configuraciones de esta extensión se almacenan en los settings del workspace
(.vscode/setting.json)

## **PARTE 3. Comunicación entre componentes. Design System**

En esta parte veremos

- la **comunicación** bidireccional entre componentes
  - hacia abajo mediante el paso de parámetros a las propiedades **@Input** del componte
  - hacia arriba mediante la emisión de eventos **@Output**
- el concepto de **design system** para reutilizar los componentes
- como podemos empezar a construirlo gracias a
  - la comunicación ente los componentes @Input/@Output
  - la otra forma de comunicación gracias a la proyección de contenido que ya hemos visto

Como elementos de nuestro design system

- crearemos un **Layout** que incluye **Header** y **Footer**
- incorporaremos un **Logo**, que nos servirá de ejemplo del uso de los **SVG** como templates
- añadiremos un **Menu** con opciones configurables
- lo renderizaremos de forma diferente en distintos tamaños para comenzar un **RWD**
- lo ampliaremos con algunos elementos del ejemplo de Angular, usando de nuevo los SVG como templates

Continuando con lo que ya hemos aprendido, no dejaremos de **testar** nuestros componentes

### Comunicación entre componentes

En Angular es bidireccional pero asimétrica

- hacia abajo: paso de parámetros a los hijos
- hacia arriba: envío de eventos hacia el padre

#### Inputs: paso de parámetros a los hijos

Se basa en el decorador **@Input()** que incorpora una propiedad al 'interface' del componente, como si fuera un atributo html, que puede recibir valores cuando se consume el componente, ed decir en el padre.

El resultado es muy similar a las props de React

Como ejemplo, podemos refactorizar el componente menu y como lo consume app,
llevándonos la definición de las opciones del menú hasta app

El componte hijo define sus atributos

```ts
export class MenuComponent {
  @Input({required: true }) options: MenuOption[] = [];
}
```

El parámetro required nos permite indicar que el @Input es obligatorio.
Versiones recientes de Angular permiten, al haber definido @Inputs() booleans,
utilizar solo el nombre del atributo en el caso de querer asignarle un valor true

```html
  <isdi-component any-attribute></isdi-component>
```

Para ello, en el componente hijo se utilizara la propiedad transform al definir el @Input()

```ts
  @Input({transform: booleanAttribute}) any-attribute: boolean = false;

```ts


El componente padre proporciona valores a esos atributos, accediendo a ellos con el operador [], igual que a los atributos html

```ts
@Component({
  ...
})
export class AppComponent {
  menuOptions: MenuOption[] = [
    { path: 'home', label: 'Home' },
    { path: 'works', label: 'Works' },
    { path: 'about', label: 'Acerca de' },
  ];
}
```

```html
    <isdi-menu class="menu" [options]="menuOptions"></isdi-menu>
```

##### _Test del componente Menu_

En el test del componente que recibe valores en un atributo, podemos simularla asignándole un valor a la propiedad a través de la instancia del componente

```ts
  component.options = [
      {
        path: 'Test',
        label: 'Test',
      },
    ];
```

#### Outputs: eventos hacia el padre

Se basa en dos elementos:

- el decorador **@Output()**, peu permite dirigir eventos hacia el nivel anterior (padre)
- la clase **EventEmitter** que permite crear y emitir eventos con cualquier contenido

Para verlo, crearemos un componente clickers que contendrá varios contadores y
totalizara el número de clicks y el valor total en el conjunto de ellos,

```shell
  ng g c components/clickers --project demo
```

Sustituiremos con el nuevo componente el counter que ahora tenemos en la página home
Y tendremos 2 contadores que funciona independientemente

El componente contador, cuando cuando se hace click emitirá un evento con el valor que acumula.
Para ello dispone en el eventEmitter del método next() o su alias emit()
El primer nombre nos indica que en realidad se trata de un observable

```ts
  @Output() countEvent: EventEmitter<number>

  constructor() {
    this.countEvent = new EventEmitter()
  }

  updateCounter(value: number) {
    this.counter = this.counter + value;
    // this.countEvent.emit(value)
    this.countEvent.next(value);
  }
```

El componente clickers estará escuchando (listener) los eventos countEvent como lo haría con cualquier otro evento

```html
<isdi-counter (countEvent)="handleCounter($event)" />
<isdi-counter (countEvent)="handleCounter($event)" />
```

Y en el correspondiente manejador aplicara la lógica necesaria al caso

```ts
  handleCounter(value: number) {
    this.clicks += 1;
    this.collected += value;
  }
```

##### _Test del componente Clicker_

Como la responsabilidad del componente es responder a los evento, podríamos testarlo de formo integrada con el componente que los emite, simulando los clicks en el componente hijo.

Otra alternativa más unitaria es acceder al debugElement del componente hijo
y emitir el evento en directamente con triggerEventHandler para en el expect comprobar la respuesta.

```ts
  beforeEach(() => {
    const counterElement: DebugElement[] = debugElement.queryAll(
      By.css('isdi-counter')
    );
    counterElement[0].triggerEventHandler('countEvent', 10);
  });

  it('should respond to the event changing its values', () => {
    expect(component.clicks).toBe(1);
    expect(component.collected).toBe(10);
  });
```

##### _Test del componente Click. SpyOn en Jasmine_

Aunque aparentemente continúa pasando el test, no estamos testando su nueva funcionalidad de emitir eventos.
Para ello creamos un Spy de jest para el método next de la propiedad eventEmitter del componente
y comprobamos que el método ha sido llamado con el valor correspondiente en cada caso

```ts
   spyOn(component.countEvent, 'next');
   ...
   // tras el click en un botón
    expect(component.countEvent.next).toHaveBeenCalledWith(1);
    ---
    // tras el click en el otro botón
    expect(component.countEvent.next).toHaveBeenCalledWith(-1);

```

Tal como lo estamos usando, el spy es en realidad un mock (como jest.fn) sin ninguna implementación.

Para que sea realmente un spy, manteniendo la implementación original, le añadimos el método callThrough

```ts
  spyOn(component.countEvent, 'next').and.callThrough();
```

### Challenge 3. Comenzando un Design system

Sabiendo como funciona la comunicación entre los componentes, podemos avanzar en la idea de sistema de diseño (Design system):

> una colección de componentes reutilizables y estándares claros que se pueden ensamblar para crear cualquier cantidad de aplicaciones.
> [Fanguy, Will (2019). A comprehensive guide to design systems. Invision.](https://www.invisionapp.com/inside-design/guide-to-design-systems/)

Ya hemos usado varias veces un código similar para crear inputs. Lo eficaz sería abstraer ese código a un componente independiente y usarlo cuando sea necesario,
Intenta conseguirlo

Y la misma pauta podemos aplicarla a botones, modales y demás elementos hasta ir construyendo nuestro propia sistema de diseño.

Como challenge,

- vamos a hacer más genéricos los componentes Layout, Header y Footer
- vamos a crear un componente input que utilizaremos a partir de ahora

#### Solución. Componentes genéricos

Al explicar los @inputs ya hemos convertido el menu en un componente más abstracto.
Un paso más sería llevarlo a la librería, junto que el interface de las opciones
Podría integrarse en el layout o ser consumido como hasta ahora

```ts
export * from './lib/interfaces/menu.option';
...
export * from './lib/components/menu/menu.component';
```

##### Componentes del layout: Layout, Header y Footer

El propio layout podría hacerse más abstracto recibiendo desde fuera valores
como el título o el texto del footer,
que a su vez pasaría a los componente que los usan

El layout es solo un paso intermedio para los valores

```ts
export class LayoutComponent {
  @Input() title!: string;
  @Input() brand!: string;
}
```

```html
<isdi-header [title]="title">
```

Los valores llegan finalmente al componente, e.g. Header

```ts
 @Input() title!: string;

  ngOnInit(): void {
    this.title = this.title ?? 'Angular Workshop';
  }
```

Vemos así un ejemplo del drilling de las propiedades que se pasan por input,
lo que en un par de niveles no supone demasiado problema.

##### _Testing de los componentes Header y Footer_

Añadimos el test que comprueba como efectivamente renderizan los valores que reciben en el input

```ts
  describe('When the componente receive a title as input', () => {
    beforeEach(() => {
      component.title = 'Testing title';
      fixture.detectChanges();
    });
    it('should be render the title', () => {
      const h1Element = fixture.debugElement.query(By.css('h1'))
        .nativeElement as HTMLHeadingElement;
      expect(h1Element.textContent).toContain(component.title);
    });
  });
```

##### Componente input

Creamos un nuevo componente en la librería

```shell
  ng g c components/input --project core
```

El componente recibe como inputs el texto que presentara al usuario junto con el objeto donde guardará los datos y la clave concreta del objeto.

```ts
export class InputComponent {
  @Input({required: true }) label!: string;
  @Input({required: true }) modelData!: { [key: string]: string };
  @Input({required: true }) modelKey!: string;
}
```

Al ser un objeto se puede guardar la información mutándolo, de forma que el nuevo valor se vea reflejado en el objeto original.

En el template, **ngModel** se vincula con la propiedad del objeto

```html
<label>
  <!-- Don`t remove placeholder: used by CSS implementation -->
  <input type="text" placeholder=" "
    [(ngModel)]="modelData[modelKey]"
    (focus)="handleFocus($event)">
  <span>{{label}}</span>
</label>
```

Cuando el input recibe el foco re-emite el evento, con nuestro propio EventEmitter focusEvent, para al consumir nuestro componente se pueda reaccionar al evento focus en el input nativo de HTML

```ts
  @Output() focusEvent = new EventEmitter<Event>();
  ...
  handleFocus(event: Event) {
    this.focusEvent.next(event);
  }
```

##### _Testing del Componente input_

Similar al de inputs anteriores y a otros componentes con inputs.

Inicialmente comprobamos que se renderiza el valor recibido como input label

```ts
  component.label = 'Sample Value';
  ...
  const labelElement: HTMLLabelElement = fixture.debugElement.query(
    By.css('label')
  ).nativeElement;
  expect(labelElement.textContent).toBe('Sample Value');
```

Por otro lado, comprobando que el objeto recibido como input muta de acuerdo con los valores del input HTML

```ts
  const modelData = { sampleKey: '' };
  ...
  beforeEach(async () => {
    ...
    component.label = 'Sample Value';
    component.modelData = modelData;
    component.modelKey = 'sampleKey';
    ...
  });

  const inputElement: HTMLInputElement = fixture.debugElement.query(
    By.css('input')
  ).nativeElement;
  inputElement.value = 'Test';
  inputElement.dispatchEvent(new Event('input'));
  fixture.detectChanges();
  expect(modelData.sampleKey).toBe('Test');
```

Finalmente, respecto al event que hemos creado, comprobamos que se emite cuando el input nativo recibe el foco

```ts
  spyOn(component.focusEvent, 'next');
  const inputElement: HTMLInputElement = fixture.debugElement.query(
    By.css('input')
  ).nativeElement;
  inputElement.dispatchEvent(new Event('focus'));
  fixture.detectChanges();
  expect(component.focusEvent.next).toHaveBeenCalled();
```

#### RWD: Menu en mobile y desktop

##### Menu-Icon como componente de la librería

A partir del svg del clásico 'burger-menu' creamos un componente Angular que lo encapsula.

```shell
  ng g c components/menu-icon --project core
```

Añadimos propiedades @Input para poder dar valores,
en el momento de consumir el componente,
al color y al tamaño del icono de menú

```ts
  @Input() color!: string;
  @Input() width!: string;
  @Input() height!: string;
  style: string = '';

  ngOnInit(): void {
    this.width = this.width || '310px';
    this.height = this.height || '259.34375px';
    this.color = this.color || '#000000';
    this.style = `
    fill: none;
    stroke: ${this.color};
    stroke-width: 49.33635712;
    stroke-linecap: round;
    stroke-linejoin: miter;
    stroke-miterlimit: 4;
    stroke-opacity: 1;
    stroke-dasharray: none;
  `;
  }
```

El template del componente se limita al svg,
usando las propiedades @Input en los puntos adecuados

```html
  <svg
    ...
    [attr.height]="height"
    [attr.width]="width"
    <path
       ...
        [style]="style"
      />
    ...
```

Para que funcione como un bloque desde el punto de vista del CSS,
recordamos aplicarle un display en la pseudoclase :host

```css
  :host {
    display: inline-block;
  }
```

Como ya es la segunda vez que usamos colores de la paleta CSS
podemos reproducirla como constantes el un fichero colors.ts

##### Layout responsive

Cambiamos el layout para hacerlo responsive,
de forma que alternará entre

- el icono del menu
- el menu con todas sus opciones

```html
  <isdi-header [title]="title">
    <button class="menu-icon-container" (click)="openMenu = true">
      <isdi-menu-icon [color]="color" [height]="'2rem'" [width]="'2rem'" />
    </button>
    <div class="desk-menu-container">
      <ng-content select=".menu"></ng-content>
    </div>
  </isdi-header>
```

Como ocurre normalmente en la web, la responsabilidad de que se utilice una opción u otra corresponderá a las media queries de CSS

```css
  /* Button container for MOBILE menu-icon*/
  .menu-icon-container {
    cursor: pointer;
    border: none;
    background-color: transparent;
    @media (width > 780px) {
      display: none;
    }
  }

  /* Div container for DESKTOP menu */
  .desk-menu-container {
    display: none;

    @media (width > 780px) {
      display: initial;
    }
  }
```

Además, en el layout añadimos un side-menu, que se desplegara lateralmente
en respuesta al click en el menu-icon
Incorporamos un div que permitirá el efecto de backdrop, oscureciendo el resto de la aplicación cuando este desplegado el menú lateral

```html
<div class="side-menu">
  <div
    [ngClass]="{ open: openMenu, side_menu_items: true }"
    class="side_menu"
    (click)="openMenu = false"
  >
    <ng-content select=".side-menu"></ng-content>
    <div class="divider"></div>
  </div>
</div>
<div
  [ngClass]="{ open: openMenu, panel: true }"
  class=""
  (click)="openMenu = false"
></div>
```

El evento click se dispara de la forma que proporciona Angular,
limitándose a cambiar el valor de una propiedad boolean isOpenMenu

```html
  <button class="menu-icon-container" (click)="openMenu = true">
```

En el side-menu, las clases css que lo muestran se aplican condicionalmente al valor de isOpenMenu,
usando para ello la directiva ngClass

```css

/* Div outside container for MOBILE side Menu */
.side-menu {
  position: relative;
}

/* Div container for MOBILE side Menu */
.side_menu_items {
  display: flex;
  position: absolute;
  width: 0;
  overflow: hidden;
  /* transition: all 0.5s linear; */
}

/* header:target  */
.open.side_menu_items {
  width: 100%;
  min-height: 12rem;
  overflow: auto;
  background-color: rgba(255, 255, 255, 0.9);
  color: var(--secondary-color);
  z-index: 2;
  transition: all 0.5s linear;
}

.divider {
  margin-block: 2rem;
  margin-inline-start: 2rem;
  width: 1px;
  background-color: var(--secondary-color);
}

.panel {
  display: none;
}

.open.panel {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgb(0, 0, 0);
  opacity: 0.5;
  z-index: 1;
}
```

Combinamos así los elementos de css habituales para der el formato con su aplicación en base a variables definidas en el componente de Angular

##### El menú en formato vertical

Como resultado de estos cambios, el layout va a recibir una doble proyección de contenido, con dos versiones del menu

- la que se despliega horizontalmente en desktop
- la que aparecerá lateralmente en mobile, en respuesta al click de usuario en el menu-icon

Por tanto, al consumir el componente layout en la aplicación, interesa poder seleccionar su orientación.

Una opción para cambiar la orientación Flex del ul dentro del Menu desde el componente home tenemos que usar el **pseudo-elemento ::ng-deep**,
para que el CSS externo tenga efectos sobre el interior de un componente sin cambiar su ViewEncapsulation

```html
  <div class="content">
    <isdi-menu [options]="menuOptions"></isdi-menu>
  </div>
```

```css
  isdi-menu ::ng-deep nav ul{
    flex-direction: column;
  }
```

Sim embargo, ese pseudo-elemento está deprecado, y se considera mala practica
tener que modificar desde fuera el css encapsulado en un componente

Mucho mejor opción es añadirle al componente menu un @Input que permita configurarlo

```ts
  @Input() isVertical = false;
```

Y utilizar este valor en el template del componente para aplicar condicionalmente el css

```ts
  <ul [ngClass]="{ isVertical: isVertical }">
```

Definiendo finalmente en la clase de css la orientación que tendrá el menu

```css
  ul.isVertical {
    flex-direction: column;
  }
```

Tras estos cambios, la aplicación proyectara al componente layout dos versiones del menu

```html
<isdi-layout>
  <isdi-menu class="menu" [options]="menuOptions"/>
  <isdi-menu class="side-menu" [options]="menuOptions"
    [isVertical]="true"
  />
  ...
</isdi-layout>
```

Eventualmente, podríamos incluso cambiar el orden de las opciones o incluso hacerlas diferentes en mobile y desktop.

##### _Test del layout_

El test básico nos da una cobertura completa,
pero podemos completar las funcionalidades que testamos.

Necesitamos crear en el test un componente de testing
que renderice el layout envolviendo los elementos que queremos proyectar

```ts
  @Component({
    standalone: true,
    imports: [LayoutComponent],
    template: `<isdi-layout>
      <div class="menu">Desktop menu</div>
      <div class="side-menu">Side menu</div>
      <div class="main">Main projection</div>
    </isdi-layout>`,
  })
  class TestHostComponent {}
```

En el entorno de testing incorporamos el TestHostComponent
que acabamos de crear

```ts
  let component: TestHostComponent;
  let fixture: ComponentFixture<TestHostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TestHostComponent],
    }).compileComponents();

    // fixture = TestBed.createComponent(LayoutComponent);
    fixture = TestBed.createComponent(TestHostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
```

En cuanto a lso test, podemos comprobar la proyección
de cada uno de los elementos que hemos embebido

```ts
  const menu = fixture.debugElement.query(By.css('.menu'))
    .nativeElement as HTMLDivElement;
  expect(menu).toBeTruthy();

  const menu = fixture.debugElement.query(By.css('.side-menu'))
    .nativeElement as HTMLDivElement;
  expect(menu).toBeTruthy();

  const menu = fixture.debugElement.query(By.css('.main'))
    .nativeElement as HTMLDivElement;
  expect(menu).toBeTruthy();
```

Al mismo tiempo podemos usar directamente el componente layout
para comprobar que renderiza los elementos que le son propios
como el isdi-header, el isdi-footer...

### Ampliando el design system con el ejemplo de Angular

A partir de los tres componentes en los que repartimos el ejemplo de Angular,
al menos dos de ellos pueden ser más abstractos y añadirse al design system:

- el logotipo de Angular encapsulando el svg puede recibir como @Input el tamaño,
  para poder ser utilizado donde sea necesario de forma más flexible
- la lista de redes sociales, puede recibir como @Input el array con los valores sobre los que debe iterar,
  con los enlaces de las redes a las que accederá

Una vez hechos los cambios, se mueven los componentes a la librería

#### Logotipo de Angular

Recibe un @Input con la anchura, como string que incluye las unidades
El valor por defecto se establece en 100%, que es el que aplica el ejemplo de Angular

```ts
  @Input() width: string = '100%';
```

En el SVG se asigna la propiedad del componente al atributo del SVG

```svg
 [attr.width]="width"
```

#### Iconos de redes sociales

Recibe como @Input un objeto con los nombres de las redes sociales y sus correspondientes links

Los valores admitidos son

- GitHub
- LinkedIn
- Twitter
- Instagram
- YouTube

de los que existe un array con los iconos SVG, que se filtra manteniendo solo aquellos de los que se ha recibido enlace en el @Input

```ts
 @Input({required: true }) socialLinks: { [key: string]: string } = {};
  socials: { [key: string]: string | undefined }[] = [];
  baseSocials = [...]

  this.socials = this.baseSocials
    .map((item) => {
      return {
        ...item,
        href: this.socialLinks[item.label.toLowerCase()],
      };
    })
    .filter((item) => item.href);
```

Sobre el array socials así construido se itera en el template

```html
  @for (item of socials; track $index) {...}
```


## **PARTE 5. Arquitectura básica. Servicios**

En esta parte avanzamos hacia a creación de aplicaciones mas complejas introduciendo

- el **modelo controlador (contenedor) / presentadores** con el que podríamos
  - hacer un refactoring del TODO list: List / Cards & Add, lo que dejaremos como challenge
  - crear una nueva página con una lista de Notas con la misma distribución List / Cards & Add
- la abstracción de la lógica en **servicios** y como se utilizan estos en Angular mediante **inyección de dependencias**
  - el uso de los servicios aplicando el **patrón Repositorio** para separar una capa de acceso a los datos
  - la utilización de este **servicio desde un componente**
  - la **persistencia** en el repositorio gracias a un servicio storage (localStore)
    - será un **servicio utilizado otro servicio**, en este caso el repositorio
    - recibirá **parámetros** como parte del mecanismo de inyección de dependencias de Angular

De nuevo no faltaran los **test** que en este caso nos llevaran a aprender como testar

- servicios
- componentes que usan servicios
- servicios que usan otros servicios

### Modelo controlador (contenedor) / presentadores

Cualquier situación que incluye una lista con una serie de items es buena practica componentizarla,
separando la lista y el item como componentes que se pueden comunicar tal como hemos visto.

Podríamos refactorizar la lista de tareas o crear una nueva, e.g. de notas

### Challenge 4. Lista de notas: List / Cards + Add

También sería válido refactorizar el TODO list con List / Card + Add,
pero en lugar de eso, podemos crear una nueva feature con notas,
de características muy similares

Las notas estarán en un array en el propio componente
Se ajustaran a un modelo o entidad:  id - titulo autor - isImportant
El id sera generado con crypto
Se podrá cambiar el estado de la nota de importante a no
Se podrá cambiar el titulo y autor en re-aprovechando el formulario de añadir

#### Solución: Lista de notas

Añadimos una nueva entidad
Añadimos una pagina Notes y los componentes notesList, noteCard y noteAdd

```shell
  ng g i entities/note --project demo
  ng g c pages/notes -t -s --project demo
  ng g c components/notesList --project demo
  ng g c components/noteCard --project demo
  ng g c components/noteAdd --project demo
```

La página tendrá su ruta y su opción del menú consumirá el componente notesList, que hará lo propio con noteCard y noteAdd

Definimos la nueva entidad

```ts
  export interface Note {
    id: string;
    title: string;
    author: string;
    isImportant: boolean;
  }
```

De nuevo creamos un mock de datos iniciales, como función que devuelve una promesa en un fichero independiente.

Podemos copiar y modificar el componente TODO retocando algunos de sus campos y su presentación.

Posteriormente podemos segregarlo en los tres componentes que necesitamos

##### Componente notesList

En él vemos como se simplifica la vista, y que se trata del componente controlador

```ts
<isdi-note-add (addEvent)="handleAddNote($event)" />

<h3>Lista de notas</h3>

<ul class="list">
  @for (item of notes; track item.id) {
  <li [title]="item.id" [id]="item.id">
    <isdi-note-card
      [item]="item"
      (updateEvent)="handleUpdateNote($event)"
      (deleteEvent)="handleDeleteNote($event)" />
  </li>
  }
</ul>
```

Sus responsabilidades son

- itera sobre el array de notas
- en cada iteración alimenta al componente **noteCard** con los datos de una nota
- define handlers específicos para los eventos de cada item (**updateEvent** y **deleteEvent**)
- consume también el componente noteAdd definiendo el manejador del evento **addEvent**

```ts
 ngOnInit(): void {
    getNotes().then((notes) => (this.notes = notes));
  }

  handleAddNote(noteData: NoteData) {
    const note: Note = {
      id: crypto.randomUUID(),
      isImportant: false,
      ...noteData,
    };
    this.notes = [...this.notes, note];
  }

  handleUpdateNote(updatedItem: Note) {
    console.log('Deleting in List');
    this.notes = this.notes.map((item) =>
      item.id === updatedItem.id ? updatedItem : item
    );
  }
  handleDeleteNote(deletedItem: Note) {
    this.notes = this.notes.filter((item) => item.id !== deletedItem.id);
  }
```

La lógica del componente corresponde a las operaciones sobre el array de los datos:

- leerlo inicialmente
- añadir items
- modificar items
- borrar items

Aunque no es necesario, podemos hacer estas operaciones sin mutar el array.
Más adelante podemos sacarle partido a esto ajustando la detección del cambio de Angular.

##### Componente noteAdd

La vista es un interface para recoger los datos en dos inputs.
Sería mejor que fuera un formulario, como veremos más adelante.

Utilizaremos nuestro propio componente **isdi-input** que encapsula el input html nativo

Su lógica se limita al handler del botón, que

- validar uno de los campos
- emitir un evento con los datos que ha recogido, que son la parte de una nota que aporta el usuario (tipo NoteData)
- limpiar el estado y por tanto la UI
- colapsar el elemento details del html

```ts
  handleAddNote() {
    if (!this.noteData.title) {
      this.addError = 'Invalid data';
      return;
    }
    this.addEvent.next(this.noteData);
    this.noteData = {
      title: '',
      author: '',
    };
    this.refDetails.nativeElement.removeAttribute('open');

  }
```

Añadimos un botón 'Cancel' que permita acabar el proceso de añadir, sin ningún efecto, colapsando el elemento HTML

```ts
  handleCancel() {
    this.refDetails.nativeElement.removeAttribute('open');
    this.noteData = {
      title: '',
      author: '',
    };
    this.addError = '';
  }
```

##### Componente noteCard

La vista corresponde a la presentación de los datos de una sola nota, que recibe a traves de un input desde el componente padre.

Los eventos que se gestionan en este caso son

- el marcado del checkbox
- el paso al modo edición al pulsar el correspondiente botón
- el guardado de los datos al abandonar el input tras la edición
- el click del botón de borrado

Tras posibles cambios e las propiedades del componente, tres de estos situaciones desencadenan un event para que sea procesado por el componente controlador (padre)

```ts
  handleMarkNotes() {
    this.item.isImportant = !this.item.isImportant;
    this.updateEvent.next(this.item);
  }

  handleEdit() {
    this.editMode = true;
    this.refTitle.nativeElement.focus();
  }

  handleSaveNote() {
    this.editMode = false;
    this.updateEvent.next(this.item);
  }

  handleDeleteNote() {
    this.deleteEvent.next(this.item);
  }
```

#### _Testing de los componentes interrelacionados_

Toda esta lógica descrita en los componente esta pendiente de ser testada, de acuerdo con las responsabilidades que venimos detallando.

##### _Test del componente noteAdd_

En el componente **noteAdd** el arrange es muy similar a la parte añadir del componente TODO List (all-in-one): simulamos escribir los inputs y pulsar el botón

Lo que cambia es el assert, ya que ahora espiamos el eventEmitter y comprobamos que ha sido llamado

```ts
  spyOn(component.addEvent, 'next');
  expect(component.addEvent.next).toHaveBeenCalledWith(mockNoteData);
```

Testamos también el nuevo botón de cancelar, comprobando que resetea los valores de las propiedades del componente.

##### _Test del componente noteCard_

En el componente **noteCard** el arrange vuelve a ser muy similar para los tres casos que testamos, y el expect en cada caso es que se  haya disparado el evento que estaremos espiando

- When the user modify a note checking it for important

```ts
  spyOn(component.updateEvent, 'next');
  expect(component.updateEvent.next).toHaveBeenCalledOnceWith({
    isImportant: true,
  } as Note);
```

- When the user modify a note writing a new title

```ts
  spyOn(component.updateEvent, 'next');
  expect(component.updateEvent.next).toHaveBeenCalledOnceWith({
    ...mockNote,
    title: 'Updated title',
  } as Note);
```

- When the user click de button for delete a note

```ts
  spyOn(component.deleteEvent, 'next');
  component.item = { ...mockNote, id: '1' };
  expect(component.deleteEvent.next).toHaveBeenCalledOnceWith({
    ...mockNote,
    id: '1',
  });
```

Aunque ya lo hemos visto, recordemos que tal como lo estamos usando, el spy es en realidad un mock (como jest.fn) sin ninguna implementación.

Para que sea realmente un spy, manteniendo la implementación original, le añadimos el método callThrough

```ts
  pyOn(component.deleteEvent, 'next').and.callThrough();
```

##### _Problemas en el orden de los test_

Para este caso concreto puede suceder que los test fallen aleatoriamente por el orden random en que Jasmine los ejecuta.

Puede modificarse este comportamiento en el fichero karma.conf.js

```js
 client: {
    jasmine: {
      // you can add configuration options for Jasmine here
      // the possible options are listed at https://jasmine.github.io/api/edge/Configuration.html
      // for example, you can disable the random execution with `random: false`
      // or set a specific seed with `seed: 4321`
      random: false,
    },
    ...
  },
```

##### _Test del componente noteList_

En este caso, la funcionalidad del componente es responder a los eventos en los componentes hijos, por lo que en el test dispararemos esos eventos gracias al triggerEventHandler del debugElement, como vimos en el componente Clickers

When the component NoteAdd emit the event addEvent

```ts
  component.notes = [{ id: '1' } as Note];
  const addNoteElement: DebugElement = debugElement.query(
    By.css('isdi-note-add')
  );
  addNoteElement.triggerEventHandler('addEvent', { id: 2 });

  expect(component.notes.length).toBe(2);
```

When the component NoteCard emit the event updateEvent

```ts
  component.notes = [{ id: '1' } as Note, { id: '2' } as Note];
  fixture.detectChanges();
  const cardNoteElement: DebugElement[] = debugElement.queryAll(
    By.css('isdi-note-card')
  );
  cardNoteElement[0].triggerEventHandler('updateEvent', {
    id: '1',
    title: 'Test',
  } as Note);

  expect(component.notes[0].title).toBe('Test');
```

When the component NoteCard emit the event deleteEvent

```ts
  component.notes = [{ id: '1' } as Note];
  fixture.detectChanges();
  const cardNoteElement: DebugElement = debugElement.query(
    By.css('isdi-note-card')
  );
  cardNoteElement.triggerEventHandler('deleteEvent', { id: '1' });

  expect(component.notes.length).toBe(0);
```

### Abstracción de la lógica en servicios. Repositorio

Siguiendo con la mejora de nuestra arquitectura, el siguiente paso es abstraer del componte aquella lógica que no tiene que ver directamente con la presentación.

Como sabemos, si esa lógica tiene que ver con los datos, llevárnosla a una capa independiente es implementar el **patron repository**

Ademas, Angular proporciona un elemento especifico para lo lógica independiente de los componentes denominado **servicio**, que será proporcionado a quien lo necesite, componente u otro servicio, mediante **inyección de dependencias**, de la que se ocupan los **inyectores** del framework

Los inyectores almacenan la instancia del servicio, que obtienen del **provider**, responsable a su vez de aplicar el **patrón singleton**, de modo que existirá una sola instancia del servicio en el ámbito de su provider.

Por defecto el provider es la aplicación, por lo que la instancia de cada servicio será única en toda ella.

Sin embargo veremos como. en algunos casos, nos interesa un **componente como provider** de un servicio que va a utilizar, haciéndolo específico y parametrizable para ese componente en concreto

Los módulos, como los importados desde angular, juegan el papel de provider de sus propios servios.

#### Nueva feature: Courses

Clonamos completamente la feature de Notes para disponer de una nueva para aplicarle la arquitectura que iremos viendo:

- la entity Course incluirá

```ts
  export interface Curse {
    id: string;
    title: string;
    author: string;
    isComplete: boolean;
  }
```

- la pagina courses, su ruta y su opción en el menú
- los componentes courses.list, curse.card, curse.add

```shell
  ng g c components/courses-list --project demo
  ng g c components/course-card --project demo
  ng g c components/course-add --project demo
```

#### Repositorio inMemory

Para empezar a crear un repositorio podemos definir el interface que usará.

```shell
  ng g i interfaces/repo --project demo
```

Como inicialmente guardará los datos en memoria, devolverá siempre el array de los datos, en forma de promesa para simular los procesos asíncronos que aparecerán cuando el repositorio dependa de un API.

```ts
export interface Repo<T extends { id: string }> {
  getAll(): Promise<T[]>;
  add(newItem: Partial<T>): Promise<T[]>;
  update(id: T['id'], updatedItem: Partial<T>): Promise<T[]>;
  delete(id: T['id']): Promise<T[]>;
}
```

El segundo paso es crear el servicio que lo implemente

```shell
  ng g s services/courses.in.memory.repo --project demo
```

El primero de sus métodos retorna el array de datos predefinidos, igual que hacíamos con las notas

```ts
const COURSES = [...]

@Injectable({
  providedIn: 'root',
})
export class CoursesInMemoryRepoService implements Repo<Curse> {

  async getAll(): Promise<Curse[]> {
    return COURSES;
  }
}
```

El servicio lo es gracias a su decorador, que define la aplicación global como su inyector

Para que se produzca la inyección de dependencias en un componente vasta tener una propiedad inicializada por un parámetro del constructor con un tipo que corresponda a un servicio, definido por el decorador @injectable

```ts
  export class CoursesListComponent implements OnInit {
    constructor(private repo: CoursesInMemoryRepoService) {}

    ngOnInit(): void {
      this.repo.getAll().then((courses) => (this.courses = courses));
    }
  }
```

En el repo tendremos toda la lógica de gestión de los datos del array, que antes estaba en el componente

- añadir cursos

```ts
  async add(curseData: Partial<Curse>): Promise<Curse[]> {
    const curse: Curse = {
      id: crypto.randomUUID(),
      isComplete: false,
      ...curseData,
    } as Curse;
    this.courses = [...this.courses, curse];
    return this.courses;
  }
```

- actualizar cursos

```ts
  async update(id: string, updatedItem: Partial<Curse>): Promise<Curse[]> {
    this.courses = this.courses.map((item) =>
      item.id === id ? { ...item, ...updatedItem } : item
    );
    return this.courses;
  }
```

- borrar cursos

```ts
  async delete(id: string): Promise<Curse[]> {
    this.courses = this.courses.filter((item) => item.id !== id);
    return this.courses;
  }
```

El componente que inyecta el servicio se limita a utilizarlo para mantener siempre actualizado el **estado**, que en este caso es el array con los datos de los cursos

```ts
  ngOnInit(): void {
    this.repo.getAll().then((courses) => (this.courses = courses));
  }

  handleAddCurse(curseData: CurseData) {
    this.repo.add(curseData).then((courses) => (this.courses = courses));
  }

  handleUpdateCurse(updatedItem: Curse) {
    this.repo
      .update(updatedItem.id, updatedItem)
      .then((courses) => (this.courses = courses));
  }

  handleDeleteCurse(deletedItem: Curse) {
    this.repo.delete(deletedItem.id).then((courses) => (this.courses = courses));
  }
```

Mantenemos el formato then para las promesas, en lugar de async/await por su similitud con el de los observables, que usaremos más adelante

#### _Test del servicio y del componente que lo usa_

##### _Test del componente_

La responsabilidad del **componente** es ahora invocar al servicio, y eso es lo que debemos testar, para lo cual tendremos que espiarlo/moquearlo

En lo que se refiere a los métodos podríamos hacerlo a traves del prototipo, y mediante callThrough dejamos que el servicio se ejecute realmente, es decir, lo espiamos pero no lo moqueamos.

Como todos los métodos del servicio son asíncronos, es necesario que el test lo sea y que ejecutemos fixture.whenStable(), similar al act que utilizamos en Jest.

```ts
  spyOn(CoursesInMemoryRepoService.prototype, 'add').and.callThrough();

  await fixture.whenStable();
  expect(CoursesInMemoryRepoService.prototype.add).toHaveBeenCalled();
  expect(component.courses.length).toBe(2);
```

Una alternativa más integrada en Angular es

- convertir a nuestro entorno del test en el **provider** del servicio
- **inyectarlo** cuando se instancia el componente que estamos testando

```ts
  let service: CoursesInMemoryRepoService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CoursesListComponent],
      providers: [CoursesInMemoryRepoService],
    }).compileComponents();
    ...
    service = TestBed.inject(CoursesInMemoryRepoService);
    service.courses = [{ id: '1' } as Curse];
    fixture.detectChanges();
  });
```

De esta forma además conseguimos acceso no solo a los métodos del servicio, también a sus propiedades, que no están en el prototipo. Con ello podemos incluso ajustarlas para cada test

Al hacerlo así, la propiedad correspondiente a la inyección del servicio en el componente real puede ser **privada (private)** con lo que aplicamos buenas practicas de orientación a objetos para mejorar la encapsulación.

En consecuencia, espiamos directamente cada uno de los **métodos** de la propiedad service, correspondiente a la instancia del servicio que se inyectará en el componente

```ts
  service.courses = [{ id: '1' } as Curse, { id: '2' } as Curse];
  fixture.detectChanges();
  spyOn(service, 'update').and.callThrough();

    await fixture.whenStable();
    expect(service.update).toHaveBeenCalled();
    expect(component.courses[0].title).toBe('Test');
```

En este caso, como el servicio solo almacena datos en memoria, no lo hemos moqueado, sino espiado, por lo queda testado al testar el componente que lo usa

##### _Test del servicio_

Al margen de lo anterior, vamos a testar el propio servicio de forma unitaria.

Para ello basta inyectarlo en el entorno de test

```ts
  let service: CoursesInMemoryRepoService;

  TestBed.configureTestingModule({});
  service = TestBed.inject(CoursesInMemoryRepoService);
```

Disponemos así de una instancia del servicio y podemos acceder a sus propiedades y métodos, ejecutando estos últimos para testarlos

```ts
  service.courses = [];
  async () => {
      const result = await service.getAll();
      expect(result).toEqual([]);
  }
```

Como los métodos del servicio son asíncronos, también lo serán los tests

Lo mismo para el siguiente método

```ts
  service.courses = [];
  async () => {
      const result = await service.add({ id: '1' });
      expect(result).toEqual([{ id: '1', isComplete: false } as Course]);
    });
```

Y así en cada método

### Persistencia en el repositorio con localStore

Para dar una persistencia inicial a nuestra aplicación vamos a usar localStorage.

#### Creación de un servicio storage abstrayendo localStore/sessionStore

En lugar de utilizarlo directamente en el repo, lo encapsularemos en un servicio independiente.

```shell
  ng g s services/storage --project demo
```

La principal novedad de este servicio es que si queremos que sea abstracto, necesitamos pasarle parámetros para indicarle

- el nombre del store
- si queremos que utilice localStore o sessionStore

Par ello los definimos en el constructor con el decorador @Inject() que le indica que los recibirá durante la inyección de dependencia

```ts
  constructor(
    @Inject('storeName') private storeName: string,
    @Inject('storeType') @Optional() private storeType?: string
  ) {
    this.storeType = storeType || 'local';
    this.storage = this.storeType === 'local' ? localStorage : sessionStorage;
  }
```

El resto del servicio se limita a encapsular los métodos de local/sessionStore recibiendo o devolviendo los datos de acuerdo con el tipo asignado en forma de genérico.

```ts
export class StorageService<T> {
  private storage: Storage;
  ...

  get() {
    const initialData = this.storage.getItem(this.storeName);
    if (!initialData) return null;
    return JSON.parse(initialData) as T;
  }

  set(data: T) {
    const finalData = JSON.stringify(data);
    this.storage.setItem(this.storeName, finalData);
  }

  remove() {
    this.storage.removeItem(this.storeName);
  }
}
```

#### _Test del servicio Storage_

Para testar un servicio que recibe parámetros necesitamos inyectarle valores en dichos parámetros.

Podemos hacerlo gracias al inyector del entorno de testing TestBed.inject()

Los inyectores de Angular reciben desde el Provider un token que puede corresponder a distintas formas de crear el objeto que van a inyectar

- una clase que se instanciará [useClass - this option tells Angular DI to instantiate a provided class when a dependency is injected]
- un token ya existente [useExisting - allows you to alias a token and reference any existing one.]
- un factoría que devuelve la instancia [useFactory - allows you to define a function that constructs a dependency.]
- una constante [useValue - provides a static value that should be used as a dependency.]

En este caso usaremos un Token de tipo Factory, que nos permite ser nosotros lo que instanciamos la clase y así pasarle al constructor los parámetros adecuados.

```ts
  type Test = [];
  const storeName = 'Tasks';

  const STORAGE_TOKEN = new InjectionToken<StorageService<Test>>(
    'Storage Service',
    {
      providedIn: 'root',
      factory: () => new StorageService<Test>(storeName),
    }
  );

  let service: StorageService<Test>;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(STORAGE_TOKEN);
  });
  ...
```

Una alternativa más próxima a la forma real en que usaremos el servicio, es definir su provider:

- en el entorno real sería el componente que consuma el servicio
- en los test será en TestBed

En ambos casos, además de provider del servicio, lo será de los tokens con sus parámetros, uno para el nombre del store (storeName) y, opcionalmente, otro token para el tipo de store (storeType)

```ts
  TestBed.configureTestingModule({
    providers: [
      StorageService,
      { provide: 'storeName', useValue: storeName },
      { provide: 'storeType', useValue: storeType },
    ],
  });
```

En cualquiera de los dos casos, los test en si son muy simples: ejecutan cada uno de los métodos del servicio habiendo moqueado localStore y en el assert se comprueba que recogen y procesan la respuesta del mock

- para el método get, con o sin datas en el store

```ts
  spyOn(window.localStorage, 'getItem');
  service.get();
  expect(window.localStorage.getItem).toHaveBeenCalled();

  spyOn(window.localStorage, 'getItem').and.returnValue('[]');
  const result = service.get();
  expect(result).toEqual([]);
```

- para el método set

```ts
  spyOn(window.localStorage, 'setItem');
  service.set([]);
  expect(window.localStorage.setItem).toHaveBeenCalled();
```

- para el método remove

```ts
  spyOn(window.localStorage, 'removeItem');
  service.remove();
  expect(window.localStorage.removeItem).toHaveBeenCalled();
```

#### Uso del servicio en un nuevo repo: courses.local.repo

Creamos un nuevo servicio courses.local.repo que implementará el mismo interface que el anterior

```shell
  ng g s services/courses.local.repo --project demo
```

Inyectamos el servicio StorageService concretando su tipo como Course[] y pasándole los parámetros que necesita

Para ello el servicio queda como siempre

```ts
  export class CoursesLocalRepoService implements Repo<Course> {
    courses: Course[];
    constructor(private ls: StorageService<Course[]>) {}
    ...
  }
);

```

Lo que cambia es que definiremos como su **provider el componente** que lo va a utilizar (CoursesListComponent), que lo será también del servicio StorageService, dependencia del que estamos creando, y del token con los parámetros de aquel necesita, al menos storeName

```ts en CoursesListComponent
  providers: [
    CoursesLocalRepoService,
    StorageService,
    { provide: 'storeName', useValue: 'Courses' },
  ],
```

En cuanto a los métodos del repo, son similares a los de MemoryRepo, pero añaden las operaciones de persistencia de los datos usando el servicio StorageService inyectado como ls

En el caso del getAll, se utiliza el método get, y si no hay datos, el set

```ts
 async getAll(): Promise<Course[]> {
    let courses = this.ls.get();
    console.log(courses);
    if (!courses) {
      courses = COURSES;
      this.ls.set(courses);
    }
    return courses;
  }
```

Los otros métodos usan al que acabamos de crear, getAll, para obtener todos los datos de localStore, añaden, actualizan o borran lo que corresponda en los datos y reescriben localStorage con el resultado

Por ejemplo, en el método add

```ts
  async add(courseData: Partial<Course>): Promise<Course[]> {
    const course: Course = {
      id: crypto.randomUUID(),
      isComplete: false,
      ...courseData,
    } as Course;
    let courses = await this.getAll();
    courses = [...courses, course];

    this.ls.set(courses);
    return courses;
  }
```

#### _Test del repo CoursesLocalRepo_

Vamos a ver dos posibles enfoques, el primero basado en los prototipos de las clases de ES y el segundo en la forma en que trabajan los inyectores de dependencia de Angular

##### _Test usando prototipos_

El servicio se incorpora al test en el injector del TestBed, tal como nos proporciona el CLI, añadiendo en el provider el token con los parámetros de StorageService

```ts
  providers: [
    StorageService,
    { provide: 'storeName', useValue: 'Courses' },
  ],
```

En el encontraremos inyectado el servicio StorageService que podemos moquear fácilmente a traves de su prototipo; con spyOn(...).and.returnValue(...) definiremos el comportamiento del mock cuando necesitemos que devuelva algún valor, adecuándolo a cada uno de los cuatro métodos que tenemos que testar

- getAll()

```ts
  spyOn(StorageService.prototype, 'get').and.returnValue([]);
  const result = await service.getAll();
  expect(StorageService.prototype.get).toHaveBeenCalled();
  expect(result).toEqual([]);
```

- add()

```ts
  spyOn(StorageService.prototype, 'get').and.returnValue([]);
  spyOn(StorageService.prototype, 'set');
  const result = await service.add({ id: '1' });
  expect(StorageService.prototype.get).toHaveBeenCalled();
  expect(StorageService.prototype.set).toHaveBeenCalled();
  expect(result).toEqual([{ id: '1', isComplete: false } as Course]);
```

- update()

```ts
  spyOn(StorageService.prototype, 'get').and.returnValue([
    { id: '1', isComplete: false },
    { id: '2', isComplete: false },
  ]);
  const result = await service.update('1', { id: '1', isComplete: true });
  expect(StorageService.prototype.get).toHaveBeenCalled();
  expect(StorageService.prototype.set).toHaveBeenCalled();
  expect(result).toEqual([
    { id: '1', isComplete: true } as Course,
    { id: '2', isComplete: false } as Course,
  ]);
```

- delete()

```ts
  spyOn(StorageService.prototype, 'get').and.returnValue([
    { id: '1', isComplete: false },
  ]);
  spyOn(StorageService.prototype, 'set');
  const result = await service.delete('1');
  expect(StorageService.prototype.get).toHaveBeenCalled();
  expect(StorageService.prototype.set).toHaveBeenCalled();
  expect(result).toEqual([]);
```

##### _Test inyectando un mock_

Una alternativa más de acuerdo con Angular es acceder a la instancia en lugar de al prototipo, a traves de la inyección del servicio y de un mock del StorageService, del que depende

Para crear el mock podríamos declarar un objeto con la estructura adecuada y luego inyectarlo en el TetBed

```ts
  const storageServiceMock: StorageService<Course[]> = {
    storeName: 'Courses',
    storeType: 'localStorage',
    storage: localStorage,
    get: () => [{} as Course],
    set: () => {},
    remove: () => {},
  } as unknown as StorageService<Course[]>;

  storageService = TestBed.inject(StorageService);
```

Una alternativa más simple es user el método createSpyObj de jasmine, que una vez creado el mock, lo inyectará directamente en el TestBed

```ts
  beforeEach(() => {
    storageServiceMock = jasmine.createSpyObj(
      'StorageService',
      {
        get: [{}],
        set: undefined,
        remove: undefined,
      },
      [
        {
          storeName: 'Courses',
          storeType: 'localStorage',
          storage: localStorage,
        },
      ],
    );

```

En cualquiera de los dos casos, el TestBed se convierte en provider del mock de StorageService (la dependencia del servicio a testar),  y del token con sus parámetros

```ts
  TestBed.configureTestingModule({
      providers: [
        { provide: 'storeName', useValue: 'Courses' },
        {
          provide: StorageService,
          useValue: storageServiceMock,
        },
      ],
    });
```

El resto de los tests son prácticamente iguales pero espiando los servicios del mock en lugar de los del prototipo. Por ejemplo en el caso de add

```ts
  (storageServiceMock.get as jasmine.Spy).and.returnValue([
        { id: '1', isComplete: false } as Course,
      ]);
  const result = await service.add({ id: '2', isComplete: false });
  expect(storageServiceMock.get).toHaveBeenCalled();
  expect(storageServiceMock.set).toHaveBeenCalled();
  expect(result).toEqual([
    { id: '1', isComplete: false } as Course,
    { id: '2', isComplete: false } as Course,
  ]);
```

#### Uso del repo courses.local.repo en el componente

El componente **CoursesList** ya utiliza el repo CoursesInMemoryRepoService
Como el nuevo repo CoursesLocalRepoService utiliza el mismo interface, basta inyectarlo en lugar del anterior para que la aplicación lo utilice y tenga persistencia local.

No es necesario ningún otro ajuste a nivel de los componentes, que son totalmente agnósticos a la capa repositorio, siempre que se respete el interface

#### _Test del componente CoursesList_

Por un lado vamos a añadir los test del repo CoursesInMemoryRepoService que antes estaba testado indirectamente y ahora deja de estarlo al no ser usado por ningún componente.

Por otro vamos a cambiar el planteamiento del test del componente, que ahora utiliza un repo con persistencia, mockeando dicho repo en el test del componente, para hacerlo unitario y no depender de un servicio externo que a su vez depende de la forma en que se implemente la persistencia, en este caso a¡vía un segundo servicio.

Para realizar el mock utilizamos nuevamente el método createSpyObj de jasmine

```ts
    mockRepoService = jasmine.createSpyObj<CoursesLocalRepoService>(
      'CoursesLocalRepoService',
      {
        getAll: Promise.resolve([{ id: '1' } as Course]),
        add: Promise.resolve([{ id: '1' } as Course, { id: '2' } as Course]),
        update: Promise.resolve([
          { id: '1', title: 'Updated Title' } as Course,
        ]),
        delete: Promise.resolve([] as Course[]),
      },
    );
```

El problema es que el componente esta definido como provider de los servicios por lo que tenemos que sobre-escribirlo con el método overrideComponent del TesBed

```ts
  await TestBed.configureTestingModule({
    imports: [CoursesListComponent],
  })
    .overrideComponent(CoursesListComponent, {
      set: {
        providers: [
          { provide: CoursesLocalRepoService, useValue: mockRepoService },
        ],
      },
    })
    .compileComponents();
```

En cuanto a los test de las distintas funcionalidades,

- seleccionamos el componente add o card para disparar el evento de su EventEmitter con un determinado contenido
- comprobamos que se llama al método apropiado del mock del Servicio
- comprobamos que los datos del array se ajustan a lo esperado en función de lo que hemos definido que devuelve el mock

- add()

```ts
    const addCourseElement: DebugElement = debugElement.query(
        By.css('isdi-course-add'),
      );
      addCourseElement.triggerEventHandler('addEvent', { title: 'Test' });

      expect(component.courses.length).toBe(1);
      await fixture.whenStable();
      expect(mockRepoService.add).toHaveBeenCalled();
      expect(component.courses.length).toBe(2);
```

- update()

```ts
  (mockRepoService.getAll as jasmine.Spy).and.resolveTo([
    { id: '1' } as Course, { id: '2' } as Course,
  ]);
  fixture.detectChanges();
  const cardCourseElement: DebugElement[] = debugElement.queryAll(
    By.css('isdi-course-card'),
  );
  cardCourseElement[0].triggerEventHandler('updateEvent', {
    id: '1', title: 'Updated Title' } as Course);

  await fixture.whenStable();
  expect(mockRepoService.update).toHaveBeenCalled();
  expect(component.courses[0].title).toBe('Updated Title');
```

- delete()

```ts
  (mockRepoService.getAll as jasmine.Spy).and.resolveTo([
    { id: '1' } as Course,
  ]);
  mockRepoService.getAll();
  fixture.detectChanges();
  const cardCourseElement: DebugElement = debugElement.query(
    By.css('isdi-course-card'),
  );
  cardCourseElement.triggerEventHandler('deleteEvent', { id: '1' });

  expect(component.courses.length).toBe(1);
  await fixture.whenStable();
  expect(mockRepoService.delete).toHaveBeenCalled();
  expect(component.courses.length).toBe(0);
```

El ```await fixture.whenStable()``` nos permite aserciones sobre los valores antes y después de la respuesta a los eventos que disparamos.

#### Paso de servicios a la librería: Storage

La librería, como almacén de los elementos de Angular compartidos entre aplicaciones, puede también incluir servicios.
Un buen ejemplo sería el servicio **Storage**, en el que hemos abstraído el uso de

- localStore
- sessionStore

totalmente desacoplados de la aplicación actual

## **PARTE 7. Programación reactiva (1). Mejorando la arquitectura: Gestión de estado centralizada**

### Reactividad basada en RxJs

[RxJs](https://rxjs.dev/) es la librería reactiva más importante en JS, proporcionado un tipo de dato conocido como Observables, junto varias extensiones suyas y multitud de operadores para manejarlos.

> RxJS is a library for reactive programming using Observables, to make it easier to compose asynchronous or callback-based code. This project is a rewrite of Reactive-Extensions/RxJS with better performance, better modularity, better debuggable call stacks, while staying mostly backwards compatible, with some breaking changes that reduce the API surface.
> [RxJs](https://rxjs.dev/)

Recientemente liberada su versión 7, se incorpora en Angular 17 como dependencia "rxjs": "~7.8.0".

Proporciona al framework entre otras cosas

- la clase **EventEmitter** como extensión indirecta de la clase Observable, que ya hemos visto
- el sustrato de los **formularios reactivos**
- el servicio **HttpClient** que encapsula las conexiones Http, sustituyendo a fetch
- los medios necesarios, basados en clases que extienden de Observables, como **BehaviorSubject**, para la implementación de una gestión de estados que puede utilizar el patrón **Flux**

Para poder trabajar en todo ello, y también para aprovechar las características del workspace de Angular, vamos a añadirle una segunda aplicación

#### OBSERVABLES

Los observables son la representación de un flujo de datos (stream) al que podemos suscribirnos.
De esa forma cuando el flujo cambia, nuestra suscripción reacciona.

En la práctica es similar al then de las promesas, con una diferencia clave

- una promesa solo se resuelve una vez, fulfilled o rejected, mientras que
- un observable puede emitir un número indeterminado de datos y errores

En la práctica los Observables ligados al protocolo Http solo emiten una vez,
pero eso es propio del protocolo, no de los observables

En consecuencia, al suscribirnos a un observable le proporcionamos la callback que se ejecutara ante cada dato

```ts
  observable.subscribe( data => console.log(data))
```

Si necesitamos pasarle más callback lo haremos en forma de objeto

```ts
  observable.subscribe({
    next: (data) => console.log(data),
    error: (error: Error) => console.error(error.message),
    complete: () => {} // make anyway
  });
```
