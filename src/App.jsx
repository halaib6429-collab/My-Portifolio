import './App.css';
import { useState, useEffect } from "react";
import Skills from "./skills";
import Projects from './Projects';
import Footer from "./Footer.jsx";
import { useScrollReveal } from "./useScrollReveal";

function App() {
  const words = ["Front-End Developer", "React Developer"];

  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [pause, setPause] = useState(false);
  useScrollReveal();

  useEffect(() => {
    const word = words[wordIndex];

    const timer = setTimeout(() => {
      if (pause) {
        setPause(false);
        setDeleting(true);
        return;
      }

      if (!deleting) {
        const nextText = word.substring(0, text.length + 1);
        setText(nextText);

        if (nextText.length === word.length) {
          setPause(true);
        }
      } else {
        const nextText = word.substring(0, text.length - 1);
        setText(nextText);

        if (nextText.length === 0) {
          setDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    }, pause ? 1000 : deleting ? 70 : 120);

    return () => clearTimeout(timer);
  }, [text, deleting, wordIndex, pause]);

  return (
    <div className="portfolio">
      <header className='header'>
          <div className='logo'>PORTIFOLIO</div>
          <div className='links'>
            <div className='lin'>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
              </ul>
            </div>
            <div className="soc">
                    <a href="https://www.facebook.com/share/19zJFj3uC8/" target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook"></i></a>
                    <a href="https://www.instagram.com/halaibrahim592?srtk=cXlhOXR5OGJscDkw" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a>
                    <a href="https://github.com/halaib6429-collab" target="_blank" rel="noreferrer"><i className="fa-brands fa-github"></i></a>
            </div>
            <div className='bt'>
              <button className='btn'>Let's connect</button>
            </div>
          </div>
        </header>

      <section className="hero reveal" id="home">

        <video
          className="hero-video"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="./vid/a.mp4" type="video/mp4" />
        </video>

        <div className='img1'>
          <img src='vid/h.png'/>
        </div>

        <div className="hero-content">
          <h3 className="eyebrow">
            Welcome All in my portifolio
          </h3>
          <h1>
            Hi! I'm <span> Hala Ibrahim</span>
          </h1>

          <h2>
            <span className="typing">{text}</span>
          </h2>

          <p className="hero-description">
            Passionate about building modern, interactive,
            and user-friendly web experiences.
            I turn creative ideas into beautiful digital solutions.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="https://www.instagram.com/halaibrahim592?srtk=cXlhOXR5OGJscDkw" className="secondary-btn">
              Let's Connect
            </a>

          </div>

        </div>
        

      </section> 
          
      <Skills />
      <Projects />

<section className='ss'>
  <div className="subscribe-box ">
  <h3>
            See My Projects At Once & Leave
            <br />
            Here Your E-mail Address
          </h3>

          <form
            className="subscribe-form reveal"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Email Address"
              required
            />
            <button type="submit">Submit</button>
          </form>
  </div>
</section>

<Footer />

    </div>
  );
}

export default App;