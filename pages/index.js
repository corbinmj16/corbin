import Head from 'next/head'
import { useEffect, useState } from 'react'
import {
  IconClose,
  IconMenu,
  Favicons,
  Hero,
  SkillsSection,
  ProjectSection,
  WorkSection,
  Footer,
} from '../components'

export default function Home() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  }

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
        <nav className="nav-wrap container">
          <h5 className="nav-logo">Corbin Jensen</h5>
          <button
            onClick={toggleNav}
            className={`nav-mobile-btn ${isNavOpen ? 'active' : ''}`}>
            {isNavOpen ? <IconClose /> : <IconMenu />}
          </button>

          <ul className={`nav ${isNavOpen ? 'active' : ''}`}>
            <li className="nav__item">
              <a href="#skills" onClick={toggleNav}>Skills</a>
            </li>
            <li className="nav__item">
              <a href="#projects" onClick={toggleNav}>Projects</a>
            </li>
            <li className="nav__item">
              <a href="#about" onClick={toggleNav}>About</a>
            </li>
            <li className="nav__item">
              <a
                href="corbin-jensen-resume.pdf"
                onClick={toggleNav}
                target="_blank"
                download>Resume</a>
            </li>
          </ul>
        </nav>

        <Hero />
      </header>

      <SkillsSection />
      <ProjectSection />
      <WorkSection />
      <Footer />
    </div>
  )
}
