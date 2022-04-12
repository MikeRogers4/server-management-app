import styles from './grid.module.scss'

export default function Grid({ data, title, id }) {
    return <>
        <h1 className={styles.title}>{title}</h1>
        {data.map((datum, index) => (
            <div key={`grid-${index}`} className={styles.item}>{datum}</div>
        ))}
    </>
}