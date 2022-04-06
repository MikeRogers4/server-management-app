import styles from './multiPiePage.module.scss'
import Title from './title'
import PieChart from './pieChart'
import * as _ from 'lodash'

export default function MultiPiePage({ title, data, pies }) {
    const pieComponents = _.map(pies, function (pie, index) {
        const key = `pie-${index}`

        return <PieChart data={data[pie.dataKey]} title={pie.title} key={key} style={{
            position: 'absolute', top: '6px', left: `${300 * index}px`
        }} />
    })

    return <>
        <Title>{title}</Title>
        {pieComponents}
    </>
}