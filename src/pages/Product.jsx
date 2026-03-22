 import { Link, useParams } from "react-router";
import { useProducts } from "../providers/products/useProducts";
import { useCart } from "../providers/cart/useCart";

function Product(){
    const { id } = useParams();
    const product = useProducts()?.[id];
    const {updateCart, isInCart} = useCart();
    return <>
        <h2>{product.name}</h2>
        <p><s>{product.price}</s></p>
        <p>{(product.price * (1 - (product.discount  / 100))).toFixed(2)}</p>
        {isInCart(id)
            ? <Link to='/cart'>In Cart</Link>
            : <button onClick={() => updateCart(id, 1)} >Add to Cart</button>
        }
        <Link to='/'>Back to home</Link>
    </>
}

export default Product;