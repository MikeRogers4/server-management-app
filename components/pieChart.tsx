import styles from './title.module.scss'
import { ResponsivePie } from '@nivo/pie'
import * as _ from 'lodash'

export default function PieChart({ data }) {
    const colors = ['#A3A1FB', '#58B5AB']
    const dataWithColors = _.map(data, function (datum, index) {
        datum.color = colors[index]
        return datum
    })

    return <div style={{ height: 250 }} className={styles['pieChart']}>
        <ResponsivePie
            data={dataWithColors}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            legends={[{
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: '#999',
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemTextColor: '#000'
                        }
                    }
                ]
            }]}
        />
    </div>
}