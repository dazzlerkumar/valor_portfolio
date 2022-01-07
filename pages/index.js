//LIBS
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
//COMPONENTS
import Button from '../components/Button'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Valor Portfolio</title>
        <meta name="Valor Portfolio" content="Valorant Game UI based portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Button buttonname="Hey" />
        <p className="text-3xl font-bold underline">Hello</p>
      </main>

      <footer className={styles.footer}>
       
      </footer>
    </div>
  )
}
