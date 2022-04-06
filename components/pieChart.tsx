import styles from './title.module.scss'
import { ResponsivePie } from '@nivo/pie'
import * as _ from 'lodash'

export default function PieChart({ data, title, className }) {
    const textColor = '#FFFFFF'
    const colors = ['#A3A1FB', '#58B5AB']

    return <div style={{ height: 250, width: 300 }} className={className}>
        <div className={styles.title}>{title}</div>
        <ResponsivePie
            data={data}
            sortByValue={true}
            margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
            colors={colors}
            enableArcLabels={false}
            arcLinkLabel={(datum) => {
                return `${datum.value}%`
            }}
            arcLinkLabelsTextColor={textColor}
            legends={[{
                anchor: 'bottom',
                direction: 'row',
                justify: false,
                translateX: 0,
                translateY: 56,
                itemsSpacing: 0,
                itemWidth: 100,
                itemHeight: 18,
                itemTextColor: textColor,
                itemDirection: 'left-to-right',
                itemOpacity: 1,
                symbolSize: 18,
                symbolShape: 'circle',
                effects: [{
                    on: 'hover',
                    style: {
                        itemTextColor: '#000'
                    }
                }]
            }]}
        />
    </div>
}