const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

// ================================
// MIDDLEWARE SETUP
// ================================

// CORS Configuration
app.use(
  cors({
    origin: process.env.CLIENT_URL || "http://localhost:5173",
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

// JSON Body Parser
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb", extended: true }));

// Serve static assets from public folder
app.use("/public", express.static(path.join(__dirname, "public")));

// Request Logger Middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// ================================
// DATABASE CONNECTION
// ================================

const connectDB = require("./config/database");

// Call database connection
connectDB();

// ================================
// ROUTES
// ================================

// Health check route
app.get("/api/health", (req, res) => {
  res.json({
    success: true,
    message: "Backend server is running",
    timestamp: new Date(),
  });
});

// Welcome route
app.get("/api", (req, res) => {
  res.json({
    success: true,
    message: "Shreyas Lande Portfolio API",
    version: "1.0.0",
    endpoints: {
      health: "/api/health",
      projects: "/api/projects",
      messages: "/api/messages",
      skills: "/api/skills",
    },
  });
});

// Import route files
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");
const skillRoutes = require("./routes/skillRoutes");

// Mount routes
app.use("/api/projects", projectRoutes);
app.use("/api/messages", contactRoutes);
app.use("/api/skills", skillRoutes);

// ================================
// ERROR HANDLING MIDDLEWARE
// ================================

// 404 Not Found Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
    path: req.path,
    method: req.method,
  });
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);

  // Mongoose validation error
  if (err.name === "ValidationError") {
    return res.status(400).json({
      success: false,
      message: "Validation Error",
      errors: Object.values(err.errors).map((e) => e.message),
    });
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const field = Object.keys(err.keyPattern)[0];
    return res.status(400).json({
      success: false,
      message: `Duplicate value for field: ${field}`,
    });
  }

  // JWT errors
  if (err.name === "JsonWebTokenError") {
    return res.status(401).json({
      success: false,
      message: "Invalid token",
    });
  }

  // Default error response
  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
    ...(process.env.NODE_ENV === "development" && { stack: err.stack }),
  });
});

// ================================
// SERVER STARTUP
// ================================

const PORT = process.env.PORT || 5000;

const server = app.listen(PORT, () => {
  console.log(`
╔════════════════════════════════════════════════════════╗
║   Shreyas Lande Portfolio Backend Server               ║
║   🚀 Server is running on http://localhost:${PORT}       ║
║   Environment: ${process.env.NODE_ENV || "development"}              ║
╚════════════════════════════════════════════════════════╝
  `);
});

// Handle Graceful Shutdown
process.on("SIGTERM", () => {
  console.log("SIGTERM received, shutting down gracefully...");
  server.close(() => {
    console.log("Server closed");
    mongoose.connection.close();
    process.exit(0);
  });
});

module.exports = app;
