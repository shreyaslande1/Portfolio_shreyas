import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import profileImg from "../assets/profile.png";
import "./Hero.css";

const Hero = () => {

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-text">Welcome to my portfolio</span>
              <span className="greeting-emoji">👋</span>
            </div>

            <h1 className="hero-name">
              <span className="first-name">Shreyas</span>
              <span className="last-name">Lande</span>
            </h1>

            <h2 className="hero-title">MERN Stack Developer</h2>

            <p className="hero-description">
              I build modern web applications using React, Node.js, Express, and
              MongoDB. Passionate about creating beautiful, responsive, and
              user-friendly digital experiences. Let's transform your ideas into
              reality!
            </p>

            <div className="hero-buttons">
              <a
                href="/resume.pdf"
                download="Shreyas_Lande_Resume.pdf"
                className="btn btn-primary"
              >
                <span className="btn-icon">📥</span>
                Download Resume
              </a>

              <button className="btn btn-secondary" onClick={handleContactMe}>
                <span className="btn-icon">💬</span>
                Contact Me
              </button>
            </div>

            <div className="hero-socials">
              <a href="https://github.com/shreyaslande1" className="social-icon" title="GitHub" target="_blank" rel="noopener noreferrer">
                <FaGithub size={20} />
              </a>
              <a href="https://www.linkedin.com/in/shreyas-lande-94b973344/" className="social-icon" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <FaLinkedin size={20} />
              </a>
              <a href="mailto:shreyaslande200@gmail.com" className="social-icon" title="Email">
                <FaEnvelope size={20} />
              </a>
            </div>
          </div>

          <div className="hero-image">
            <div className="image-container">
              <div className="image-placeholder">
                <img src={profileImg} alt="Shreyas Lande" className="hero-profile-img" />
              </div>
              <div className="image-glow"></div>
            </div>
          </div>
        </div>

        <div className="hero-scroll">
          <p>Scroll to explore</p>
          <div className="scroll-indicator">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
