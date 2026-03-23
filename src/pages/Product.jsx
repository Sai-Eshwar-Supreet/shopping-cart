 import { Link, useParams } from "react-router";
import { useProducts } from "../providers/products/useProducts";
import { useCart } from "../providers/cart/useCart";

import styles from '../styles/Product.module.css';
import CountField from "../utils/components/CountField";

function Product(){
    const { id } = useParams();
    const product = useProducts().find(product => product.id === parseInt(id));
    const {updateCart, isInCart, getCount, removeFromCart} = useCart();

    if(!product) return <p>Product not available</p>

    return <div className={styles.details}>
            <div className={styles.header}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.category}>{product.category}</p>
            </div>
            <div className={styles['details-container']}>
                <img className={styles.image} src={product.image} alt="Product image" />
                <div className={styles['info-container']}>
                    <p className={styles.price}>$ {product.price}</p>
                    {isInCart(id)
                        ? <>
                            <CountField value={getCount(product.id)} handleChange={(value) => updateCart(id, value)} />
                            <button onClick={() => removeFromCart(id)}>Remove from cart</button>
                        </>
                        : <button onClick={() => updateCart(id, 1)} >Add to Cart</button>
                    }
                    <p>
                        {product.description}
                    </p>
                </div>
            </div>
        </div>
}

export default Product;