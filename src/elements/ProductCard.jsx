import { Link } from "react-router";
import styles from '../styles/ProductCard.module.css';

function ProductCard({cardData: {id, title, price, category, image}}){
    return <div className={styles.card}>
        <img className={styles.image} src={image} alt="Product image" />
        <div className={styles['info-container']}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.category}>{category}</p>
            <div className={styles['price-container']}>
                <p className={styles.price}>$ {price}</p>
                <Link className={styles.view} to={`/product/${id}`}>View</Link>
            </div>
        </div>
    </div>
}

export default ProductCard;