// src/components/NavBar.jsx
import '../css/NavBar.css'
import CartWidget from './CartWidget'
import { NavLink, Link } from 'react-router-dom'

const categories = [
  { id: 'remeras', label: 'Remeras' },
  { id: 'pantalones', label: 'Pantalones' },
  { id: 'accesorios', label: 'Accesorios' },
]

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">
        <Link to="/">Tienda Moderna</Link>
      </div>
      <nav>
        {categories.map((c) => (
          <NavLink
            key={c.id}
            to={`/category/${c.id}`}
            className={({ isActive }) => (isActive ? 'active' : undefined)}
          >
            {c.label}
          </NavLink>
        ))}
      </nav>
      <CartWidget />
    </header>
  )
}

export default NavBar
