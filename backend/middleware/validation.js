// Validation Middleware

// Validate email format
const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

// Validate required fields in request body
const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;

  if (!name || name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: "Name is required and must be at least 2 characters",
    });
  }

  if (!email || !validateEmail(email)) {
    return res.status(400).json({
      success: false,
      message: "Valid email is required",
    });
  }

  if (!message || message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: "Message is required and must be at least 10 characters",
    });
  }

  next();
};

module.exports = {
  validateEmail,
  validateContactForm,
};
