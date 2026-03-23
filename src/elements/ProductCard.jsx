import { Link } from "react-router";
import styles from '../styles/ProductCard.module.css';

function ProductCard({cardData: {id, title, price, category, image}, isInCart}){
        
    return <Link className={styles.card} to={`/product/${id}`}>
        {isInCart && <p className={styles.badge}>In cart</p>}
        <div className={styles['image-container']}><img className={styles.image} src={image} alt="Product image" /></div>
        <div className={styles['info-container']}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.category}>{category}</p>
            <div className={styles['price-container']}>
                <p className={styles.price}>$ {price}</p>
            </div>
        </div>
    </Link>
}

export default ProductCard;