import Head from 'next/head'
import { useEffect } from 'react'
import NavContext from '../context/NavContext'
import {
  Favicons,
  Hero,
  SkillsSection,
  ProjectSection,
  WorkSection,
  Footer,
  Navigation,
} from '../components'

export default function Home() {
  const setupAnalytics = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments)}
    gtag('js', new Date());

    gtag('config', 'G-4YCFJVTCZR');
  }

  useEffect(() => {
    setupAnalytics();
  }, [])

  return (
    <div>
      <Head>
        <title>Corbin Jensen's Portfolio</title>
        <meta name="description" content="Corbin Jensen is a Frontend Developer and this is his portfolio website. He's a frontend developer in the Charlotte, NC area." />
        <Favicons />
        // Global site tag (gtag.js) - Google Analytics
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-4YCFJVTCZR"></script>
      </Head>

      <header>
        <Navigation />
        <Hero />
      </header>

      <SkillsSection />
      <ProjectSection />
      <WorkSection />

      <Footer />
    </div>
  )
}
