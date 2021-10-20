import Head from 'next/head'
import { SideBar } from '../components/SideBar'
import { Header } from '../components/Header'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guarumidia</title>
      </Head>

      <SideBar />
      <Header />
    </div>
  )
}
