import { useState } from 'react'
import './App.css'
import Practica from './practica/Practica'
import Lab10 from './Lab10'

// Menú simple para cambiar entre la práctica de la Semana 11 y lo hecho en el Lab 10.
const vistas = [
  { id: 'practica', texto: 'Parte 1 · Práctica' },
  { id: 'lab10', texto: 'Laboratorio 10' },
]

function App() {
  const [vista, setVista] = useState('practica')

  return (
    <>
      <nav className="menu">
        <span className="menu-marca">UrbanTrend</span>
        {vistas.map((v) => (
          <button
            key={v.id}
            type="button"
            className={vista === v.id ? 'activo' : ''}
            onClick={() => setVista(v.id)}
          >
            {v.texto}
          </button>
        ))}
      </nav>
      {vista === 'practica' && <Practica />}
      {vista === 'lab10' && <Lab10 />}
    </>
  )
}

export default App
