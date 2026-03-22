import { createBrowserRouter } from "react-router";
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Cart from './pages/Cart.jsx';
import About from './pages/About.jsx';
import Product from './pages/Product.jsx';

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'product/:id',
        element: <Product />
      },
    ]
  }
])