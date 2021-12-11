export function WorkSection() {
  return (
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
  );
}