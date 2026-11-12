# Laboratorio 11 — Comunicación entre componentes en React

- **Curso:** Desarrollo de Aplicaciones Empresariales — Tecsup, 2026-II
- **Integrantes:**
  - Erick Arturo Gamarra Mundaca
  - Jesús Enrique Rocha Bobadilla
- **Repositorio:** https://github.com/ErickGamarra/Django_Lab11

Este laboratorio parte del proyecto del Laboratorio 10 (UrbanTrend: tienda de
ropa + módulo de logística textil, con backend en Django y frontend en React +
Vite). En la Semana 11 los componentes dejan de trabajar cada uno por su lado:
los datos bajan del padre al hijo por props y los hijos avisan al padre con
funciones que también reciben por props.

Todavía no se consume la API; los datos están escritos a mano con la misma
forma que devuelve la API de la Semana 8 (los decimales como texto).

## Cómo ejecutarlo

```bash
cd frontend
npm install
npm run dev      # http://localhost:5173/
npm run lint     # oxlint
npm run build    # genera dist/ (no se sube al repositorio)
```

En la barra superior hay tres opciones: **Parte 1 · Práctica**, **Parte 2 ·
Panel de insumos** y **Laboratorio 10** (la pantalla del laboratorio anterior).

## Parte 1 — Práctica: cafetería con carrito (`frontend/src/practica`)

| Archivo | Qué hace |
| --- | --- |
| `datos.js` | Cinco productos con `id`, `nombre`, `precio` (texto) y `stock`. |
| `Practica.jsx` | Padre. Guarda el carrito, el texto de búsqueda y el aviso. |
| `Catalogo.jsx` | Recibe los productos ya filtrados y dibuja un `ProductoCard` por cada uno. |
| `ProductoCard.jsx` | Muestra un producto y su botón **Agregar** (desactivado si no hay stock). |
| `Carrito.jsx` | Hermano del catálogo. Muestra las líneas, el total y las unidades (calculados con `reduce`), y cambia el título de la pestaña con `useEffect`. |
| `Buscador.jsx` | Campo controlado; el texto vive en `Practica`. |
| `Aviso.jsx` | Muestra "Agregado: …" y se cierra a los 3 s, limpiando el `setTimeout`. |

## Parte 2 — Panel de insumos textiles (`frontend/src/components`)

Pantalla de gestión de la entidad **Material** del módulo `logistics`
(insumos como telas, cierres y conos de hilo).

```
PanelMateriales  (estado: materiales, texto, categoria, mensaje)
├── ResumenMateriales   ← materiales
├── FormularioMaterial  ← onGuardar        → avisa con el registro nuevo
├── FiltroMateriales    ← texto, categoria → avisa con onCambiarTexto / onCambiarCategoria
├── ListadoMateriales   ← materiales filtrados, onReponer, onEliminar
│   └── FilaMaterial    ← material, onReponer, onEliminar → avisa con el id
└── Notificacion        ← mensaje, onCerrar
```

- **Listado y filas:** cada fila tiene los botones *Reponer +10* y *Eliminar*.
  La fila solo envía el `id`; el padre actualiza el arreglo con `map()` o
  `filter()`.
- **Formulario de alta:** campos controlados y las mismas reglas de la API:
  nombre obligatorio, precio unitario mayor que cero y stock entero no
  negativo. Si todo está bien, entrega el registro con `onGuardar` y se limpia.
- **Resumen:** insumos registrados, cuántos están sin stock, precio promedio y
  valor del inventario. Todo se calcula al dibujar, sin `useState`.
- **Filtro:** por nombre y por categoría. Si nada coincide, la tabla lo indica.
- **Efectos:** el título de la pestaña muestra la cantidad de insumos
  (`useEffect` con `[materiales.length]`) y la notificación de cada acción se
  cierra sola a los 3 s, con limpieza del temporizador.

### Por qué el estado está en `PanelMateriales`

La lista de materiales la necesitan tres componentes a la vez: el listado la
muestra, el resumen calcula sus totales y el formulario agrega registros a
ella. Si cada uno guardara su propia copia, quedarían desincronizadas. Por eso
el arreglo vive en el padre común: los datos bajan por props y los cambios
suben como avisos (`onGuardar`, `onReponer`, `onEliminar`, `onCambiarTexto`),
y es el padre el único que llama a `setMateriales`.

## Estructura del repositorio

```
Django_Lab11/
├── frontend/          React + Vite (Semanas 9, 10 y 11)
│   └── src/
│       ├── practica/      Parte 1
│       ├── components/    Parte 2 y componentes del Lab 10
│       ├── App.jsx        menú de vistas
│       └── Lab10.jsx      pantalla del laboratorio anterior
├── src/               proyecto Django (store y logistics, API de la Semana 8)
└── docs/              notas de laboratorios anteriores
```

`node_modules/` y `dist/` están en `.gitignore` y no se suben.
