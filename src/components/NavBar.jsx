
import '../css/NavBar.css';
import CartWidget from './CartWidget';

const NavBar = () => {
  return (
    <header className="navbar">
      <div className="navbar-title">Tienda Moderna</div>

      <nav>
        <a href="#">Inicio</a>
        <a href="#">Catálogo</a>
        <a href="#">Contacto</a>
      </nav>

      <CartWidget />
    </header>
  );
};

export default NavBar;
