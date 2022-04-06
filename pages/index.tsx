import * as osu from 'node-os-utils'
import * as _ from 'lodash'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import MultiPiePage from '../components/multiPiePage'

export default function ServerDetails({ data }) {
  const router = useRouter()
  const refreshData = () => {
    router.replace(router.asPath);
    setTimeout(refreshData, 5000);
  }
  const pies = [{
    dataKey: 'storageData',
    title: 'Storage'
  }, {
    dataKey: 'memoryData',
    title: 'Memory'
  }]

  useEffect(() => {
    refreshData()
  }, [])
  return (
    <MultiPiePage data={data} title='Server Details' pies={pies} />
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