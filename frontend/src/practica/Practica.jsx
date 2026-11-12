import Catalogo from './Catalogo'
import { productos } from './datos'

// Componente padre de la práctica: tiene los datos y los entrega por props.
function Practica() {
  // Por ahora solo comprobamos que el aviso del hijo llega al padre.
  const agregarAlCarrito = (producto) => {
    console.log('Agregar al carrito:', producto.nombre)
  }

  return (
    <div className="contenedor">
      <h1 className="titulo">Cafetería — Práctica Semana 11</h1>
      <Catalogo productos={productos} onAgregar={agregarAlCarrito} />
    </div>
  )
}

export default Practica
