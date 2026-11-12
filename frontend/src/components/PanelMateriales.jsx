import { useCallback, useEffect, useState } from 'react'
import ListadoMateriales from './ListadoMateriales'
import FormularioMaterial from './FormularioMaterial'
import ResumenMateriales from './ResumenMateriales'
import FiltroMateriales from './FiltroMateriales'
import Notificacion from './Notificacion'

// Registros con la forma de GET /api/materiales/ (Semana 8): el precio
// llega como texto y la categoría trae su id y su nombre.
const materialesIniciales = [
  { id: 1, categoria: 1, categoria_nombre: 'Telas y Tejidos', nombre: 'Tela Algodón Pima 50/1 Negro', unidad_medida: 'Metros', precio_unitario: '34.50', stock: 450 },
  { id: 2, categoria: 1, categoria_nombre: 'Telas y Tejidos', nombre: 'Tela Franela Reactiva Crema', unidad_medida: 'Metros', precio_unitario: '28.00', stock: 320 },
  { id: 3, categoria: 1, categoria_nombre: 'Telas y Tejidos', nombre: 'Tela Rib 2x1 Spandex Negro', unidad_medida: 'Metros', precio_unitario: '22.50', stock: 180 },
  { id: 4, categoria: 2, categoria_nombre: 'Avíos y Fornituras', nombre: 'Cierre Metálico N° 5 de 60 cm', unidad_medida: 'Piezas', precio_unitario: '3.80', stock: 1200 },
  { id: 5, categoria: 2, categoria_nombre: 'Avíos y Fornituras', nombre: 'Botón Metálico Jean 17 mm', unidad_medida: 'Piezas', precio_unitario: '0.45', stock: 40 },
  { id: 6, categoria: 3, categoria_nombre: 'Hilados y Conos', nombre: 'Cono Hilo Poliéster 40/2 Negro', unidad_medida: 'Conos', precio_unitario: '8.50', stock: 0 },
]

// Padre de la pantalla: el arreglo de materiales vive solo aquí.
function PanelMateriales() {
  const [materiales, setMateriales] = useState(materialesIniciales)
  const [texto, setTexto] = useState('')
  const [categoria, setCategoria] = useState('')
  const [mensaje, setMensaje] = useState(null)

  const cerrarMensaje = useCallback(() => setMensaje(null), [])
  const avisar = (contenido) => setMensaje({ texto: contenido, hora: Date.now() })

  // Lista que se muestra: se calcula a partir del estado, no se guarda aparte.
  const visibles = materiales.filter(
    (m) =>
      m.nombre.toLowerCase().includes(texto.toLowerCase()) &&
      (categoria === '' || m.categoria_nombre === categoria)
  )

  // El título de la pestaña muestra cuántos insumos hay registrados.
  useEffect(() => {
    document.title = `Panel de insumos (${materiales.length}) — UrbanTrend`
    return () => {
      document.title = 'UrbanTrend'
    }
  }, [materiales.length])

  // Reponer: map() devuelve un arreglo nuevo con el stock de ese material + 10.
  const reponerStock = (id) => {
    const material = materiales.find((m) => m.id === id)
    avisar(`Se repusieron 10 ${material.unidad_medida.toLowerCase()} de ${material.nombre}`)
    setMateriales(
      materiales.map((material) =>
        material.id === id ? { ...material, stock: material.stock + 10 } : material
      )
    )
  }

  // Eliminar: filter() devuelve un arreglo nuevo sin ese material.
  const eliminarMaterial = (id) => {
    const material = materiales.find((m) => m.id === id)
    avisar(`Se eliminó ${material.nombre}`)
    setMateriales(materiales.filter((material) => material.id !== id))
  }

  // Alta: el formulario envía el registro y el padre le asigna un id y lo
  // agrega con un arreglo nuevo (spread), sin push.
  const agregarMaterial = (nuevo) => {
    const siguienteId = Math.max(0, ...materiales.map((m) => m.id)) + 1
    setMateriales([...materiales, { id: siguienteId, ...nuevo }])
    avisar(`Se registró ${nuevo.nombre}`)
  }

  return (
    <div className="contenedor panel">
      <h1 className="titulo">Panel de insumos textiles</h1>
      <ResumenMateriales materiales={materiales} />
      <FormularioMaterial onGuardar={agregarMaterial} />
      <FiltroMateriales
        texto={texto}
        categoria={categoria}
        onCambiarTexto={setTexto}
        onCambiarCategoria={setCategoria}
      />
      <ListadoMateriales
        materiales={visibles}
        onReponer={reponerStock}
        onEliminar={eliminarMaterial}
      />
      <Notificacion mensaje={mensaje} onCerrar={cerrarMensaje} />
    </div>
  )
}

export default PanelMateriales
