import "./About.css";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        {/* Section Header */}
        <div className="about-header">
          <h2>About Me</h2>
          <div className="header-underline"></div>
          <p className="section-subtitle">
            Passionate Full Stack Developer | Problem Solver | Tech Enthusiast
          </p>
        </div>

        {/* Introduction */}
        <div className="about-introduction">
          <p>
            I'm <span className="highlight">Shreyas Lande</span>, a passionate
            Full Stack Developer with a strong foundation in MERN stack
            technologies. I believe in building scalable, user-friendly
            applications that make a real impact. With a keen eye for detail and
            a love for clean code, I'm committed to continuous learning and
            growth in the ever-evolving tech industry.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="about-grid">
          {/* Education Card */}
          <div className="about-card education-card">
            <div className="card-icon">🎓</div>
            <div className="card-content">
              <h3>Education</h3>
              <div className="card-details">
                <div className="detail-item">
                  <h4>Diploma in Information Technology</h4>
                  <p className="institution">Government Polytechnic Nagpur</p>
                  <p className="duration">Graduation: 2030</p>
                  <p className="detail-description">
                    Maintained a 90% average in each semester throughout the
                    program. Graduated without a standard CGPA/SGPA grading system.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Career Objective Card */}
          <div className="about-card objective-card">
            <div className="card-icon">🎯</div>
            <div className="card-content">
              <h3>Career Objective</h3>
              <p className="card-description">
                To become a software engineer where I can leverage my programming
                skills and passion for building scalable web applications to create
                innovative solutions and contribute to the success of a dynamic team.
              </p>
              <div className="objective-highlights">
                <span className="highlight-tag">Full Stack Development</span>
                <span className="highlight-tag">Software Engineering</span>
                <span className="highlight-tag">Web Applications</span>
              </div>
            </div>
          </div>

          {/* Internship Experience Card */}
          <div className="about-card internship-card">
            <div className="card-icon">💼</div>
            <div className="card-content">
              <h3>Internship Experience</h3>
              <div className="internship-item">
                <div className="internship-header">
                  <h4>MERN Stack Developer</h4>
                  <span className="internship-duration">4 Months</span>
                </div>
                <p className="company-name">CodeNovaTechSolutions</p>
                <p className="internship-description">
                  Developed and optimized web applications using React, Node.js,
                  Express, and MongoDB. Contributed to building RESTful APIs, designed
                  responsive user interfaces, and integrated database solutions to deliver
                  high-quality software features.
                </p>
                <div className="internship-skills">
                  <span className="skill-tag">React</span>
                  <span className="skill-tag">Node.js</span>
                  <span className="skill-tag">MongoDB</span>
                  <span className="skill-tag">REST APIs</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Facts Card */}
          <div className="about-card facts-card">
            <div className="card-icon">✨</div>
            <div className="card-content">
              <h3>Quick Facts</h3>
              <div className="facts-list">
                <div className="fact-item">
                  <span className="fact-label">Location:</span>
                  <span className="fact-value">Malkapur, District Buldhana, Maharashtra, India - (443401)</span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Languages:</span>
                  <span className="fact-value">
                    JavaScript, Python, HTML/CSS, C, C++, JAVA etc.
                  </span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Experience:</span>
                  <span className="fact-value">
                    1+ Years (Including Internship)
                  </span>
                </div>
                <div className="fact-item">
                  <span className="fact-label">Availability:</span>
                  <span className="fact-value">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="about-cta">
          <p>Want to know more about my journey?</p>
          <a href="#contact" className="about-link">
            Get in touch with me →
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
