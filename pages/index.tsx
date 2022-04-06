import * as osu from 'node-os-utils'
import * as _ from 'lodash'
import { ResponsivePie } from '@nivo/pie'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage({ data }) {
  const pieData = [{
    id: 'free',
    label: 'free',
    value: parseInt(data.freeGb, 10),
    color: '#A3A1FB'
  }, {
    id: 'used',
    label: 'used',
    value: parseInt(data.usedGb, 10),
    color: '#58B5AB'
  }]

  return (
    <>
      <Header title={'Server Details'} />
      <p>{JSON.stringify(data)}</p>
      <div style={{ height: 250 }}>
        <ResponsivePie
          data={pieData}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          legends={[{
            anchor: 'top',
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
    </>
  )
}

export async function getServerSideProps() {
  const cpuCount = osu.cpu.count()
  const driveInfo = await osu.drive.info()
  const memInfo = await osu.mem.info()
  const data = _.merge(driveInfo, memInfo, {
    cpuCount
  })

  return {
    props: {
      data
    }
  }
}