import { Link } from "react-router";
import { useProducts } from "../providers/products/useProducts";

import styles from '../styles/Home.module.css';
import ProductCard from "../elements/ProductCard";

function Home(){
    const products = useProducts();
    return <ul className={styles['card-grid']}>
            {products.map((product) => {
                return <li key={product.id}>
                    <ProductCard cardData={product} />
                </li>
            })}
        </ul>
}

export default Home;