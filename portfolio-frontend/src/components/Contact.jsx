import { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./Contact.css";

// ─── EmailJS Configuration (read from .env.local) ───────────────────────────
// Keys are loaded from portfolio-frontend/.env.local — never hardcode them here.
// Required variables (all must start with VITE_ so Vite exposes them):
//   VITE_EMAILJS_SERVICE_ID  → EmailJS Dashboard → Email Services → Service ID
//   VITE_EMAILJS_TEMPLATE_ID → EmailJS Dashboard → Email Templates → Template ID
//   VITE_EMAILJS_PUBLIC_KEY  → EmailJS Dashboard → Account → General → Public Key
//
// Template variables used in emailjs.send() payload (must match your template):
//   {{from_name}}   – sender's name
//   {{from_email}}  – sender's email
//   {{message}}     – message body
const EMAILJS_SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// ─── Dev-time config guard ───────────────────────────────────────────────────
// Logs a clear warning in the console if any key is missing / still a placeholder.
const EMAILJS_CONFIGURED =
  EMAILJS_SERVICE_ID  && !EMAILJS_SERVICE_ID.includes("YOUR") &&
  EMAILJS_TEMPLATE_ID && !EMAILJS_TEMPLATE_ID.includes("YOUR") &&
  EMAILJS_PUBLIC_KEY  && !EMAILJS_PUBLIC_KEY.includes("YOUR");

if (!EMAILJS_CONFIGURED) {
  console.error(
    "%c[Contact Form] EmailJS is not configured!\n" +
    "Open portfolio-frontend/.env.local and fill in:\n" +
    "  VITE_EMAILJS_SERVICE_ID\n" +
    "  VITE_EMAILJS_TEMPLATE_ID\n" +
    "  VITE_EMAILJS_PUBLIC_KEY\n" +
    "Then RESTART the Vite dev server (Ctrl+C → npm run dev).",
    "color: #ff4a4a; font-weight: bold;"
  );
}

// ─── WhatsApp Configuration ──────────────────────────────────────────────────
const WHATSAPP_NUMBER = "919356212824"; // country code + number, no '+'

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Validation function
  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.from_name.trim()) {
      newErrors.from_name = "Name is required";
    } else if (formData.from_name.trim().length < 2) {
      newErrors.from_name = "Name must be at least 2 characters";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.from_email.trim()) {
      newErrors.from_email = "Email is required";
    } else if (!emailRegex.test(formData.from_email)) {
      newErrors.from_email = "Please enter a valid email";
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateForm();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setIsSuccess(false);

    // ── 0. Guard: block submission if EmailJS is not configured ──────────────
    if (!EMAILJS_CONFIGURED) {
      setErrors({
        submit:
          "⚠️ EmailJS is not configured. Open .env.local, fill in your Service ID, " +
          "Template ID, and Public Key, then restart the dev server.",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // ── 1. Send email via EmailJS ──────────────────────────────────────────
      //    Payload keys must EXACTLY match the {{variable}} tags in your
      //    EmailJS template. Edit the keys below if you used different names.
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name:  formData.from_name,  // matches {{from_name}} in template
          from_email: formData.from_email, // matches {{from_email}} in template
          message:    formData.message,    // matches {{message}} in template
        },
        EMAILJS_PUBLIC_KEY
      );

      // ── 2. Reset form & show success banner ───────────────────────────────
      setFormData({ from_name: "", from_email: "", message: "" });
      setIsSuccess(true);
      setTimeout(() => setIsSuccess(false), 5000);

      // ── 3. Open WhatsApp with pre-filled message ───────────────────────────
      window.open(
        "https://wa.me/919356212824?text=Hello%20Shreyas,%20someone%20left%20a%20message%20on%20your%20portfolio!",
        "_blank"
      );

    } catch (error) {
      console.error("Contact form submit error:", error);
      setErrors({
        submit: "Failed to send your message. Please check your EmailJS configuration or try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="section-content">
        {/* Section Header */}
        <div className="section-header">
          <h2>
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="section-description">
            Have a project in mind or want to collaborate? I'd love to hear from
            you! Fill out the form below and I'll get back to you as soon as
            possible.
          </p>
        </div>

        <div className="contact-container">
          {/* Contact Form */}
          <form className="contact-form" onSubmit={handleSubmit}>
            {/* Name Field */}
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="from_name"
                name="from_name"
                value={formData.from_name}
                onChange={handleChange}
                placeholder="Enter your name"
                className={`form-input ${errors.from_name ? "error" : ""}`}
              />
              {errors.from_name && (
                <span className="error-message">{errors.from_name}</span>
              )}
            </div>

            {/* Email Field */}
            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="from_email"
                name="from_email"
                value={formData.from_email}
                onChange={handleChange}
                placeholder="Enter your email address"
                className={`form-input ${errors.from_email ? "error" : ""}`}
              />
              {errors.from_email && (
                <span className="error-message">{errors.from_email}</span>
              )}
            </div>

            {/* Message Field */}
            <div className="form-group">
              <label htmlFor="message" className="form-label">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me about your project or ideas..."
                rows="6"
                className={`form-input form-textarea ${errors.message ? "error" : ""}`}
              ></textarea>
              {errors.message && (
                <span className="error-message">{errors.message}</span>
              )}
            </div>

            {errors.submit && (
              <div style={{ color: "#ff4a4a", fontSize: "0.9rem", marginBottom: "1rem" }}>
                {errors.submit}
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              className="submit-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <span className="button-loader">Sending...</span>
              ) : (
                <>
                  Send Message <span className="button-arrow">→</span>
                </>
              )}
            </button>
          </form>

          {/* Contact Info */}
          <div className="contact-info">
            <div className="info-card">
              <div className="info-icon">📧</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:shreyaslande200@gmail.com" style={{ color: "rgba(255, 255, 255, 0.6)", textDecoration: "none", transition: "color 0.3s" }} onMouseOver={(e) => e.target.style.color = "#64ffda"} onMouseOut={(e) => e.target.style.color = "rgba(255, 255, 255, 0.6)"}>
                  shreyaslande200@gmail.com
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📱</div>
              <h3>Phone</h3>
              <p>
                <a
                  href="tel:+919356212824"
                  style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.3s" }}
                  onMouseOver={(e) => (e.target.style.color = "#64ffda")}
                  onMouseOut={(e) => (e.target.style.color = "rgba(255,255,255,0.6)")}
                >
                  +91 9356212824
                </a>
              </p>
            </div>

            <div className="info-card">
              <div className="info-icon">📍</div>
              <h3>Location</h3>
              <p>Malkapur, District Buldhana,<br />Maharashtra - 443401</p>
            </div>

            <div className="info-card">
              <div className="info-icon">⏰</div>
              <h3>Response Time</h3>
              <p>Within 24 hours</p>
            </div>
          </div>
        </div>

        {/* Success Message */}
        {isSuccess && (
          <div className="success-message">
            <div className="success-content">
              <span className="success-icon">✓</span>
              <h3>Thank You!</h3>
              <p>
                Your message has been sent successfully. I'll get back to you
                soon!
              </p>
            </div>
          </div>
        )}

        {/* Social Links */}
        <div className="social-section">
          <p>Connect with me on social media:</p>
          <div className="social-links">
            <a
              href="https://www.linkedin.com/in/shreyas-lande-94b973344/"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon"><FaLinkedin size={18} /></span>
              LinkedIn
            </a>
            <a
              href="https://github.com/shreyaslande1"
              className="social-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="social-icon"><FaGithub size={18} /></span>
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
