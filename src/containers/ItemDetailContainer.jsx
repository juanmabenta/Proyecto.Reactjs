// src/containers/ItemDetailContainer.jsx
// Detalle con skeleton loader y estilos unificados

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import ItemCount from '../components/ItemCount'

export default function ItemDetailContainer() {
  const { id } = useParams()

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [added, setAdded] = useState(0)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)

    getProductById(id)
      .then((res) => { if (active) setItem(res) })
      .catch((err) => { if (active) setError(err.message) })
      .finally(() => { if (active) setLoading(false) })

    return () => { active = false }
  }, [id])

  function handleAdd(qty) {
    setAdded(qty)
    // TODO: integrar con contexto/estado global de carrito en próximas entregas
  }

  // ⏳ Skeleton Loader (coincide con layout .detail)
  if (loading) {
    return (
      <main style={{ padding: 20 }}>
        <article className="detail">
          {/* columna imagen */}
          <div className="skel" style={{ width: '100%', aspectRatio: '4/5' }} />
          {/* columna info */}
          <div style={{ display: 'grid', gap: 12 }}>
            <div className="skel" style={{ width: 120, height: 36 }} />
            <div className="skel" style={{ width: '60%', height: 28 }} />
            <div className="skel" style={{ width: 90, height: 24 }} />
            <div className="skel" style={{ width: 140, height: 28 }} />
            <div className="skel" style={{ width: 100, height: 22 }} />
            <div className="skel" style={{ width: 220, height: 44, marginTop: 8 }} />
          </div>
        </article>
      </main>
    )
  }

  // ❌ Error
  if (error) {
    return (
      <main style={{ padding: 16 }}>
        <p style={{ color: 'tomato' }}>Hubo un error: {error}</p>
        <Link to="/" className="btn" style={{ marginTop: 10, display: 'inline-block' }}>
          ← Volver
        </Link>
      </main>
    )
  }

  // ⛔ Sin item (caso borde)
  if (!item) return null

  // ✅ Detalle listo
  return (
    <main style={{ padding: 20 }}>
      <article className="detail">
        <img src={item.thumbnail} alt={item.title} />

        <div>
          <Link to="/" className="btn" style={{ marginBottom: 12, display: 'inline-block' }}>
            ← Volver
          </Link>

          <h1 style={{ marginTop: 6 }}>{item.title}</h1>
          <div className="badge">{item.category}</div>

          <p className="price" style={{ fontSize: 24 }}>
            $ {item.price.toLocaleString('es-UY')}
          </p>
          <p>Stock: {item.stock}</p>

          {added === 0 ? (
            <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
          ) : (
            <div style={{ display: 'flex', gap: 12, marginTop: 10 }}>
              <span>Agregaste {added} unidad(es).</span>
              <button className="btn primary">Ir al carrito</button>
            </div>
          )}
        </div>
      </article>
    </main>
  )
}
