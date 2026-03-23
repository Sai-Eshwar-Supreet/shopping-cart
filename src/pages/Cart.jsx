import { useCart } from "../providers/cart/useCart";
import { useProducts } from "../providers/products/useProducts";
import CountField from "../utils/components/CountField";

import styles from '../styles/Cart.module.css';
import { ICONS } from "../utils/components/icons/Icons";
import { Link } from "react-router";

function buildCartData(all, cart){
    const list = [];
    let total = 0;
    for(let [id, count] of Object.entries(cart)){
        const product = all.find(item => item.id === parseInt(id));
        
        if(!product){
            throw new Error('Product in the cart is not a valid product');
        }
        total += product.price;

        const data = {
            id,
            title: product.title,
            count,
            price : product.price,
            image: product.image,
        }

        list.push(data);
    }

    return {list, total};
}

function Cart(){
    const cart = useCart();
    const products = useProducts();

    const {list, total} = buildCartData(products, cart.getCartItems());

    return <div className={styles.cart}>
        <h2 className={styles.header}>Cart</h2>
        <div className={styles.container}>
            <ul className={styles['cart-container']}>
                {list.map(item => {
                    return <li className={styles.item} key={item.id}>
                        <img className={styles.image} src={item.image} alt="Product image" />
                        <Link to={`/product/${item.id}`} >
                            <p className={styles.title}>{item.title}</p>
                        </Link>
                        <p className={styles.count}>x{item.count}</p>
                        <p className={styles.price}>${item.price.toFixed(2)}</p>
                        <CountField value={item.count} handleChange={ (value) => cart.updateCart(item.id, value) } />
                        <button className={styles.delete} onClick={() => cart.removeFromCart(item.id)} >{ICONS.delete}</button>
                    </li>
                })}
            </ul>
            <div className={styles['purchase-container']}>
                <p className={styles.total}>Total: ${total.toFixed(2)}</p>
                <button className={styles.cta} onClick={() => cart.clearCart()}>Proceed to purchase</button>
            </div>
        </div>
    </div>
}

export default Cart;