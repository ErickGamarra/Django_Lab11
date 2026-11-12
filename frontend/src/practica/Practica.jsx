import Catalogo from './Catalogo'
import { productos } from './datos'

// Componente padre de la práctica: tiene los datos y los entrega por props.
function Practica() {
  return (
    <div className="contenedor">
      <h1 className="titulo">Cafetería — Práctica Semana 11</h1>
      <Catalogo productos={productos} />
    </div>
  )
}

export default Practica
