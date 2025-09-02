// components/ItemCard.jsx
// Componente de presentación: muestra un producto individual y linkea a su detalle.
import { Link } from 'react-router-dom'

export default function ItemCard({ item }){
  return (
    <article className="card">
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      <div className="body">
        <h3>{item.title}</h3>
        <div className="badge">{item.category}</div>
        <div className="price">$ {item.price.toLocaleString('es-UY')}</div>
        {/* Link al detalle del producto usando su id */}
        <Link to={`/item/${item.id}`} className="btn" style={{marginTop:8}}>Ver detalle</Link>
      </div>
    </article>
  )
}
