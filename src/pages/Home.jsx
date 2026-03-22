import { Link } from "react-router";
import { useProducts } from "../providers/products/useProducts";

function Home(){
    const products = useProducts();
    return <>
        <h2>Home</h2>
        <ul>
            {Object.entries(products).map(([id, product]) => {
                return <li key={id}>
                    <h3>{product.name}</h3>
                    <p><s>{product.price}</s></p>
                    <p>{(product.price * (1 - (product.discount  / 100))).toFixed(2)}</p>
                    <Link to={`/product/${id}`}>More</Link>
                </li>
            })}
        </ul>
    </>
}

export default Home;