import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import heroImg from '../public/hero_bg.png'
import { IconClose, IconMenu, Favicons } from '../components'

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
        <title>Corbin Jensen Portfolio</title>
        <meta name="description" content="Corbin Jensen is a Frontend Developer and this is his portfolio website." />
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

        <section className="hero container">
          <div className="hero__content">
            <h1 className="hero__title">
              <span className="font-gradient">I'm a frontend developer</span> with 8+
              years experience.
            </h1>
            <p>
              Hi! I'm Corbin and I enjoy developing tools that make getting things
              done easier. My programming language of choice is Javascript and
              framework of choice React.
            </p>
            <div className="hero__buttons">
              <a href="#projects" className="btn no-underline">
                Projects
              </a>
              <a
                href="corbin-jensen-resume.pdf"
                download
                target="_blank"
                className="hero__download btn-alt">Download Resume</a>
            </div>
          </div>

          <Image
            className="hero__img"
            src={heroImg}
            objectFit="contain"
            alt="Corbin Jensen" />
        </section>
      </header>

      <section id="skills" className="skills container">
        <div className="skills__header">
          <h4 className="font-gradient section-subtitle">Skills</h4>
          <h2 className="section-title">Frontend is my specialty,<br />but dangerous enough on the backend.</h2>
        </div>
        <ul className="skills-list">
          <li className="skills-item">
            <h4>💻<br /> Development</h4>
            <ul>
              <li>HTML</li>
              <li>CSS/SCSS</li>
              <li>Javascript/Typescript</li>
              <li>React & Vue.js</li>
              <li>Wordpress</li>
            </ul>
          </li>
          <li className="skills-item">
            <h4>🧰<br />Build</h4>
            <ul>
              <li>Vercel</li>
              <li>Netlify</li>
              <li>Wepback & Parcel</li>
              <li>CircleCI</li>
            </ul>
          </li>
          <li className="skills-item">
            <h4>🛠<br />Tools</h4>
            <ul>
              <li>Sketch</li>
              <li>Figma</li>
              <li>Jira</li>
              <li>Github</li>
            </ul>
          </li>
        </ul>
      </section>

      <section id="projects" className="section">
        <div className="container">
          <h4 className="font-gradient section-subtitle">Projects</h4>
          <h2 className="section-title">Collaboration<br />Development<br />Problem Solving</h2>
        </div>
        
        <div className="project-wrap">
          <ul className="projects container">
            <li className="project">
              <div
                className="project__image"
                style={{backgroundImage: `url('steel_logo.png'); background-color: #bf1e2e`}}></div>
              <div className="project__content">
                <h5 className="font-gradient section-subtitle project__category">Freelance</h5>
                <h3 className="project__title">Steel Virtue Group</h3>
                <p className="project__desc">This was a freelance project for a guns and ammo dealer. I used their 3rd party inventory management API to populate the website with their products. This was built with React/Next.js.</p>
                <div className="project__buttons">
                  <a className="project__link" href="https://github.com/corbinmj16/steel-virtue-website" target="_blank">Github</a>
                </div>
              </div>
            </li>
            <li className="project">
              <div
                className="project__image"
                style={{backgroundImage: `url('pf_logo.png'); background-color: #5c2e7c`}}></div>
              <div className="project__content">
                <h5 className="font-gradient project__category">Career</h5>
                <h3 className="project__title">Physician Finder</h3>
                <p className="project__desc">I was apart of a team that built the frontend of this tool. It was built with Vue.js. Web accessibility was a huge factor with this project and I learned so much doing it.</p>
                <div className="project__buttons">
                  <a className="project__link" href="https://www.novanthealth.org/pf/" target="_blank">Website</a>
                </div>
              </div>
            </li>
            <li className="project">
              <div
                className="project__image"
                style={{backgroundImage: `url('ccfortmill_logo.png'); background-color: #e7aa674f`}}></div>
              <div className="project__content">
                <h5 className="font-gradient project__category">Freelance</h5>
                <h3 className="project__title">Calvery Chapel Fortmill</h3>
                <p className="project__desc">I’m currently rebuilding this for my church. It has a Wordpress backend and I’m utilizing the Wordpress API to populate the frontend. The frontend is built with a React/Next.js. You can see the progress by visiting the staging site below.</p>
                <div className="project__buttons">
                  <a className="project__link" href="https://github.com/corbinmj16/ccfortmill" target="_blank">Github</a>
                  <a className="project__link" href="https://ccfortmill.vercel.app/" target="_blank">Website</a>
                </div>
              </div>
            </li>
            <li className="project">
              <div
                className="project__image"
                style={{backgroundImage: `url('hl_logo.jpg'); background-color: #fff`}}></div>
              <div className="project__content">
                <h5 className="font-gradient project__category">Career</h5>
                <h3 className="project__title">Healthline</h3>
                <p className="project__desc">Led frontend team in planning, development and deployment of a new health education product. This resulted in acquiring 12,000+ new users in the first 2 months. This was built with React, Tailwind CSS, Next.js.</p>
                <div className="project__buttons">
                  <a className="project__link" href="www.healthline.com" target="_blank">Website</a>
                </div>
              </div>
            </li>
          </ul>

          <div id="about" className="about container">
            <div className="about__title">
              <h4 className="font-gradient">Frontend Developer</h4>
              <h2>That's me!</h2>
            </div>
    
            <div className="about__content">
              <p>Over the past 8 years, I've worked with a diverse range of companies, from small digital agencies to big companies with 3000+ employees. I enjoy developing interfaces that delight users and help businesses grow.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="section work-experience">
        <div className="container">
          <h2>💼 Work Experience</h2>
          <ul className="work">
            <li className="work-item">
              <img className="work-item__logo" src="rv_logo.jpg" />
              <div className="work-item__content">
                <h4 className="work-item__company">Red Ventures</h4>
                <ul>
                  <li>
                    <p className="work-item__job">Senior Frontend Developer</p>
                    <p className="work-item__dates">2018 - Current</p>
                  </li>
                  <li>
                    <p className="work-item__job">Frontend Developer</p>
                    <p className="work-item__dates">2017-2021</p>
                  </li>
                </ul>
                <div className="work-item__buttons">
                  <a className="work-item__link" href="https://www.linkedin.com/company/red-ventures/mycompany/" target="_blank">LinkedIn</a>
                  <a className="work-item__link" href="https://www.redventures.com/" 
                  target="_blank">Website</a>
                </div>
              </div>
              <span className="work-item__border"></span>
            </li>
            <li className="work-item">
              <img className="work-item__logo" src="carbonhouse_logo.jpg" />
              <div className="work-item__content">
                <h4 className="work-item__company">Carbonhouse</h4>
                <ul>
                  <li>
                    <p className="work-item__job">Frontend Developer</p>
                    <p className="work-item__dates">2016 - 2017</p>
                  </li>
                </ul>
                <div className="work-item__buttons">
                  <a className="work-item__link" href="https://www.linkedin.com/company/carbonhouse-inc./">LinkedIn</a>
                  <a className="work-item__link" href="https://www.carbonhouse.com/" target="_blank">Website</a>
                </div>
              </div>
              <span className="work-item__border"></span>
            </li>
            <li className="work-item">
              <img className="work-item__logo" src="tag_logo.jpg" />
              <div className="work-item__content">
                <h4 className="work-item__company">TAG</h4>
                <ul>
                  <li>
                    <p className="work-item__job">Web Developer</p>
                    <p className="work-item__dates">2014 - 2016</p>
                  </li>
                </ul>
                <div className="work-item__buttons">
                  <a className="work-item__link" href="https://www.linkedin.com/company/tag-communications/" target="_blank">LinkedIn</a>
                  <a className="work-item__link" href="https://tagteamagency.com/" target="_blank">
                    Website
                  </a>
                </div>
              </div>
              <span className="work-item__border"></span>
            </li>
            <li className="work-item">
              <img className="work-item__logo" src="lee_logo.jpg" />
              <div className="work-item__content">
                <h4 className="work-item__company">Lee Enterprise</h4>
                <ul>
                  <li>
                    <p className="work-item__job">Web Developer</p>
                    <p className="work-item__dates">2013 - 2014</p>
                  </li>
                </ul>
                <div className="work-item__buttons">
                  <a className="work-item__link" href="https://www.linkedin.com/company/lee-enterprises/" target="_blank">LinkedIn</a>
                  <a className="work-item__link" href="https://lee.net/" target="_blank">
                    Website
                  </a>
                </div>
              </div>
              <span className="work-item__border"></span>
            </li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <h2 className="footer__cta">
            Ready to shoot me an email?<br />
            <a className="font-gradient" href="mailto:contact.corbinjensen@gmail.com">Shoot it here!</a><br />
          </h2>
        </div>
      </footer>
      
    </div>
  )
}
