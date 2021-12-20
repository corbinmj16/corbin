import { useContext } from 'react';
import NavContext from '../context/NavContext';
import {IconClose, IconMenu} from '.';

export function Navigation() {
  const {toggleNav, isNavOpen} = useContext(NavContext);

  return (
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
  )
}