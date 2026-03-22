import { Link } from "react-router";
import { useCart } from "../providers/cart/useCart";
import { useProducts } from "../providers/products/useProducts";
import CountField from "../utils/components/CountField";

function buildCartData(all, cart){
    const list = [];
    let total = 0;
    for(let [id, count] of Object.entries(cart)){
        const product = all[id];
        
        if(!product){
            throw new Error('Product in the cart is not a valid product');
        }

        const unitPrice = (product.price * (1 - product.discount / 100));
        const price = (unitPrice * count);
        total += price;
        const data = {
            id,
            name: product.name,
            count,
            unitPrice,
            price,
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
                    <p>{item.name} x {item.count} | {item.unitPrice.toFixed(2)} x {item.count} | {item.price.toFixed(2)}</p>
                    <CountField value={item.count} handleChange={ (value) => cart.updateCart(item.id, value) } />
                    <button onClick={() => cart.removeFromCart(item.id)} >Delete</button>
                </li>
            })}
        </ul>
        <p>{total.toFixed(2)}</p>
        <Link to='/'>Back to home</Link>
    </>
}

export default Cart;