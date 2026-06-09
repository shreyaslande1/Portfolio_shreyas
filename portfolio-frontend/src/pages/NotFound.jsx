import { useNavigate } from "react-router-dom";
import "./NotFound.css";

const NotFound = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate("/");
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <div className="error-code">404</div>
        <h1>Page Not Found</h1>
        <p className="error-message">
          Sorry, the page you're looking for doesn't exist or has been moved.
        </p>

        <div className="error-illustration">
          <span className="illustration-icon">🔍</span>
        </div>

        <div className="error-actions">
          <button onClick={handleGoHome} className="btn-home">
            Back to Home
          </button>
        </div>

        <div className="error-suggestions">
          <p>Here are some helpful links:</p>
          <div className="suggestion-links">
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/projects">Projects</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
