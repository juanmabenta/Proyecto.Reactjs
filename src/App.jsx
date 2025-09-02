// src/App.jsx
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import ItemListContainer from './containers/ItemListContainer.jsx'
import ItemDetailContainer from './containers/ItemDetailContainer.jsx'
import NotFound from './pages/NotFound.jsx'

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting="¡Bienvenido a nuestra tienda de ropa!" />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App
