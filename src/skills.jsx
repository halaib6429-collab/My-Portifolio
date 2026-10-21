import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Skills.css";

const skills = [
  { name: "HTML", percentage: 99 },
  { name: "CSS", percentage: 95 },
  { name: "JavaScript", percentage: 80 },
  { name: "React", percentage: 85 },
  { name: "Tailwind CSS", percentage: 90 },
  { name: "Art & Nails", percentage: 90 },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const visibleSkills = [-1, 0, 1].map((offset) => {
    const index =
      (activeIndex + offset + skills.length) % skills.length;
    return {
      ...skills[index],
      offset,
      index,
    };
  });
  

  function changeSkill(step) {
    setDirection(step);

    setActiveIndex(
      (prev) => (prev + step + skills.length) % skills.length
    );
  }

  return (
    <section id="skills" className="skills-section reveal">
        <video  className="hero-video"  autoPlay  loop  muted playsInline>
            <source src="./vid/a.mp4" type="video/mp4" />
        </video>
      <div className="skills-container">

        <h2 className="skills-title">
          My <span>Skills</span>
        </h2>

        <p className="skills-description">
          My technical and creative abilities
        </p>

        <div className="skills-carousel">

          <button
            className="skills-arrow"
            onClick={() => changeSkill(-1)}
            aria-label="Previous skill"
          >
            &#10094;
          </button>

          <div className="skills-track">
            <AnimatePresence initial={false} mode="popLayout">
              {visibleSkills.map((skill) => (
                <motion.div
                  key={skill.index}
                  initial={{
                    opacity: 0,
                    x: direction * 180,
                    scale: 0.65,
                  }}
                  animate={{
                    opacity: skill.offset === 0 ? 1 : 0.65,
                    x: skill.offset * 190,
                    scale: skill.offset === 0 ? 1 : 0.8,
                  }}
                  exit={{
                    opacity: 0,
                    x: -direction * 180,
                    scale: 0.65,
                  }}
                  transition={{
                    duration: 0.55,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="skill-card"
                  style={{
                    zIndex: skill.offset === 0 ? 10 : 1,
                  }}
                >
                  <div className="skill-circle">
                    <div
                      className="skill-progress"
                      style={{background:`conic-gradient(rgb(255, 253, 141) ${skill.percentage * 3.6}deg, #393939 0deg)`,}}>
                      <div className="skill-inner">
                        <span>{skill.percentage}%</span>
                      </div>
                    </div>
                  </div>

                  <h3 className="skill-name">
                    {skill.name}
                  </h3>

                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          <button
            className="skills-arrow"
            onClick={() => changeSkill(1)}
            aria-label="Next skill"
          >
            &#10095;
          </button>

        </div>

        <div className="skills-dots">
          {skills.map((skill, index) => (
            <button
              key={skill.name}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              aria-label={"Show " + skill.name}
              className={
                index === activeIndex
                  ? "skills-dot active"
                  : "skills-dot"
              }
            />
          ))}
        </div>

      </div>
    </section>
  );
}