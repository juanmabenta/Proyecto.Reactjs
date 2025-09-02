# NavegaLasRutas+Benta

Entrega 2 - React

## 🚀 Demo
👉 [Ver online](https://juanmabenta.github.io/Proyecto.Reactjs/)

## 📂 Repositorio
👉 [GitHub](https://github.com/juanmabenta/Proyecto.Reactjs)

## 📌 Lo implementado
- Rutas con **React Router**:
  - `/` catálogo
  - `/category/:categoryId` catálogo filtrado
  - `/item/:id` detalle
  - `*` página 404
- **NavBar** con enlaces a categorías.
- **Contenedores**: `ItemListContainer`, `ItemDetailContainer`.
- **Presentacionales**: `ItemList`, `ItemCard`, `ItemCount`, `NavBar`.
- **useParams()** para leer parámetros de URL.
- **map + key** para renderizar listas.
- **Promesas con retardo** para simular fetch de productos.
- **ItemCount** dentro del detalle.

## 🛠️ Correr en local
```bash
npm install
npm run dev
