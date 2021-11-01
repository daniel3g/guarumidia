import Head from 'next/head'
import { SideBar } from '../components/SideBar'
import { Header } from '../components/Header'
import Image from 'next/image'

import styles from '../styles/pages/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
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
          <input type="button" value="INSTITUCIONAIS" className={styles.buttonInstitucional} />
          <input type="button" value="E-COMMERCES" className={styles.buttonCommerce} />
        </div>        
      </div>

      <div className={styles.servicos}>
          <div className={styles.coluna}>
            <div>
            <Image src="/local-map-1.svg" width={200} height={200} />
            </div>
            <div>
            <h2>Negócio Local</h2>
            <p>Se o seu negócio é local, ou seja, atende presencialmente em um ou mais endereços, temos a solução ideal para que os clientes o encontre.</p>
            </div>
          </div>
          <div className={styles.coluna}>
            <div>
              <Image src="/ecommerce.svg" width={250} height={250} />
            </div>
            <div>
              <h2>Ferramentas de venda</h2>
              <p>Seu site terá funcionalidades exclusivas visando converter visitantes em clientes. Você poderá ter Chat Online, PopUps Inteligentes, Integração com plataformas de pagamento digital e muitas outras ferramentas.</p>
            </div>
          </div>
          <div className={styles.coluna}>
            <div>
              <Image src="/web-design.svg" width={250} height={250} />
            </div>
            <div>
              <h2>Personalização completa</h2>
              <p>Desenvolvemos todos os sites de forma artesanal, layouts 100% exclusivos para a sua marca. Uma aparência bonita e moderna é o que irá transmitir confiança a seus visitantes.</p>
            </div>
          </div>
        </div>

        <div className={styles.servicos}>
          <div className={styles.coluna}>
            <div>
            <Image src="/analysis.svg" width={400} height={400} />
            </div>
            <div>
            <h2>Site Otimizado</h2>
            <p>Todos os sites são criados para que possam ter um melhor posicionamento no Google. Ao desenvolver o site, seguimos todas as diretrizes e critérios impostos pelo Google. Seu site já será entregue para você totalmente otimizado para os buscadores e você poderá ficar na 1ª página do Google em pouco tempo.</p>
            </div>
          </div>
          <div className={styles.coluna}>
            <div>
              <Image src="/gerenciamento-da-web.svg" width={350} height={350} />
            </div>
            <div>
              <h2>Fácil gerenciamento</h2>
              <p>Com um painel de controle amigável, a tarefa de atualizar o conteúdo do seu site ficou fácil. Qualquer pessoa sem conhecimento técnico conseguirá gerenciar o site. Você poderá adicionar textos, posts, fotos, vídeos, promoções e outros conteúdos com facilidade e autonomia.</p>
            </div>
          </div>
          <div className={styles.coluna}>
            <div>
              <Image src="/online-learning.svg" width={400} height={400} />
            </div>
            <div>
              <h2>Treinamento</h2>
              <p>Com todos os recursos do seu site, será necessário gerenciá-lo. Estamos aqui para ajudá-lo a se familiarizar com seu novo painel de administração e ensina-lo a alterar seu próprio layout. Você também terá a possibilidade de criar novas páginas e landing pages, além de publicar posts no seu blog.</p>
            </div>
          </div>
        </div>

        <div className={styles.containerSeo}>
          <h2>Como está seu SEO?</h2>
          <p>Verifique os problemas de SEO do seu site gratuitamente!</p>
          <form action="" method="post" className={styles.form}>
            <div className={styles.box}>
            <input type="text" placeholder="Insira a URL do seu site..." />
            <input type="text" placeholder="Insira seu endereço de email..." />
            </div>
            <div>
            <input type="button" value="VERIFICAR" className={styles.button} />
            </div>
          </form>
        </div>
    </div>
  )
}
