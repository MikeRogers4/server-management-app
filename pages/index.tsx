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
  }, {
    dataKey: 'cpuData',
    title: 'CPU'
  }]

  useEffect(() => {
    refreshData()
  }, [])
  return (
    <MultiPiePage data={data} title='Server Details' pies={pies} />
  )
}

export async function getServerSideProps() {
  const cpuFree = Math.round(await osu.cpu.free() * 100)
  const driveFree = Math.round(await osu.drive.free().then(function (info) {
    return info.freePercentage
  }) * 100)
  const memFree = Math.round(await osu.mem.free().then(function (info) {
    return (info.freeMemMb / info.totalMemMb) * 100
  }) * 100)
  const cpuData = [{
    id: 'free',
    label: 'free',
    value: cpuFree / 100
  }, {
    id: 'used',
    label: 'used',
    value: (10000 - cpuFree) / 100
  }]
  const storageData = [{
    id: 'free',
    label: 'free',
    value: driveFree / 100
  }, {
    id: 'used',
    label: 'used',
    value: (10000 - driveFree) / 100
  }]
  const memoryData = [{
    id: 'free',
    label: 'free',
    value: memFree / 100
  }, {
    id: 'used',
    label: 'used',
    value: (10000 - memFree) / 100
  }]

  return {
    props: {
      data: {
        cpuData,
        storageData,
        memoryData
      }
    }
  }
}