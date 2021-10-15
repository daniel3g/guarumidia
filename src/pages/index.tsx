import Head from 'next/head'
import { SideBar } from '../components/SideBar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guarumidia</title>
      </Head>

      <SideBar />
    </div>
  )
}
