// src/data/products.js

// Array de productos de ejemplo (personalizalo con los tuyos)
const _products = [
  {
    id: 'r1',
    title: 'Remera Oversize',
    price: 1290,
    stock: 12,
    category: 'remeras',
    thumbnail: 'https://picsum.photos/seed/r1/400/300'
  },
  {
    id: 'r2',
    title: 'Remera Básica',
    price: 990,
    stock: 20,
    category: 'remeras',
    thumbnail: 'https://picsum.photos/seed/r2/400/300'
  },
  {
    id: 'p1',
    title: 'Pantalón Cargo',
    price: 2590,
    stock: 8,
    category: 'pantalones',
    thumbnail: 'https://picsum.photos/seed/p1/400/300'
  },
  {
    id: 'a1',
    title: 'Gorra Clásica',
    price: 690,
    stock: 30,
    category: 'accesorios',
    thumbnail: 'https://picsum.photos/seed/a1/400/300'
  }
]

// helper para simular retardo
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
