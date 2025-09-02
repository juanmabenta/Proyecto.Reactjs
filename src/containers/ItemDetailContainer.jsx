// src/containers/ItemDetailContainer.jsx
// Obtiene un producto por id y muestra su vista en detalle.

import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { getProductById } from '../data/products'
import ItemCount from '../components/ItemCount'

export default function ItemDetailContainer(){
  const { id } = useParams()

  const [item, setItem] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [added, setAdded] = useState(0)

  useEffect(() => {
    setLoading(true)
    setError(null)

    getProductById(id)
      .then(setItem)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [id])

  function handleAdd(qty){
    setAdded(qty)
    // TODO: luego integrarlo con el contexto/estado global de carrito
  }

  if (loading) return <p style={{ padding: 16 }}>Cargando detalle...</p>
  if (error) return <p style={{ padding: 16, color: 'tomato' }}>Hubo un error: {error}</p>
  if (!item) return null

  return (
    <article style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:24, padding: 20}}>
      <img src={item.thumbnail} alt={item.title} style={{width:'100%',borderRadius:14}} />
      <div>
        <Link to="/" className="btn" style={{marginBottom:12, display:'inline-block'}}>← Volver</Link>
        <h1 style={{marginTop:6}}>{item.title}</h1>
        <div className="badge">{item.category}</div>
        <p className="price" style={{fontSize:24}}>$ {item.price.toLocaleString('es-UY')}</p>
        <p>Stock: {item.stock}</p>

        {added === 0 ? (
          <ItemCount stock={item.stock} initial={1} onAdd={handleAdd} />
        ) : (
          <div style={{display:'flex',gap:12,marginTop:10}}>
            <span>Agregaste {added} unidad(es).</span>
            <button className="btn">Ir al carrito</button>
          </div>
        )}
      </div>
    </article>
  )
}
