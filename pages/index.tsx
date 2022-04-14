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
  const stopStartDockerNetwork = async function (data) {
    for (const containerName of data.children) {
      await fetch(`/api/${data.toggled ? 'stopContainer' : 'startContainer'}/${containerName}`)
    }
    return true
  }
  const stopStartDockerProfile = async function (data) {
    for (const containerName of data.containers) {
      await fetch(`/api/${data.toggled ? 'stopContainer' : 'startContainer'}/${containerName}`)
    }
    return true
  }

  useEffect(() => {
    refreshData()
  }, [])
  return (
    <>
      <Title>Server Details</Title>
      <MultiPie data={data} pies={pies} />
      <div style={{
        display: 'grid', padding: '20px 5% 40px', gridTemplateColumns: '30% 30% 30%', gridColumnGap: '5%', gridRowGap: '50px'
      }}>
        <ToggleGrid data={data.dockerContainers} title={'Docker Containers'} onClick={stopStartDockerContainer} />
        <ToggleGrid data={data.dockerNetworks} title={'Docker Networks'} onClick={stopStartDockerNetwork} />
        <ToggleGrid data={data.definedProfiles} title={'Docker Profiles'} onClick={stopStartDockerProfile} />
      </div>
    </>
  )
}

export async function getServerSideProps() {
  const dockerContainers = await getDockerContainerData()
  const dockerNetworks = await getDockerNetworkData()
  const definedProfiles = getProfilesForServer('test-mike', dockerContainers)
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
        definedProfiles,
        totals: {
          cpu: osu.cpu.count(),
          drive: driveInfo.totalGb,
          mem: memTotal
        }
      }
    }
  }
}

function getDockerContainerData() {
  return getDockerData('docker ps -a --format "{{.Names}}, {{.State}}"', function (item) {
    return item[1] === 'running'
  })
}

async function getDockerNetworkData() {
  const util = require('util')
  const exec = util.promisify(require('child_process').exec)
  const dockerNetworks = await getDockerData('docker network ls --format "{{.Name}}"', function () {
    return true
  })

  for (const dockerNetwork of dockerNetworks) {
    dockerNetwork.children = (await exec(`docker network inspect ${dockerNetwork.name} | grep Name | tail -n +2 | cut -d':' -f2 | tr -d ',"'`)).stdout
    dockerNetwork.children = _.compact(dockerNetwork.children.split('\n'))
  }
  return _.filter(dockerNetworks, function (dockerNetwork) {
    return !_.isEmpty(dockerNetwork.children)
  })
}

async function getDockerData(dockerCommand, isRunning) {
  const util = require('util')
  const exec = util.promisify(require('child_process').exec)
  const dockerInfo = (await exec(dockerCommand)).stdout

  return _.orderBy(_.compact(_.map(dockerInfo.split('\n'), function (item, index) {
    item = item.replace('\n', '')
    item = item.split(', ')

    if (_.isEmpty(item[0])) {
      return
    }
    return {
      name: item[0].trim(),
      toggled: isRunning(item),
      toggling: false
    }
  })), ['toggled', 'name'], ['desc', 'asc'])
}

function getProfilesForServer(name, dockerContainers) {
  return [{
    name: `${name} Core`,
    toggled: (_.find(dockerContainers, (container) => container.name === `${name}-postgres`) || {}).toggled || false,
    toggling: false,
    containers: [`${name}-elasticsearch`, `${name}-kue`, `${name}-pgbouncer`, `${name}-postgres`, `${name}-redis`]
  }, {
    name: `${name} Helpers`,
    toggled: (_.find(dockerContainers, (container) => container.name === `${name}_apihelper_1`) || {}).toggled || false,
    toggling: false,
    containers: [`${name}_apihelper_1`, `${name}_printhelper_1`]
  }, {
    name: `${name} Prospect`,
    toggled: (_.find(dockerContainers, (container) => container.name === `${name}_prospect_1`) || {}).toggled || false,
    toggling: false,
    containers: [`${name}_confirmation_1`, `${name}_prospect_1`, `${name}_tasks_1`]
  }, {
    name: `${name} Workers`,
    toggled: (_.find(dockerContainers, (container) => container.name === `${name}_orderconfirmation_1`) || {}).toggled || false,
    toggling: false,
    containers: [`${name}_apicallback_1`, `${name}_orderconfirmation_1`, `${name}_orderpdfcreation_1`]
  }]
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