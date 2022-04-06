import * as osu from 'node-os-utils'
import * as _ from 'lodash'
import { ResponsivePie } from 'nivo'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage({ data }) {
  const pieData = [{
    "id": "free",
    "label": "free",
    "value": parseInt(data.freeGb, 10),
    "color": "hsl(126, 70%, 50%)"
  }, {
    "id": "used",
    "label": "used",
    "value": parseInt(data.usedGb, 10),
    "color": "hsl(219, 70%, 50%)"
  }]

  return (
    <>
      <Header title={'Server Details'} />
      <p>{JSON.stringify(data)}</p>
      <div style={{ height: 200 }}>
        <ResponsivePie
          data={pieData}
          width={200}
          height={200}
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