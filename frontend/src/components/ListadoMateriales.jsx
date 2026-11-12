import FilaMaterial from './FilaMaterial'

// Listado: recibe los materiales y las funciones del padre, y dibuja una
// fila por cada material. Solo pasa las funciones hacia abajo.
function ListadoMateriales({ materiales, onReponer, onEliminar }) {
  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Insumo</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {materiales.map((material) => (
          <FilaMaterial
            key={material.id}
            material={material}
            onReponer={onReponer}
            onEliminar={onEliminar}
          />
        ))}
      </tbody>
    </table>
  )
}

export default ListadoMateriales
