import FilaMaterial from './FilaMaterial'

// Listado: recibe los materiales por props y dibuja una fila por cada uno.
function ListadoMateriales({ materiales }) {
  return (
    <table className="tabla">
      <thead>
        <tr>
          <th>Insumo</th>
          <th>Categoría</th>
          <th>Precio</th>
          <th>Stock</th>
        </tr>
      </thead>
      <tbody>
        {materiales.map((material) => (
          <FilaMaterial key={material.id} material={material} />
        ))}
      </tbody>
    </table>
  )
}

export default ListadoMateriales
