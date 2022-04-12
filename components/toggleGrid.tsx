import styles from './toggleGrid.module.scss'
import { FaCheck, FaTimes } from 'react-icons/fa';

export default function ToggleGrid({ data, title, onClick }) {
    return <>
        <h1 className={styles.title}>{title}</h1>
        {data.map((datum, index) => (
            <div key={`grid-${index}`} className={styles.item} >
                <div>{datum.name}</div>
                <div onClick={() => onClick(datum)}>{datum.toggled ?
                    <FaCheck key={`icon-${index}`} className={styles.checkIcon} />
                    : <FaTimes key={`icon-${index}`} className={styles.timesIcon} />}</div>
            </div>
        ))}
    </>
}