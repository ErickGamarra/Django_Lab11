// Fila del listado: muestra un material y avisa al padre con las funciones
// que recibe. La fila no toca el arreglo; solo envía el id.
function FilaMaterial({ material, onReponer, onEliminar }) {
  const sinStock = material.stock === 0

  return (
    <tr>
      <td>
        <strong>{material.nombre}</strong>
      </td>
      <td>{material.categoria_nombre}</td>
      <td>S/ {Number(material.precio_unitario).toFixed(2)}</td>
      <td>
        {material.stock} {material.unidad_medida.toLowerCase()}
        {sinStock && <span className="etiqueta agotado">Sin stock</span>}
      </td>
      <td className="acciones">
        <button type="button" className="boton" onClick={() => onReponer(material.id)}>
          Reponer +10
        </button>
        <button type="button" className="boton secundario" onClick={() => onEliminar(material.id)}>
          Eliminar
        </button>
      </td>
    </tr>
  )
}

export default FilaMaterial
