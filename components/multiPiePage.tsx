import styles from './multiPiePage.module.scss'
import Title from './title'
import PieChart from './pieChart'

export default function MultiPiePage({ title, data }) {
    return <>
        <Title>{title}</Title>
        <PieChart data={data.storageData} title={'Storage'} />
        <PieChart data={data.memoryData} title={'Memory'} />
    </>
}