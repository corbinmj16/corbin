import Head from 'next/head'
import Image from 'next/image'
import heroImg from '../public/hero_bg.png'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Corbin Jensen Portfolio</title>
        <meta name="description" content="Corbin Jensen is a Frontend Developer and this is his portfolio website." />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="nav-wrap container">
        <h5 className="nav-logo font-gradient">Corbin Jensen</h5>

        <ul className="nav">
          <li className="nav__item">Skills</li>
          <li className="nav__item">Projects</li>
          <li className="nav__item">About</li>
          <li className="nav__item">Resume</li>
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
            <button className="btn">
              <span className="btn__text">Projects</span>
              <span className="btn__bg"></span>
            </button>
            <a
              href="corbin-jensen-resume.pdf"
              download
              target="_blank"
              className="btn-alt">Download Resume</a>
          </div>
        </div>

        <Image
          className="hero__img"
          src={heroImg}
          objectFit="contain"
          alt="Corbin Jensen" />
      </section>

      <section className="skills container">
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

      <section className="section">
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
                <a className="project__link" href="https://github.com/corbinmj16/steel-virtue-website" target="_blank">Github</a>
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
                <a className="project__link" href="https://www.novanthealth.org/pf/" target="_blank">Website</a>
              </div>
            </li>
            <li className="project">
              <div
                className="project__image"
                style={{backgroundImage: `url('ccfortmill_logo.png'); background-color: #e7aa674f`}}></div>
              <div className="project__content">
                <h5 className="font-gradient project__category">Freelance</h5>
                <h3 className="project__title">Calvery Chapel Fortmill</h3>
                <p className="project__desc">I’m rebuilding this for my church. It has a Wordpress backend and I’m utilizing the Wordpress API to populate the frontend. The frontend is built with a React/Next.js.</p>
                <a className="project__link" href="https://github.com/corbinmj16/ccfortmill" target="_blank">Github</a>
              </div>
            </li>
          </ul>

          <div className="about container">
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

      <section className="section work-experience">
        <div className="container">
          <h2>💼 Work Experience</h2>
          <ul className="work">
            <li className="work-item">
              <img className="work-item__logo" src="https://www.clipartmax.com/png/full/39-396725_fakery-logo-fake-company-logo-transparent.png" />
              <div className="work-item__content">
                <h4 className="work-item__company">Red Ventures</h4>
                <p className="work-item__job">Senior Frontend Developer</p>
                <p className="work-item__dates">2018 - Current</p>
                <p className="work-item__job">Frontend Developer</p>
                <p className="work-item__dates">2017-2021</p>
                <a className="work-item__link" href="#">LinkedIn</a>
                <a className="work-item__link" href="https://www.redventures.com/" target="_blank">Website</a>
              </div>
              <span className="work-item__border"></span>
            </li>
            <li className="work-item">
              <img className="work-item__logo" src="https://www.clipartmax.com/png/full/39-396725_fakery-logo-fake-company-logo-transparent.png" />
              <div className="work-item__content">
                <h4 className="work-item__company">Carbonhouse</h4>
                <p className="work-item__job">Frontend Developer</p>
                <p className="work-item__dates">2016 - 2017</p>
                <a className="work-item__link" href="#">LinkedIn</a>
                <a className="work-item__link" href="https://www.carbonhouse.com/" target="_blank">Website</a>
              </div>
              <span className="work-item__border"></span>
            </li>
            <li className="work-item">
              <img className="work-item__logo" src="https://www.clipartmax.com/png/full/39-396725_fakery-logo-fake-company-logo-transparent.png" />
              <div className="work-item__content">
                <h4 className="work-item__company">TAG</h4>
                <p className="work-item__job">Web Developer</p>
                <p className="work-item__dates">2014 - 2016</p>
                <a className="work-item__link" href="#">LinkedIn</a>
                <a
                  className="work-item__link"
                  href="https://tagteamagency.com/"
                  target="_blank">
                    Website
                </a>
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
            <a className="font-gradient no-underline" href="mailto:contact.corbinjensen@gmail.com">Shoot it here!</a><br />
          </h2>
        </div>
      </footer>
      
    </div>
  )
}
