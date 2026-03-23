import { createBrowserRouter } from "react-router";
import App from './App.jsx';
import Cart from './pages/Cart.jsx';
import Product from './pages/Product.jsx';
import Shop from "./pages/Shop.jsx";
import Home from "./pages/Home.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";

export const routes = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Shop />
      },
      {
        path: 'cart',
        element: <Cart />
      },
      {
        path: 'product/:id',
        element: <Product />
      },
    ]
  }
])