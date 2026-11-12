import ProductoCard from './ProductoCard'

// Recibe los productos y la función onAgregar; la pasa tal cual a cada tarjeta.
function Catalogo({ productos, onAgregar }) {
  return (
    <section>
      <h2>Catálogo</h2>
      <ul className="lista">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} onAgregar={onAgregar} />
        ))}
      </ul>
    </section>
  )
}

export default Catalogo
