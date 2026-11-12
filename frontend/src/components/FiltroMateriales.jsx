// Filtro controlado: los valores viven en el padre. Aquí solo se muestran
// y cada cambio se avisa con onCambiarTexto u onCambiarCategoria.
function FiltroMateriales({ texto, categoria, onCambiarTexto, onCambiarCategoria }) {
  return (
    <div className="filtro">
      <input
        type="search"
        placeholder="Buscar insumo por nombre..."
        value={texto}
        onChange={(e) => onCambiarTexto(e.target.value)}
      />
      <select value={categoria} onChange={(e) => onCambiarCategoria(e.target.value)}>
        <option value="">Todas las categorías</option>
        <option value="Telas y Tejidos">Telas y Tejidos</option>
        <option value="Avíos y Fornituras">Avíos y Fornituras</option>
        <option value="Hilados y Conos">Hilados y Conos</option>
      </select>
    </div>
  )
}

export default FiltroMateriales
