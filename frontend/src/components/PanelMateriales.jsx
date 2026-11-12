import { useState } from 'react'
import ListadoMateriales from './ListadoMateriales'

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

  // Reponer: map() devuelve un arreglo nuevo con el stock de ese material + 10.
  const reponerStock = (id) => {
    setMateriales(
      materiales.map((material) =>
        material.id === id ? { ...material, stock: material.stock + 10 } : material
      )
    )
  }

  // Eliminar: filter() devuelve un arreglo nuevo sin ese material.
  const eliminarMaterial = (id) => {
    setMateriales(materiales.filter((material) => material.id !== id))
  }

  return (
    <div className="contenedor panel">
      <h1 className="titulo">Panel de insumos textiles</h1>
      <ListadoMateriales
        materiales={materiales}
        onReponer={reponerStock}
        onEliminar={eliminarMaterial}
      />
    </div>
  )
}

export default PanelMateriales
