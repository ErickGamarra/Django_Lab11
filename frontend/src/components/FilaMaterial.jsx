// Fila del listado: solo muestra los datos de un material.
function FilaMaterial({ material }) {
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
    </tr>
  )
}

export default FilaMaterial
