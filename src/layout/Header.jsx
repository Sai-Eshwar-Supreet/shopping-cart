import { Link, NavLink } from "react-router";
import { useCart } from "../providers/cart/useCart";

import styles from '../styles/Header.module.css';

function Header(){  
  const count = useCart().getTotalCount();

    return <header className={styles.header}>
        <h1 className={styles.title}>Fake store</h1>
        <nav className={styles['tab-container']}>
            <NavLink to='/' className={({isActive}) => isActive ? `${styles.tab} ${styles.active}`: `${styles.tab}`}>Shop</NavLink>
            <NavLink to='/cart' className={({isActive}) => isActive ? `${styles.tab} ${styles.active}`: `${styles.tab}`}>Cart <span className={styles.badge}>{count}</span></NavLink>
        </nav>
      </header>
}

export default Header;