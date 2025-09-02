// src/data/products.js
// Importo las imágenes locales
import prenda1 from '../assets/prenda1.jpg'
import prenda2 from '../assets/prenda2.jpg'
import prenda3 from '../assets/prenda3.jpg'
import prenda4 from '../assets/prenda4.jpg'
import prenda5 from '../assets/prenda5.jpg'
import prenda6 from '../assets/prenda6.jpg'
const _products = [
  // REMERAS
  {
    id: 'r1',
    title: 'Remera gris estmpada',
    price: 1290,
    stock: 12,
    category: 'remeras',
    thumbnail: prenda1
  },
  {
    id: 'r2',
    title: 'remera negra',
    price: 990,
    stock: 20,
    category: 'remeras',
    thumbnail: prenda5
  },

  // PANTALONES
  {
    id: 'p1',
    title: 'Pantalon marron',
    price: 2590,
    stock: 8,
    category: 'pantalones',
    thumbnail: prenda4
  },
  {
    id: 'p2',
    title: 'Pantalon negro',
    price: 2890,
    stock: 10,
    category: 'pantalones',
    thumbnail: prenda2
  },

  // ACCESORIOS
  {
    id: 'a1',
    title: 'Gorra azul',
    price: 690,
    stock: 30,
    category: 'accesorios',
    thumbnail: prenda6
  },
  {
    id: 'a2',
    title: 'Cinturon negro',
    price: 1590,
    stock: 14,
    category: 'accesorios',
    thumbnail: prenda3
  }
]

// Helpers y exports (igual que antes)
const delay = (ms) => new Promise(res => setTimeout(res, ms))

export async function getProducts() {
  await delay(700)
  return _products
}

export async function getProductsByCategory(categoryId) {
  await delay(700)
  return _products.filter(p => p.category === categoryId)
}

export async function getProductById(id) {
  await delay(600)
  const prod = _products.find(p => p.id === id)
  if (!prod) throw new Error('Producto no encontrado')
  return prod
}
