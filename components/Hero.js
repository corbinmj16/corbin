import Image from 'next/image'
import heroImg from '../public/hero_bg.png'

export function Hero() {
  return (
    <section className="hero container">
      <div className="hero__content">
        <h1 className="hero__title">
          <span className="font-gradient">Senior frontend developer</span> with 9+
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
  );
}