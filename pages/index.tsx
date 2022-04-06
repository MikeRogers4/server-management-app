import * as osu from 'node-os-utils'
import * as _ from 'lodash'
import Title from '../components/title'
import PieChart from '../components/pieChart'

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
      <Title>Server Details</Title>
      <p>{JSON.stringify(data)}</p>
      <PieChart data={pieData} />
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