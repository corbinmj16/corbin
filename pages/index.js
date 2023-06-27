import Head from 'next/head'
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
  return (
    <div>
      <Head>
        <title>Corbin Jensen's Portfolio</title>
        <meta name="description" content="Corbin Jensen is a Frontend Developer and this is his portfolio website. He's a frontend developer in the Savannah, Georgia area." />
        <Favicons />
      </Head>

      <header>
        <Navigation />
        <Hero />
      </header>

      <main>
        <SkillsSection />
        <ProjectSection />
        <WorkSection />
      </main>

      <Footer />
    </div>
  )
}
