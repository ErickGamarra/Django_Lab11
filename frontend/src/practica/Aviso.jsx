import { useEffect } from 'react'

// Muestra "Agregado: <nombre>" y se cierra solo a los 3 segundos.
function Aviso({ aviso, onCerrar }) {
  useEffect(() => {
    if (!aviso) return

    const temporizador = setTimeout(() => {
      onCerrar()
    }, 3000)

    // Limpieza: si llega otro aviso antes de los 3 s (o el componente se
    // desmonta), se cancela el temporizador anterior.
    return () => clearTimeout(temporizador)
  }, [aviso, onCerrar])

  if (!aviso) return null

  return <div className="aviso">Agregado: {aviso.nombre}</div>
}

export default Aviso
