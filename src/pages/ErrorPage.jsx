import { Link } from "react-router";
import styles from '../styles/ErrorPage.module.css'
import { ICONS } from "../utils/components/icons/Icons";

function ErrorPage(){
    return <div className={styles['error-container']}>
        <p className={styles.message}> <span className={styles.sign}>{ICONS.error}</span>The requested page doesn't exist</p>
        <Link className={styles.return} to='/'>Return to home</Link>
    </div>
}

export default ErrorPage;