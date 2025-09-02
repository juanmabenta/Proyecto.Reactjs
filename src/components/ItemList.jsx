// src/components/ItemList.jsx
import ItemCard from './ItemCard'

export default function ItemList({ products }) {
  if (!products?.length) return <div className="empty">No hay productos para esta categoría.</div>

  return (
    <section className="grid">
      {products.map(p => <ItemCard key={p.id} item={p} />)}
    </section>
  )
}
