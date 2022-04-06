import styles from './multiPiePage.module.scss'
import Title from './title'
import PieChart from './pieChart'
import * as _ from 'lodash'

export default function MultiPiePage({ title, data, pies }) {
    const pieComponents = _.map(pies, function (pie, index) {
        return <PieChart data={data[pie.dataKey]} title={pie.title} className={styles[`pie-${index}`]} />
    })

    return <>
        <Title>{title}</Title>
        {pieComponents}
    </>
}