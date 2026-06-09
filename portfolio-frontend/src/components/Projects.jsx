import { useState, useEffect } from "react";
import "./Projects.css";

const fallbackProjects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    image: "🛒",
    description:
      "A full-stack e-commerce platform with product catalog, shopping cart, and payment integration",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveDemo: null,
    sourceCode: "https://github.com/shreyaslande1/E-comerce_website-amazon_clone-.git",
    comingSoon: false,
  },
  {
    id: 2,
    title: "Task Management App",
    image: "✅",
    description:
      "A collaborative task management application with real-time updates and team features",
    technologies: ["React", "Firebase", "Tailwind CSS"],
    liveDemo: null,
    sourceCode: null,
    comingSoon: true,
  },
  {
    id: 3,
    title: "Weather Dashboard",
    image: "🌤️",
    description:
      "Real-time weather application with location-based forecasts and weather alerts",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    liveDemo: null,
    sourceCode: "https://github.com/shreyaslande1/project-by-shreyas.git",
    comingSoon: false,
  },
  {
    id: 4,
    title: "Social Media Platform",
    image: "💬",
    description:
      "A modern social media platform with user profiles, posts, likes, and comments",
    technologies: ["MERN Stack", "JWT Auth", "Socket.io"],
    liveDemo: null,
    sourceCode: null,
    comingSoon: true,
  },
  {
    id: 5,
    title: "Blog & CMS",
    image: "📝",
    description:
      "A content management system with markdown editor, categories, and comment system",
    technologies: ["React", "Node.js", "PostgreSQL", "Redux"],
    liveDemo: null,
    sourceCode: null,
    comingSoon: true,
  },
  {
    id: 6,
    title: "Portfolio Website",
    image: "💼",
    description:
      "A modern portfolio website showcasing projects, skills, and professional information",
    technologies: ["React", "Vite", "CSS3", "Responsive Design"],
    liveDemo: null,
    sourceCode: null,
    comingSoon: true,
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/projects");
        const resData = await response.json();
        if (resData.success && resData.data && resData.data.length > 0) {
          setProjects(resData.data);
        } else {
          setProjects(fallbackProjects);
        }
      } catch (error) {
        console.warn("Could not fetch projects from server. Using fallback data. Error:", error);
        setProjects(fallbackProjects);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section id="projects" className="section projects-section">
      <div className="section-content">
        <div className="section-header">
          <h2>
            My <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-description">
            Explore my portfolio of innovative projects built with modern
            technologies
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <div
              key={project.id || project._id || index}
              className={`project-card${project.comingSoon ? " project-card--coming-soon" : ""}`}
              style={{ "--delay": `${index * 0.1}s` }}
            >
              {/* Coming Soon Badge */}
              {project.comingSoon && (
                <span className="coming-soon-badge">🚧 In Progress</span>
              )}

              {/* Project Image */}
              <div className="project-image">
                {project.image &&
                (project.image.startsWith("http") ||
                  project.image.startsWith("/") ||
                  project.image.startsWith(".")) ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-img-src"
                  />
                ) : (
                  <span className="project-icon">{project.image || "💼"}</span>
                )}
              </div>

              {/* Project Title */}
              <h3 className="project-title">{project.title}</h3>

              {/* Project Description */}
              <p className="project-description">{project.description}</p>

              {/* Technologies */}
              <div className="project-technologies">
                {project.technologies &&
                  project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">
                      {tech}
                    </span>
                  ))}
              </div>

              {/* Buttons */}
              <div className="project-buttons">
                {/* Live Demo Button */}
                {project.comingSoon ? (
                  <span
                    className="btn btn-primary btn--disabled"
                    title="This project is still in progress"
                  >
                    Coming Soon
                  </span>
                ) : project.liveDemo ? (
                  <a
                    href={project.liveDemo}
                    className="btn btn-primary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Live Demo →
                  </a>
                ) : null}

                {/* GitHub Button */}
                {project.comingSoon ? (
                  <span
                    className="btn btn-secondary btn--disabled"
                    title="Repository not available yet"
                  >
                    GitHub 🔗
                  </span>
                ) : project.sourceCode ? (
                  <a
                    href={project.sourceCode}
                    className="btn btn-secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub 🔗
                  </a>
                ) : null}
              </div>
            </div>
          ))}
        </div>

        {/* Projects CTA */}
        <div className="projects-cta">
          <p>
            Interested in collaborating? <a href="#contact">Get in touch →</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Projects;
