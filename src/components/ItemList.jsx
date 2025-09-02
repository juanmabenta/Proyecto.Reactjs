// src/components/ItemList.jsx
import { Link } from 'react-router-dom'

export default function ItemList({ products }) {
  return (
    <ul style={{ listStyle: 'none', padding: 0, display:'grid', gap:12 }}>
      {products.map((p) => (
        <li key={p.id} style={{ border:'1px solid #eee', borderRadius:8, padding:12 }}>
          <Link to={`/item/${p.id}`} style={{ display:'flex', gap:12, alignItems:'center' }}>
            <img
              src={p.thumbnail}
              alt={p.title}
              width="96"
              height="72"
              style={{ objectFit:'cover', borderRadius:6 }}
            />
            <div>
              <strong>{p.title}</strong><br />
              <span>${p.price.toLocaleString('es-UY')}</span>
            </div>
          </Link>
        </li>
      ))}
    </ul>
  )
}
