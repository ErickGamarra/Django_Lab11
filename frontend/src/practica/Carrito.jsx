// Hermano de Catalogo: no guarda nada, solo dibuja las líneas que recibe.
function Carrito({ lineas }) {
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
    </section>
  )
}

export default Carrito
