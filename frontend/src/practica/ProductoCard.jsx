// Hijo: recibe un producto y la función onAgregar del padre.
// No cambia nada por su cuenta: solo avisa que se hizo clic.
function ProductoCard({ producto, onAgregar }) {
  const agotado = producto.stock === 0

  return (
    <li className="tarjeta fila">
      <div>
        <strong>{producto.nombre}</strong> — S/ {Number(producto.precio).toFixed(2)}
        {agotado ? (
          <span className="etiqueta agotado">Agotado</span>
        ) : (
          <span className="etiqueta">Stock: {producto.stock}</span>
        )}
      </div>
      <button
        type="button"
        className="boton"
        disabled={agotado}
        onClick={() => onAgregar(producto)}
      >
        Agregar
      </button>
    </li>
  )
}

export default ProductoCard
