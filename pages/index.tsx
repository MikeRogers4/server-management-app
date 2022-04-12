import * as osu from 'node-os-utils'
import * as _ from 'lodash'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Title from '../components/title'
import MultiPie from '../components/multiPie'
import ToggleGrid from '../components/toggleGrid'

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
      <ToggleGrid data={data.dockerContainers} title={'Docker Containers'} onClick={stopStartDockerContainer} />
    </>
  )
}

export async function getServerSideProps() {
  const dockerContainers = await getDockerContainerData()
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

  return {
    props: {
      data: {
        cpuData,
        driveData,
        memData,
        dockerContainers
      }
    }
  }
}

async function getDockerContainerData() {
  const util = require('util')
  const exec = util.promisify(require('child_process').exec)
  const dockerContainerInfo = (await exec('docker ps -a --format "{{.Names}}, {{.State}}"')).stdout

  return _.orderBy(_.compact(_.map(dockerContainerInfo.split('\n'), function (container, index) {
    container = container.replace('\n', '')
    container = container.split(', ')

    if (_.isEmpty(container[0])) {
      return
    }
    return {
      name: container[0].trim(),
      toggled: container[1] === 'running'
    }
  })), ['toggled', 'name'], ['desc', 'asc'])
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

function stopStartDockerContainer(data) {
  fetch(`/api/${data.toggled ? 'stopContainer' : 'startContainer'}/${data.name}`)
}