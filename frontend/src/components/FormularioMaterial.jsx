import { useState } from 'react'

const categorias = [
  { id: 1, nombre: 'Telas y Tejidos' },
  { id: 2, nombre: 'Avíos y Fornituras' },
  { id: 3, nombre: 'Hilados y Conos' },
]

const vacio = { nombre: '', categoria: '1', unidad_medida: 'Metros', precio_unitario: '', stock: '' }

// Formulario de alta: los campos son controlados y el registro nuevo se
// entrega al padre con onGuardar. El formulario no toca la lista.
function FormularioMaterial({ onGuardar }) {
  const [campos, setCampos] = useState(vacio)
  const [error, setError] = useState('')

  const cambiar = (e) => {
    setCampos({ ...campos, [e.target.name]: e.target.value })
  }

  const enviar = (e) => {
    e.preventDefault()

    // Mismas reglas que la API de la Semana 8 (MaterialSerializer y el modelo).
    if (campos.nombre.trim() === '') {
      setError('El nombre del insumo es obligatorio.')
      return
    }
    const precio = Number(campos.precio_unitario)
    if (campos.precio_unitario === '' || precio <= 0) {
      setError('El precio unitario del insumo debe ser mayor que cero (S/ 0.00).')
      return
    }
    const stock = Number(campos.stock)
    if (campos.stock === '' || !Number.isInteger(stock) || stock < 0) {
      setError('El stock debe ser un número entero igual o mayor que cero.')
      return
    }

    const categoria = categorias.find((c) => c.id === Number(campos.categoria))
    onGuardar({
      categoria: categoria.id,
      categoria_nombre: categoria.nombre,
      nombre: campos.nombre.trim(),
      unidad_medida: campos.unidad_medida,
      precio_unitario: precio.toFixed(2), // como texto, igual que la API
      stock,
    })

    setCampos(vacio)
    setError('')
  }

  return (
    <form className="formulario" onSubmit={enviar} noValidate>
      <h2>Registrar insumo</h2>
      {error && <p className="error">{error}</p>}

      <label>
        Nombre
        <input name="nombre" value={campos.nombre} onChange={cambiar} placeholder="Ej. Tela Jersey 30/1 Blanco" />
      </label>
      <label>
        Categoría
        <select name="categoria" value={campos.categoria} onChange={cambiar}>
          {categorias.map((c) => (
            <option key={c.id} value={c.id}>
              {c.nombre}
            </option>
          ))}
        </select>
      </label>
      <label>
        Unidad
        <select name="unidad_medida" value={campos.unidad_medida} onChange={cambiar}>
          <option>Metros</option>
          <option>Piezas</option>
          <option>Conos</option>
          <option>Kilos</option>
        </select>
      </label>
      <label>
        Precio (S/)
        <input name="precio_unitario" type="number" step="0.01" value={campos.precio_unitario} onChange={cambiar} />
      </label>
      <label>
        Stock
        <input name="stock" type="number" value={campos.stock} onChange={cambiar} />
      </label>

      <button type="submit" className="boton">Guardar</button>
    </form>
  )
}

export default FormularioMaterial
