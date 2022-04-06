import * as osu from 'node-os-utils'
import * as _ from 'lodash'
import Title from '../components/title'
import PieChart from '../components/pieChart'

export default function HomePage({ data }) {
  return (
    <>
      <Title>Server Details</Title>
      <PieChart data={data.storageData} title={'Storage'} />
      <PieChart data={data.memoryData} title={'Memory'} />
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
  const storageData = [{
    id: 'free',
    label: 'free',
    value: data.freePercentage
  }, {
    id: 'used',
    label: 'used',
    value: data.usedPercentage
  }]
  const memoryData = [{
    id: 'free',
    label: 'free',
    value: data.freeMemPercentage
  }, {
    id: 'used',
    label: 'used',
    value: data.usedMemPercentage
  }]

  return {
    props: {
      data: {
        storageData,
        memoryData
      }
    }
  }
}