export function SkillsSection() {
  return (
    <section id="skills" className="skills container">
      <div className="skills__header">
        <h4 className="font-gradient section-subtitle">Skills</h4>
        <h2 className="section-title">A nice blend of frontend<br />and backend skills.</h2>
      </div>
      <ul className="skills-list">
        <li className="skills-item">
          <h4>💻<br /> Development</h4>
          <ul>
            <li>HTML, CSS/SCSS, Javascript</li>
            <li>Javasript Frameworks</li>
            <li>React & Vue.js</li>
            <li>Laravel/PHP</li>
            <li>MySQL/NoSQL</li>
          </ul>
        </li>
        <li className="skills-item">
          <h4>🧰<br />Build</h4>
          <ul>
            <li>Vercel</li>
            <li>Netlify</li>
            <li>Wepback</li>
            <li>Gulp.js</li>
            <li>CircleCI</li>
          </ul>
        </li>
        <li className="skills-item">
          <h4>🛠<br />Tools</h4>
          <ul>
            <li>Sketch</li>
            <li>Figma</li>
            <li>VS Code/PHP Storm</li>
            <li>Github</li>
            <li>Jira</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
