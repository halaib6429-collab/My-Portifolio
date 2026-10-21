import { useState } from "react";
import "./Projects.css";

function Projects() {
  const [activeSection, setActiveSection] = useState(1);

  const videoProjects = [
    {
      title: "Project 1",
      video: "projects/p1.mp4",
    },
    {
      title: "Project 2",
      video: "projects/p2.mp4",
    },
    {
      title: "Project 3",
      video: "projects/p3.mp4",
    },
    {
      title: "Project 4",
      video: "projects/p4.mp4",
    },
    {
      title: "Project 5",
      video: "projects/p5.mp4",
    },
    {
      title: "Project 6",
      video: "projects/p6.mp4",
    },
  ];

  const githubProjects = [
    {
      title: "simple poroject about victorian era with HTML & CSS" ,
      image: "projects/p1.png",
      github: "PUT_GITHUB_LINK_HERE",
    },
    {
      title:"simple poroject about Cpital shop with HTML & CSS" ,
      image: "projects/p2.png",
      github: " https://halaib6429-collab.github.io/Capital-Shop",
    },
    {
      title: "simple poroject about AI Vision with Tailwind CSS" ,
      image: "projects/p3.png",
      github: "https://halaib6429-collab.github.io/Ai-Vision",
    },
    {
      title: "simple poroject about jelwery with HTML&CSS&js" ,
      image: "projects/p4.png",
      github: " https://halaib6429-collab.github.io/EMERAUDE",
    },
    {
      title: "simple poroject about sport center with HTML&CSS&js" ,
      image: "projects/p5.png",
      github: "PUT_GITHUB_LINK_HERE",
    },
    { 
        title: "My portifolio about my projects with react.js" ,
        image: "projects/p6.png",
        github: "PUT_GITHUB_LINK_HERE",
    },
  ];

  return (
    <section className="projects-section reveal" id="projects">

  <video className="hero-video" autoPlay loop muted playsInline>
    <source src="/vid/a.mp4" type="video/mp4" />
  </video>

  <div className="projects-container">
    <video
  src={`/${Projects.video}`}
  autoPlay={true}
  muted={true}
  loop={true}
  playsInline={true}
  preload="auto"
  controls={false}
  onLoadedData={(e) => {
    e.currentTarget.play().catch((error) => {
      console.log("Autoplay error:", error);
    });
  }}
/>

        <div className="projects-tabs">
          <button
            className={activeSection === 1 ? "active" : ""}
            onClick={() => setActiveSection(1)}
          >
            1st Section
          </button>

          <button
            className={activeSection === 2 ? "active" : ""}
            onClick={() => setActiveSection(2)}
          >
            2nd Section
          </button>

          <button
            className={activeSection === 3 ? "active" : ""}
            onClick={() => setActiveSection(3)}
          >
            3rd Section
          </button>
        </div>

        {/* First Section: Videos */}
        {activeSection === 1 && (
  <div className="projects-grid">
    {videoProjects.map((project, index) => (
      <div className="project-card video-card" key={index}>
        <video
          src={`/${project.video}`}
          autoPlay
          muted
          loop
          controls
          playsInline
          preload="auto"
        />
        <h3>{project.title}</h3>
      </div>
    ))}
  </div>
)}

        {/* Second Section: GitHub Projects */}
        {activeSection === 2 && (
          <div className="projects-grid">
            {githubProjects.map((project, index) => (
              <div className="project-card github-card" key={index}>
                <img src={project.image} alt={project.title} />

                <div className="project-overlay">
                  <p>{project.title}</p>

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Third Section: Contact */}
        {activeSection === 3 && (
          <div className="projects-contact">
            <div className="contact-image">
              <img
                src="vid/h.png"
                alt="Contact illustration"
              />
            </div>

            <div className="contact-form">
              <h2>Get In Touch</h2>

              <form onSubmit={(e) => e.preventDefault()}>
                <div className="contact-inputs">
                  <input
                    type="text"
                    placeholder="First Name"
                    required
                  />

                  <input
                    type="text"
                    placeholder="Last Name"
                    required
                  />
<input
                    type="email"
                    placeholder="Email Address"
                    required
                  />

                  <input
                    type="tel"
                    placeholder="Phone No."
                  />
                </div>

                <textarea
                  placeholder="Message"
                  required
                />

                <button type="submit">Send</button>
              </form>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}

export default Projects;