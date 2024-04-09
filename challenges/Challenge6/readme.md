# Pet List by Signals

- Cada mascota es un objeto con

  - id (auto-generado por JSON-Server): string
  - name
  - raza/especie
  - isAdopted
  - padre/madre adoptivo = dueño: string

- Existe una lista inicial en un json-server

- Se listan las mascotas

-------- Create - Read - Update - Delete

- Se puede añadir mascotas

- Se borran mascotas

- Se puede adoptar una mascotas |-> opcional

----- Componentes

--- Header
--- Footer
--- Lista
--- Item (Mascota)
--- Añadir

## Opcional

Añade una página Home, junto con la página de Lista y permite navegar entre ellas mediante un menú

## LO MAS IMPORTANTE y CRÍTICO

- Servicio Repository conectando con el json-server - httpClient
- Servicio de Store/State mascotas - Signals
- Componente Lista mascotas - Signals

- Testamos todos
