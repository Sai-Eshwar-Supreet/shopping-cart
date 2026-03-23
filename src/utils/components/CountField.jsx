import styles from '../../styles/CountField.module.css';
import { ICONS } from './icons/Icons';

function CountField({value, handleChange}){
    return <div className={styles['count-field']}>
                <button className={styles.btn} onClick={() => handleChange(value - 1)}>{ICONS.remove}</button>
                <input type="tel" value={value} onChange={(event) => handleChange(parseInt(event.target.value))}/>
                <button className={styles.btn} onClick={() => handleChange(value + 1)}>{ICONS.add}</button>
            </div>
}

export default CountField;