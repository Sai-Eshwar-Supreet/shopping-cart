import { Link } from "react-router";
import { useCart } from "../providers/cart/useCart";

function Header(){  
  const count = useCart().getCount();

    return <header>
        <h1>Shopping app name</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/cart'>Cart {count}</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </nav>
      </header>
}

export default Header;