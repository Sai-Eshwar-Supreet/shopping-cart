import { useProducts } from "../providers/products/useProducts";

import styles from '../styles/Home.module.css';
import ProductCard from "../elements/ProductCard";
import { useCart } from "../providers/cart/useCart";

function Shop(){
    const products = useProducts();
    const {isInCart} = useCart();
    return <ul className={styles['card-grid']}>
            {products.map((product) => {
                return <li key={product.id}>
                    <ProductCard isInCart={isInCart(product.id)} cardData={product} />
                </li>
            })}
        </ul>
}

export default Shop;