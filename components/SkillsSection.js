export function SkillsSection() {
  return (
    <section id="skills" className="skills container">
      <div className="skills__header">
        <h4 className="font-gradient section-subtitle">Skills</h4>
        <h2 className="section-title">A fullstack developer<br />focusing on the frontend.</h2>
      </div>
      <ul className="skills-list">
        <li className="skills-item">
          <h4>💻<br /> Development</h4>
          <ul>
            <li>HTML, CSS/SCSS, Javascript/Typescript</li>
            <li>React & Vue.js</li>
            <li>Laravel/PHP</li>
            <li>MySQL/NoSQL</li>
            <li>MongoDB</li>
          </ul>
        </li>
        <li className="skills-item">
          <h4>🧰<br />Build</h4>
          <ul>
            <li>Vercel</li>
            <li>Laravel Forge</li>
            <li>Vite</li>
            <li>Webpack</li>
            <li>Digital Ocean</li>
          </ul>
        </li>
        <li className="skills-item">
          <h4>🛠<br />Tools</h4>
          <ul>
            <li>VS Code/PHP Storm</li>
            <li>Github/Gitlab</li>
            <li>Figma</li>
            <li>Circle CI</li>
            <li>Jira</li>
          </ul>
        </li>
      </ul>
    </section>
  );
}
