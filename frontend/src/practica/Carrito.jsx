// Hermano de Catalogo: no guarda nada, solo dibuja las líneas que recibe.
function Carrito({ lineas }) {
  // Datos derivados: se calculan en cada render a partir de las líneas.
  const total = lineas.reduce((suma, linea) => suma + Number(linea.precio) * linea.cantidad, 0)
  const unidades = lineas.reduce((suma, linea) => suma + linea.cantidad, 0)

  return (
    <section className="carrito">
      <h2>Carrito</h2>
      <ul className="lista">
        {lineas.map((linea) => (
          <li key={linea.id} className="tarjeta">
            {linea.cantidad} × {linea.nombre} — S/ {Number(linea.precio).toFixed(2)}
          </li>
        ))}
      </ul>
      <p className="resumen">
        Unidades: <strong>{unidades}</strong>
        <br />
        Total: <strong>S/ {total.toFixed(2)}</strong>
      </p>
    </section>
  )
}

export default Carrito
