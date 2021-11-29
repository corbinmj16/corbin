import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import heroImage from '../public/hero_bg.png';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Corbin Jensen</title>
        <meta name="description" content="Corbin Jensen is a Frontend Developer and this is his portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <nav>
          <ul>
            <li>Corbin Jensen</li>
            <li>About</li>
            <li>Projects</li>
            <li>Contact</li>
          </ul>
        </nav>

        <section className="hero">
          <div>
            <h3>Frontend Developer</h3>
            <h1>Hello, my name is Corbin Jensen</h1>
            <p>Some short text about me and blah blah blah.</p>

            <button>Projects</button>
            <button>Resume</button>
          </div>

          <div>
            <Image src={heroImage} />
          </div>
        </section>

        <section className="projects">
          <h2>Projects</h2>
          <ul>
            <li>Card 1</li>
            <li>Card 2</li>
            <li>Card 3</li>
            <li>Card 4</li>
          </ul>
        </section>
      </main>

      <footer className={styles.footer}>
        <ul>
          <li>LinkedIn</li>
          <li>
            <a href="mailto:contact.corbinjensen@gmail.com">Email</a>
          </li>
          <li>Github</li>
        </ul>
        <p>Corbin Jensen 2021</p>
      </footer>
    </div>
  )
}
