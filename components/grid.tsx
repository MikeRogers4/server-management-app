import styles from './grid.module.scss'
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function Grid({ data, title, id }) {
    return <>
        <h1 className={styles.title}>{title}</h1>
        {data.map((datum, index) => (
            <div key={`grid-${index}`} className={styles.item}>{datum.name} {datum.running ? <FaCheck /> : <FaTimes />}</div>
        ))}
    </>
}