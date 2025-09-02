// src/pages/NotFound.jsx
import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div style={{ padding: 24 }}>
      <h1>404</h1>
      <p>No encontramos la ruta solicitada.</p>
      <Link className="btn" to="/">Volver al inicio</Link>
    </div>
  )
}
