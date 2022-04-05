import Layout from '../components/layout'
import * as osu from 'node-os-utils'

function Header({ title }) {
  return <h1>{title ? title : 'Default title'}</h1>
}

export default function HomePage({ data }) {
  return (
    <Layout>
      <Header title={data} />
    </Layout>
  )
}

export async function getServerSideProps() {
  const data = osu.cpu.count()

  return {
    props: {
      data
    }
  }
}