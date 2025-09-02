// src/components/ItemCount.jsx
import { useState } from 'react'

export default function ItemCount({ stock = 0, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial)

  const inc = () => setCount(c => Math.min(stock, c + 1))
  const dec = () => setCount(c => Math.max(1, c - 1))
  const add = () => onAdd?.(count)

  return (
    <div style={{display:'flex',alignItems:'center',gap:12,marginTop:12}}>
      <div style={{display:'inline-flex',alignItems:'center',gap:10,border:'1px solid #ddd',padding:'6px 10px',borderRadius:8}}>
        <button onClick={dec} disabled={count<=1}>-</button>
        <strong>{count}</strong>
        <button onClick={inc} disabled={count>=stock}>+</button>
      </div>
      <button onClick={add} disabled={!stock} className="btn">Agregar al carrito</button>
      {!stock && <small style={{opacity:.8}}>Sin stock</small>}
    </div>
  )
}
