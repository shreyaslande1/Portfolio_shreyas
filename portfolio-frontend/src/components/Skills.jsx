import { useState, useEffect } from "react";
import "./Skills.css";

const fallbackSkills = [
  {
    name: "HTML",
    icon: "🔖",
    proficiency: 95,
    description: "Semantic HTML5",
  },
  {
    name: "CSS",
    icon: "🎨",
    proficiency: 90,
    description: "Responsive & Modern",
  },
  {
    name: "JavaScript",
    icon: "⚡",
    proficiency: 92,
    description: "ES6+ & Beyond",
  },
  {
    name: "React",
    icon: "⚛️",
    proficiency: 88,
    description: "Components & Hooks",
  },
  {
    name: "Node.js",
    icon: "🟢",
    proficiency: 85,
    description: "Server & Runtime",
  },
  {
    name: "Express.js",
    icon: "🚀",
    proficiency: 83,
    description: "Web Framework",
  },
  {
    name: "MongoDB",
    icon: "🍃",
    proficiency: 82,
    description: "NoSQL Database",
  },
  {
    name: "Git",
    icon: "📊",
    proficiency: 90,
    description: "Version Control",
  },
  {
    name: "GitHub",
    icon: "🐙",
    proficiency: 88,
    description: "Repository & Collaboration",
  },
];

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/skills");
        const resData = await response.json();
        if (resData.success && resData.data && resData.data.length > 0) {
          setSkills(resData.data);
        } else {
          setSkills(fallbackSkills);
        }
      } catch (error) {
        console.warn("Could not fetch skills from server. Using fallback data. Error:", error);
        setSkills(fallbackSkills);
      } finally {
        setLoading(false);
      }
    };
    fetchSkills();
  }, []);

  return (
    <section id="skills" className="skills-section">
      <div className="skills-container">
        {/* Section Header */}
        <div className="skills-header">
          <h2>Technical Skills</h2>
          <div className="header-underline"></div>
          <p className="section-subtitle">MERN Stack & Development Tools</p>
        </div>

        {/* Skills Description */}
        <div className="skills-description">
          <p>
            I have developed a strong foundation in Full Stack web development
            with expertise in the MERN stack. Below are my technical skills with
            proficiency levels.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-header">
                <div className="skill-icon">{skill.icon}</div>
                <div className="skill-info">
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              </div>

              <div className="skill-progress-container">
                <div className="skill-progress-bar">
                  <div
                    className="skill-progress-fill"
                    style={{ width: `${skill.proficiency}%` }}
                  ></div>
                </div>
                <span className="skill-percentage">{skill.proficiency}%</span>
              </div>

              <div className="skill-level">
                {skill.proficiency >= 90 && (
                  <span className="level-badge expert">Expert</span>
                )}
                {skill.proficiency >= 80 && skill.proficiency < 90 && (
                  <span className="level-badge intermediate">Advanced</span>
                )}
                {skill.proficiency < 80 && (
                  <span className="level-badge beginner">Proficient</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Skills Stats */}
        <div className="skills-stats">
          <div className="stat-item">
            <div className="stat-number">{skills.length}+</div>
            <p className="stat-label">Technologies</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">MERN</div>
            <p className="stat-label">Stack Expertise</p>
          </div>
          <div className="stat-item">
            <div className="stat-number">100%</div>
            <p className="stat-label">Dedication</p>
          </div>
        </div>

        {/* CTA */}
        <div className="skills-cta">
          <p>Want to see these skills in action?</p>
          <a href="#projects" className="skills-link">
            Check out my projects →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
