import * as osu from 'node-os-utils'
import * as _ from 'lodash'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage({ data }) {
  return (
    <>
      <Header title={'Server Details'} />
      <p>{JSON.stringify(data)}</p>
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