import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Asiri Messages: Profile Set up Page</title>
        <meta name="description" content="Asiri messages allow you to receive anonymous messages from Friends anonymously" />
        {/* //favicon */}
        <link rel="icon" href="/favicons/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicons/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicons/favicon-16x16.png" />
        <link rel="manifest" href="/favicons/site.webmanifest"></link>
      </Head>
      <div className='main'>
          <h1>Profile Page</h1>
      </div>
      
    </div>
  )
}
