// Campo controlado: el texto lo guarda el padre. Este componente solo
// muestra el valor que recibe y avisa cada cambio con onCambiar.
function Buscador({ valor, onCambiar }) {
  return (
    <input
      type="search"
      className="buscador"
      placeholder="Buscar producto..."
      value={valor}
      onChange={(e) => onCambiar(e.target.value)}
    />
  )
}

export default Buscador
