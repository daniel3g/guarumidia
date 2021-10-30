import Head from 'next/head'
import { SideBar } from '../components/SideBar'
import { Header } from '../components/Header'
import Image from 'next/image'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Guarumidia</title>
      </Head>

      <SideBar />
      <Header />
      <div className={styles.bannerHome}>
        <div className={styles.bannerLeft}>
          <Image src="/image-banner-main.png" width={632} height={358} />
        </div>

        <div className={styles.bannerRight}>
          <h2 className={styles.titleBanner}>Desenvolvimento de sites, lojas virtuais e sistemas web!</h2>
          <p className={styles.textBanner}>Uma estratégia social eficaz pode ajudá-lo a expandir seus negócios, manter sua presença social e se envolver com o público</p>
        </div>
      </div>
    </div>
  )
}
