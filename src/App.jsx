import './App.css'
import Carrito from './components/Carrito'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'

function App() {


  return (
    <>
      <Navbar />
      <div className='container mx-5 md:mx-auto z-50'>
        <ProductCard />
      </div>

    </>
  )
}

export default App
