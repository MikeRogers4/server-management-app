import * as osu from 'node-os-utils'
import * as _ from 'lodash'
import { useEffect } from 'react'
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
    title: `Storage (${data.totals.drive}GB)`,
    suffix: 'GB'
  }, {
    dataKey: 'memData',
    title: `Memory (${data.totals.mem}GB)`,
    suffix: 'GB'
  }, {
    dataKey: 'cpuData',
    title: `CPU (${data.totals.cpu} CPUs)`,
    suffix: '%'
  }]
  const stopStartDockerContainer = function (data) {
    return fetch(`/api/${data.toggled ? 'stopContainer' : 'startContainer'}/${data.name}`)
  }
  const stopStartDockerNetwork = function (data) {
    return fetch(`/api/${data.toggled ? 'stopNetwork' : 'startNetwork'}/${data.name}`)
  }

  useEffect(() => {
    refreshData()
  }, [])
  return (
    <>
      <Title>Server Details</Title>
      <MultiPie data={data} pies={pies} />
      <div style={{
        display: 'grid', padding: '20px 15% 40px 25%', gridTemplateColumns: '40% 40%', gridColumnGap: '5%', gridRowGap: '50px'
      }}>
        <ToggleGrid data={data.dockerContainers} title={'Docker Containers'} onClick={stopStartDockerContainer} />
        <ToggleGrid data={data.dockerNetworks} title={'Docker Networks'} onClick={stopStartDockerNetwork} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const dockerContainers = await getDockerContainerData()
  const dockerNetworks = await getDockerNetworkData()
  const cpuFreePercentage = Math.round(await osu.cpu.free() * 100)
  const driveInfo = await osu.drive.free()
  const driveFreePercentage = Math.round(driveInfo.freePercentage * 100)
  const memInfo = await osu.mem.free()
  const memFreePercentage = Math.round((memInfo.freeMemMb / memInfo.totalMemMb) * 10000)
  const memTotal = Math.round(memInfo.totalMemMb / 100) / 10
  const cpuData = getUsageDataForPie({
    percentage: cpuFreePercentage
  })
  const driveData = getUsageDataForPie({
    percentage: driveFreePercentage,
    free: driveInfo.freeGb,
    total: driveInfo.totalGb
  })
  const memData = getUsageDataForPie({
    percentage: memFreePercentage,
    free: Math.round(memInfo.freeMemMb / 100) / 10,
    total: memTotal
  })

  return {
    props: {
      data: {
        cpuData,
        driveData,
        memData,
        dockerContainers,
        dockerNetworks,
        totals: {
          cpu: osu.cpu.count(),
          drive: driveInfo.totalGb,
          mem: memTotal
        }
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
      toggled: container[1] === 'running',
      toggling: false
    }
  })), ['toggled', 'name'], ['desc', 'asc'])
}

async function getDockerNetworkData() {
  const util = require('util')
  const exec = util.promisify(require('child_process').exec)
  const dockerContainerInfo = (await exec('docker network ls --format "{{.Name}}"')).stdout

  return _.orderBy(_.compact(_.map(dockerContainerInfo.split('\n'), function (container, index) {
    container = container.replace('\n', '')
    container = container.split(', ')

    if (_.isEmpty(container[0])) {
      return
    }
    return {
      name: container[0].trim(),
      toggled: true,
      toggling: false
    }
  })), ['toggled', 'name'], ['desc', 'asc'])
}

function getUsageDataForPie(info) {
  const freePercentage = info.percentage / 100
  const usedPercentage = (10000 - info.percentage) / 100

  return [{
    id: 'free',
    label: 'free',
    percentage: freePercentage,
    value: info.free || freePercentage
  }, {
    id: 'used',
    label: 'used',
    percentage: usedPercentage,
    value: info.total ? ((info.total * 10) - (info.free * 10)) / 10 : usedPercentage
  }]
}