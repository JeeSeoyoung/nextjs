import Head from 'next/head'
import utilStyles from '../styles/utils.module.css'
 


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>Sungsu</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>자기소개</p>
        <p>제 이름은 ~~</p>
      </section>
    </Layout>
  )
}
