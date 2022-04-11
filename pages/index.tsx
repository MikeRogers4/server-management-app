import * as osu from 'node-os-utils'
import * as _ from 'lodash'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Title from '../components/title'
import MultiPie from '../components/multiPie'
import Grid from '../components/grid'

export default function ServerDetails({ data }) {
  const router = useRouter()
  const refreshData = () => {
    router.replace(router.asPath);
    setTimeout(refreshData, 5000);
  }
  const pies = [{
    dataKey: 'driveData',
    title: 'Storage'
  }, {
    dataKey: 'memData',
    title: 'Memory'
  }, {
    dataKey: 'cpuData',
    title: 'CPU'
  }]

  useEffect(() => {
    refreshData()
  }, [])
  return (
    <>
      <Title>Server Details</Title>
      <MultiPie data={data} pies={pies} />
      <Grid dataSource={data.dockerContainerNames} />
    </>
  )
}

export async function getServerSideProps() {
  const util = require('util');
  const exec = util.promisify(require('child_process').exec)
  const dockerContainerNames = (await exec('docker ps --format "{{.Names}}"')).stdout.split('\n')
  const cpuFree = Math.round(await osu.cpu.free() * 100)
  const driveFree = Math.round(await osu.drive.free().then(function (info) {
    return info.freePercentage
  }) * 100)
  const memFree = Math.round(await osu.mem.free().then(function (info) {
    return (info.freeMemMb / info.totalMemMb) * 100
  }) * 100)
  const cpuData = getUsageDataForPie(cpuFree)
  const driveData = getUsageDataForPie(driveFree)
  const memData = getUsageDataForPie(memFree)
  console.log(dockerContainerNames)
  return {
    props: {
      data: {
        cpuData,
        driveData,
        memData,
        dockerContainerNames
      }
    }
  }
}

function getUsageDataForPie(freePercentage) {
  return [{
    id: 'free',
    label: 'free',
    value: freePercentage / 100
  }, {
    id: 'used',
    label: 'used',
    value: (10000 - freePercentage) / 100
  }]
}