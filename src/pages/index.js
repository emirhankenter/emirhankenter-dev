import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function Home() {
  return (
    <>
      <Head>
        <title>Emirhan KENTER</title>
        <meta name='keywords' content='pikagames'></meta>
      </Head>
      <div className={styles.main}>
        <div className={styles.avatar}>
          <Image
            src = "/avatar.png"
            alt=''
            width={256}
            height={256}
            />
        </div>
        <h1 className={styles.text1}>Hello world! I am Emirhan</h1>
        <h2 className={styles.text2}>{"Senior Game Developer at Rollic Games"}</h2>
        <div className={styles.social}>
          <div className={styles.socialIcons}>
          <Link href='https://github.com/emirhankenter'>
            <a className={styles.socialIcons} target="_blank">
              <Image
                src="/social/github-logo.png"
                alt="example"
                width={64}
                height={64}
              />
            </a>
          </Link>
          <Link href='https://www.linkedin.com/in/emirhankenter/'>
            <a className={styles.socialIcons} target="_blank">
              <Image
                src="/social/linkedin-logo.png"
                alt="example"
                width={64}
                height={64}
              />
            </a>
          </Link>
          <Link href='https://pika.games'>
            <a className={styles.socialIcons} target="_blank">
              <Image
                src="/social/pikagames-logo.png"
                alt="example"
                width={64}
                height={64}
              />
            </a>
          </Link>
          </div>
        </div>
      </div>
    </>
  )
}
