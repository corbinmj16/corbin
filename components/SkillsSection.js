export function SkillsSection() {
  return (
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
  );
}