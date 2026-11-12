// Hermano del listado: recibe el mismo arreglo y calcula todo al dibujar.
// No tiene useState: si cambia la lista, el resumen se recalcula solo.
function ResumenMateriales({ materiales }) {
  const registros = materiales.length
  const sinStock = materiales.filter((m) => m.stock === 0).length
  const valorInventario = materiales.reduce(
    (suma, m) => suma + Number(m.precio_unitario) * m.stock,
    0
  )
  const precioPromedio = registros === 0
    ? 0
    : materiales.reduce((suma, m) => suma + Number(m.precio_unitario), 0) / registros

  return (
    <div className="resumen-panel">
      <div>
        <span>Insumos registrados</span>
        <strong>{registros}</strong>
      </div>
      <div>
        <span>Sin stock</span>
        <strong className={sinStock > 0 ? 'alerta-texto' : ''}>{sinStock}</strong>
      </div>
      <div>
        <span>Precio promedio</span>
        <strong>S/ {precioPromedio.toFixed(2)}</strong>
      </div>
      <div>
        <span>Valor del inventario</span>
        <strong>S/ {valorInventario.toFixed(2)}</strong>
      </div>
    </div>
  )
}

export default ResumenMateriales
