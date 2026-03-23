import { Link } from "react-router";
import { useProducts } from "../providers/products/useProducts";

import styles from '../styles/Home.module.css';

function Home(){
    const products = useProducts();
    return <ul className={styles['card-grid']}>
            {products.map(({id, title, price, category, image}) => {
                return <li key={id}>
                    <h3>{title}</h3>
                    <p>{price}</p>
                    <p>{category}</p>
                    <img src={image} alt="Product image" />
                    <Link to={`/product/${id}`}>More</Link>
                </li>
            })}
        </ul>
}

export default Home;