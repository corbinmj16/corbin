import { AboutMe } from ".";

export function ProjectSection() {
  return (
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
                style={ { backgroundImage: `url('born_again_logo.jpg'); background-color: #fff` } }
            ></div>
            <div className="project__content">
              <h5 className="font-gradient project__category">Personal</h5>
              <h3 className="project__title">Born Again</h3>
              <p className="project__desc">A personal project that allows for compiling and sharing Christian resources that have helped people grow in their faith. Users have the ability to save books, podcasts, sermons, etc. to their profile, following others and discover new resources.</p>
              <p>Built with Laravel, Vue and MySQL</p>
              <div className="project__buttons">
                <a className="project__link" href="https://bornagain.app" target="_blank">Website</a>
              </div>
            </div>
          </li>
          <li className="project">
            <div
                className="project__image"
                style={ { backgroundImage: `url('Alto.svg'); background-color: #0c6b5b` } }
            ></div>
            <div className="project__content">
              <h5 className="font-gradient project__category">Career</h5>
              <h3 className="project__title">Alto</h3>
              <p className="project__desc">Led the Internal Tools team to reduce client support tickets, improved upon
                                           and built new workflows. These initiatives utilized Vue.js, Laravel,
                                           MySQL.</p>
              <div className="project__buttons">
                <a className="project__link" href="https://www.altoira.com/" target="_blank">Website</a>
              </div>
            </div>
          </li>
          <li className="project">
            <div
                className="project__image"
                style={ { backgroundImage: `url('hl_logo.jpg'); background-color: #fff` } }
            ></div>
            <div className="project__content">
              <h5 className="font-gradient project__category">Career</h5>
              <h3 className="project__title">Healthline</h3>
              <p className="project__desc">Led frontend team in planning, development and deployment of a new health
                                           education product. This resulted in acquiring 12,000+ new users in the first
                                           2 months. This was built with React, Tailwind CSS, Next.js.</p>
              <div className="project__buttons">
                <a className="project__link" href="https://www.healthline.com" target="_blank">Website</a>
              </div>
            </div>
          </li>
          <li className="project">
            <div
                className="project__image"
                style={ { backgroundImage: `url('bezzy_logo.png'); background-color: #fff` } }
            ></div>
            <div className="project__content">
              <h5 className="font-gradient project__category">Career</h5>
              <h3 className="project__title">Bezzy (Healthline)</h3>
              <p className="project__desc">Individual contributor on this social network for chronic illnesses. This was
                                           both a web app and native iOS/Android app. The web app was built with
                                           React/Next.js and the native apps were built with React Native.</p>
              <div className="project__buttons">
                <a className="project__link" href="https://www.healthline.com" target="_blank">Website</a>
              </div>
            </div>
          </li>
          <li className="project">
            <div
                className="project__image"
                style={ { backgroundImage: `url('pf_logo.png'); background-color: #5c2e7c` } }
            ></div>
            <div className="project__content">
              <h5 className="font-gradient project__category">Career</h5>
              <h3 className="project__title">Physician Finder</h3>
              <p className="project__desc">I was apart of a team that built the frontend of this tool. It was built with
                                           Vue.js. Web accessibility was a huge factor with this project and I learned
                                           so much doing it.</p>
              <div className="project__buttons">
                <a className="project__link" href="https://www.novanthealth.org/pf/" target="_blank">Website</a>
              </div>
            </div>
          </li>
          <li className="project">
            <div
                className="project__image"
                style={ { backgroundImage: `url('scc_logo.png'); background-color: #373737` } }
            ></div>
            <div className="project__content">
              <h5 className="font-gradient section-subtitle project__category">Freelance</h5>
              <h3 className="project__title">Step Change Consulting</h3>
              <p className="project__desc">This is a POC for an order-request system to improve efficiency in a factory
                                           my father-in-law runs. This is built with React/Next.js, Supabase (database)
                                           and Tailwind.</p>
              <div className="project__buttons">
                <a className="project__link"
                   href="https://github.com/corbinmj16/step-change-requests"
                   target="_blank"
                >Github</a>
              </div>
            </div>
          </li>
          <li className="project">
            <div
                className="project__image"
                style={ { backgroundImage: `url('steel_logo.png'); background-color: #bf1e2e` } }
            ></div>
            <div className="project__content">
              <h5 className="font-gradient section-subtitle project__category">Freelance</h5>
              <h3 className="project__title">Steel Virtue Group</h3>
              <p className="project__desc">This was a freelance project for a guns and ammo dealer. I used their 3rd
                                           party inventory management API to populate the website with their products.
                                           This was built with React/Next.js.</p>
              <div className="project__buttons">
                <a className="project__link"
                   href="https://github.com/corbinmj16/steel-virtue-website"
                   target="_blank"
                >Github</a>
              </div>
            </div>
          </li>
        </ul>

        <AboutMe />
      </div>
    </section>
  );
}
