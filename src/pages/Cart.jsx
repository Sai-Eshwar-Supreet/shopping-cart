import { Link } from "react-router";
import { useCart } from "../providers/cart/useCart";
import { useProducts } from "../providers/products/useProducts";
import CountField from "../utils/components/CountField";

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
        }

        list.push(data);
    }

    return {list, total};
}

function Cart(){
    const cart = useCart();
    const products = useProducts();

    const {list, total} = buildCartData(products, cart.getCartItems());

    return <>
        <h2>Cart</h2>
        <ul>
            {list.map(item => {
                return <li key={item.id}>
                    <p>{item.title} x {item.count} | {item.price.toFixed(2)}</p>
                    <CountField value={item.count} handleChange={ (value) => cart.updateCart(item.id, value) } />
                    <button onClick={() => cart.removeFromCart(item.id)} >Delete</button>
                </li>
            })}
        </ul>
        <p>{total.toFixed(2)}</p>
    </>
}

export default Cart;