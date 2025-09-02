// src/components/ItemCard.jsx
import { Link } from 'react-router-dom'

export default function ItemCard({ item }) {
  return (
    <article className="card">
      <Link to={`/item/${item.id}`} style={{display:'block'}}>
        <img className="card-img" src={item.thumbnail} alt={item.title} loading="lazy" />
      </Link>
      <div className="card-body">
        <div className="card-sub">{item.category}</div>
        <div className="card-title">{item.title}</div>
        <div className="price">${item.price.toLocaleString('es-UY')}</div>
        <Link to={`/item/${item.id}`} className="btn" style={{justifySelf:'start'}}>Ver detalle</Link>
      </div>
    </article>
  )
}
