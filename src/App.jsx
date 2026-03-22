import './App.css'
import BaseLayout from './BaseLayout';
import CartProvider from './providers/cart/CartProvider';
import ProductsProvider from './providers/products/ProductProvider';

function App() {
  return (
    <ProductsProvider>
      <CartProvider>
        <BaseLayout />
      </CartProvider>
    </ ProductsProvider>
  )
}

export default App
