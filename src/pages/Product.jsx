 import { useParams } from "react-router";
import { useProducts } from "../providers/products/useProducts";
import { useCart } from "../providers/cart/useCart";

import styles from '../styles/Product.module.css';
import CountField from "../utils/components/CountField";
import { ICONS } from "../utils/components/icons/Icons";

function Product(){
    const { id } = useParams();
    const product = useProducts().find(product => product.id === parseInt(id));
    const {updateCart, isInCart, getCount, removeFromCart} = useCart();

    if(!product) return <p>Product not available</p>

    return <div className={styles.card}>
            <img className={styles.image} src={product.image} alt="Product image" />
            <div className={styles['info-container']}>
                <h3 className={styles.title}>{product.title}</h3>
                <p className={styles.category}>{product.category}</p>
                <p>{product.description}</p>
                <p className={styles.price}>$ {product.price}</p>
                <div className={styles['input-container']}>
                    {isInCart(id)
                        ? <>
                            <CountField value={getCount(product.id)} handleChange={(value) => updateCart(id, value)} />
                            <button className={styles.delete} onClick={() => removeFromCart(id)}>Remove from cart</button>
                        </>
                        : <button className={styles.add} onClick={() => updateCart(id, 1)} >Add to Cart</button>
                    }
                </div>
            </div>
        </div>
}

export default Product;