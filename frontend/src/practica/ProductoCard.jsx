// Hijo: recibe un solo producto por props y solo lo muestra.
function ProductoCard({ producto }) {
  const agotado = producto.stock === 0

  return (
    <li className="tarjeta">
      <strong>{producto.nombre}</strong> — S/ {Number(producto.precio).toFixed(2)}
      {agotado ? (
        <span className="etiqueta agotado">Agotado</span>
      ) : (
        <span className="etiqueta">Stock: {producto.stock}</span>
      )}
    </li>
  )
}

export default ProductoCard
