import { useState } from 'react'
import Catalogo from './Catalogo'
import Carrito from './Carrito'
import { productos } from './datos'

// Componente padre de la práctica. El carrito vive aquí porque lo usan
// dos hermanos: Catalogo (agrega) y Carrito (muestra).
function Practica() {
  const [carrito, setCarrito] = useState([])

  const agregarAlCarrito = (producto) => {
    const existe = carrito.some((linea) => linea.id === producto.id)

    if (existe) {
      // Ya está: se suma 1 a esa línea y se devuelve un arreglo nuevo.
      setCarrito(
        carrito.map((linea) =>
          linea.id === producto.id ? { ...linea, cantidad: linea.cantidad + 1 } : linea
        )
      )
    } else {
      // No está: se copia el arreglo y se agrega la línea al final (sin push).
      setCarrito([
        ...carrito,
        { id: producto.id, nombre: producto.nombre, precio: producto.precio, cantidad: 1 },
      ])
    }
  }

  // El hijo avisa qué id quitar; el padre crea un arreglo nuevo sin esa línea.
  const quitarDelCarrito = (id) => {
    setCarrito(carrito.filter((linea) => linea.id !== id))
  }

  const vaciarCarrito = () => {
    setCarrito([])
  }

  return (
    <div className="contenedor">
      <h1 className="titulo">Cafetería — Práctica Semana 11</h1>
      <div className="dos-columnas">
        <Catalogo productos={productos} onAgregar={agregarAlCarrito} />
        <Carrito lineas={carrito} onQuitar={quitarDelCarrito} onVaciar={vaciarCarrito} />
      </div>
    </div>
  )
}

export default Practica
