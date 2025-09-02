// src/containers/ItemListContainer.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProducts, getProductsByCategory } from '../data/products'
import ItemList from '../components/ItemList'

export default function ItemListContainer({ greeting }) {
  const { categoryId } = useParams()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let active = true
    setLoading(true)
    setError(null)

    const fetcher = categoryId ? getProductsByCategory(categoryId) : getProducts()

    fetcher
      .then(res => { if (active) setItems(res) })
      .catch(err => { if (active) setError(err.message) })
      .finally(() => { if (active) setLoading(false) })

    return () => { active = false }
  }, [categoryId])

  if (loading) return <p style={{ padding: 16 }}>Cargando productos...</p>
  if (error) return <p style={{ padding: 16, color: 'tomato' }}>Error: {error}</p>

  return (
    <main style={{ padding: 20 }}>
      {greeting && <h2>{greeting}</h2>}
      {categoryId && <h3>Categoría: {categoryId}</h3>}
      <ItemList products={items} />
    </main>
  )
}
