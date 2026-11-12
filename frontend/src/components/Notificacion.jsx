import { useEffect } from 'react'

// Mensaje corto que desaparece a los 3 segundos.
function Notificacion({ mensaje, onCerrar }) {
  useEffect(() => {
    if (!mensaje) return

    const temporizador = setTimeout(onCerrar, 3000)
    // Limpieza: si llega otro mensaje antes, se cancela el temporizador anterior.
    return () => clearTimeout(temporizador)
  }, [mensaje, onCerrar])

  if (!mensaje) return null

  return <div className="aviso">{mensaje.texto}</div>
}

export default Notificacion
