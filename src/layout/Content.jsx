import { Outlet } from "react-router";
import styles from '../styles/Content.module.css';

function Content(){
    return <main className={styles.content}>
            <Outlet />
      </main>
}

export default Content;