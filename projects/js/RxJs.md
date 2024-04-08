# OBSERVABLES

Los observables son la representación de un **flujo de datos** (**stream**) síncrono o asíncrono, como son las peticiones HTTP, eventos del DOM, WebSockets, etc.
Podemos suscribirnos a estos flujos para recibir los datos que emiten.
De esa forma cuando el flujo cambia, nuestra suscripción reacciona.

En la práctica es similar al then de las promesas, con una diferencia clave

- una promesa solo se resuelve una vez, fulfilled o rejected, mientras que
- un observable puede emitir un número indeterminado de datos y errores

En la práctica los Observables ligados al protocolo Http solo emiten una vez,
pero eso es propio del protocolo, no de los observables

## Implementación de observables

Se basa en el uso de la librería [RxJS](https://rxjs.dev/), que proporciona entre otras la clase Observable.

El uso de esta librería, dada su aproximación funcional, usando de forma declarativa la composición de funciones, que se encadenan para formar el flujo de datos, da lugar a lo que se conoce como programación reactiva funcional (RFP, "Reactive Functional Programming").

Por convenio, los observables terminan con el signo $, para diferenciarlos de otras variables.

```ts

Al suscribirnos a un observable le proporcionamos la callback que se ejecutara ante cada dato

```ts
  observable$.subscribe( data => console.log(data))
```

Si necesitamos pasarle más callback lo haremos en forma de objeto

```ts
  observable$.subscribe({
    next: (data) => console.log(data),
    error: (error: Error) => console.error(error.message),
    complete: () => {} // make anyway
  });
```

También es posible la des-suscripción de un observable, para ello guardamos la suscripción en una variable y llamamos a su método unsubscribe

```ts
  const subscription = observable$.subscribe( data => console.log(data));
  subscription.unsubscribe();
```

## Tipos de observables

- **Cold**:
  - Comienza a emitir datos cuando se suscribe algún observador
  - Cada suscripción crea un **nuevo** flujo de datos
  - Corresponde al comportamiento por defecto de los **Observable**
  - **Unicast**: Cada suscripción crea un nuevo flujo de datos
  - **Finitos**: Emite un número finito de datos y luego se completa
- **Hot**:
  - Comienza a emitir datos al antes de que se suscriba ningún observador
  - Cada suscripción **comparte** el mismo flujo de datos
  - Corresponde al comportamiento de los **Subject** (Subject, ReplaySubject, BehaviorSubject, y AsyncSubject)
  - **Multicast**: Cada suscripción comparte el mismo flujo de datos
  - **Infinitos**: Emite un número infinito de datos. En este caso es necesario des-suscribirse manualmente.

La respuesta del servidor HTTP es un observable **Cold**, ya que cada suscripción crea un nuevo flujo de datos que se completa y finaliza al llegar la respuesta Http o al cabo de un tiempo si ésta no llega.

```ts repo.service.ts
  getPosts(): Observable<any> {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
```

```ts component.ts
  public repoService inject(RepoService): any[] = [];
  const observable$ = this.repoService.getPosts();
  observable$.subscribe( data => console.log(data));
```

El patrón declarativo para este caso usaría el pipe async en el template

```ts component.ts
  public repoService inject(RepoService): any[] = [];
```

```html component.ts
  @if(repoService.getPosts() | async; as posts) {
    @for(post of posts; trackBy: post.id) {
      <div *ngFor="let post of ">
        {{ post.title }}
      </div>
    }
  }
```

Los estados reactivos de Angular son observables **Hot**, basados en algún tipo de Subject, de modo que pueden compartirse entre todos los componentes que los usan.

```ts state.service
  private stateSubject = new BehaviorSubject<State>({});
  public state$ = this.stateSubject.asObservable();
```

```ts component.ts
  public stateService inject(StateService): State = {};
  const observable$ = this.stateService.state$;
```

```html component.ts
  @if(stateService.state$ | async; as state) {
    <div>
      {{ state.value }}
    </div>
  }
```

## [Operadores de observables](https://rxjs.dev/guide/operators)
