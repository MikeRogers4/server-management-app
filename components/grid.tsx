import styles from './grid.module.scss'
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function Grid({ data, title, onClick }) {
    return <>
        <h1 className={styles.title}>{title}</h1>
        {data.map((datum, index) => (
            <div key={`grid-${index}`} className={styles.item} onClick={onClick} data-running={datum.running}>
                <div>{datum.name}</div>
                {datum.running ? <FaCheck key={`icon-${index}`} className={styles.checkIcon} /> : <FaTimes key={`icon-${index}`} className={styles.timesIcon} />}
            </div>
        ))}
    </>
}