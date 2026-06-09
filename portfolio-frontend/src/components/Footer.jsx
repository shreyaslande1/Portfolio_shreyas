import { useState, useEffect } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Handle scroll visibility of back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      icon: <FaLinkedin size={20} />,
      url: "https://www.linkedin.com/in/shreyas-lande-94b973344/",
      isExternal: true,
    },
    {
      name: "GitHub",
      icon: <FaGithub size={20} />,
      url: "https://github.com/shreyaslande1",
      isExternal: true,
    },
    {
      name: "Email",
      icon: <FaEnvelope size={20} />,
      url: "mailto:shreyaslande200@gmail.com",
      isExternal: false,
    },
  ];

  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Footer Top Section */}
        <div className="footer-top">
          {/* Brand Section */}
          <div className="footer-section footer-brand">
            <div className="footer-logo">
              <span className="logo-symbol">&lt;/&gt;</span>
              <span className="logo-text">Shreyas Lande</span>
            </div>
            <p className="footer-tagline">
              MERN Stack Developer | Building Digital Solutions
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="footer-section footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="links-list">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="footer-link">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links Section */}
          <div className="footer-section footer-socials">
            <h3 className="footer-title">Connect</h3>
            <div className="social-icons">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="social-icon-link"
                  title={social.name}
                  target={social.isExternal ? "_blank" : undefined}
                  rel={social.isExternal ? "noopener noreferrer" : undefined}
                >
                  <span className="social-icon">{social.icon}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Contact Section */}
          <div className="footer-section footer-contact">
            <h3 className="footer-title">Contact</h3>
            <div className="contact-info">
              <p className="contact-item">
                <span className="contact-icon">📧</span>
                shreyaslande200@gmail.com
              </p>
              <p className="contact-item">
                <span className="contact-icon">📱</span>
                +91 93562 12824
              </p>
              <p className="contact-item">
                <span className="contact-icon">📍</span>
                Malkapur, District Buldhana, Maharashtra, India - (443401)
              </p>
            </div>
          </div>
        </div>

        {/* Footer Divider */}
        <div className="footer-divider"></div>

        {/* Footer Bottom Section */}
        <div className="footer-bottom">
          <div className="copyright">
            <p>&copy; {currentYear} Shreyas Lande. All rights reserved.</p>
          </div>

          <div className="footer-meta">
            <a href="#" className="meta-link">
              Privacy Policy
            </a>
            <span className="meta-separator">•</span>
            <a href="#" className="meta-link">
              Terms of Service
            </a>
            <span className="meta-separator">•</span>
            <span className="meta-text">Made with ❤️ by Shreyas</span>
          </div>

          {/* Back to Top Button */}
          {showBackToTop && (
            <button
              className="back-to-top"
              onClick={scrollToTop}
              title="Back to top"
              aria-label="Back to top"
            >
              <span className="back-to-top-icon">↑</span>
            </button>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
