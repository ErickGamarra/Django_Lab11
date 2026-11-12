// Hermano de Catalogo: no guarda nada, dibuja las líneas que recibe y
// avisa al padre cuando se quiere quitar una línea o vaciar el carrito.
function Carrito({ lineas, onQuitar, onVaciar }) {
  // Datos derivados: se calculan en cada render a partir de las líneas.
  const total = lineas.reduce((suma, linea) => suma + Number(linea.precio) * linea.cantidad, 0)
  const unidades = lineas.reduce((suma, linea) => suma + linea.cantidad, 0)

  return (
    <section className="carrito">
      <h2>Carrito</h2>

      {lineas.length === 0 && <p className="vacio">El carrito está vacío</p>}

      <ul className="lista">
        {lineas.map((linea) => (
          <li key={linea.id} className="tarjeta fila">
            <span>
              {linea.cantidad} × {linea.nombre} — S/ {Number(linea.precio).toFixed(2)}
            </span>
            <button type="button" className="boton secundario" onClick={() => onQuitar(linea.id)}>
              Quitar
            </button>
          </li>
        ))}
      </ul>

      {lineas.length > 0 && (
        <>
          <p className="resumen">
            Unidades: <strong>{unidades}</strong>
            <br />
            Total: <strong>S/ {total.toFixed(2)}</strong>
          </p>
          <button type="button" className="boton secundario" onClick={onVaciar}>
            Vaciar carrito
          </button>
        </>
      )}
    </section>
  )
}

export default Carrito
