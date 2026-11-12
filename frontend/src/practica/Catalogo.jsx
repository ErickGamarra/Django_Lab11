import ProductoCard from './ProductoCard'

// Recibe el arreglo de productos del padre y dibuja una tarjeta por cada uno.
function Catalogo({ productos }) {
  return (
    <section>
      <h2>Catálogo</h2>
      <ul className="lista">
        {productos.map((producto) => (
          <ProductoCard key={producto.id} producto={producto} />
        ))}
      </ul>
    </section>
  )
}

export default Catalogo
