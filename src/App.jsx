import { Link, Outlet } from 'react-router'
import './App.css'
import ProductsProvider from './providers/products/ProductProvider'
import CartProvider from './providers/cart/CartProvider'

function App() {
  return (
    <>
      <header>
        <h1>Shopping app name</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/cart'>Cart</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <ProductsProvider>
          <CartProvider>
            <Outlet />
          </CartProvider>
        </ProductsProvider>
      </main>
      <footer>
        2026 © Shopping app name
      </footer>
    </>
  )
}

export default App
