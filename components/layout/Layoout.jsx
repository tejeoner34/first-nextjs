import Head from 'next/head'
import styles from './Layout.module.css'
import { Navbar } from '../Navbar'

export const Layout = ({children}) => {

  return (
    <div className={styles.container}>
      <Head>
        <title>Home</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />
      
      <main className={styles.main}>
        {children}
      </main>
    </div>
  )
}