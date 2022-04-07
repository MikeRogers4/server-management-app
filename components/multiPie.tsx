import styles from './multiPie.module.scss'
import PieChart from './pieChart'
import * as _ from 'lodash'

export default function MultiPie({ data, pies }) {
    const pieComponents = _.map(pies, function (pie, index) {
        const key = `pie-${index}`

        return <PieChart data={data[pie.dataKey]} title={pie.title} key={key} />
    })

    return <div className={styles.gridContainer}>
        {pieComponents}
    </div>
}