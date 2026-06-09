const express = require("express");
const router = express.Router();
const {
  getAllProjects,
  getProjectById,
  createProject,
  updateProject,
  deleteProject,
} = require("../controllers/projectController");

// TODO: Add authentication middleware for protected routes
// const { authenticateToken } = require("../middleware/auth");

// Routes
router.get("/", getAllProjects);
router.get("/:id", getProjectById);

// Protected routes (require admin authentication)
// router.post("/", authenticateToken, createProject);
// router.put("/:id", authenticateToken, updateProject);
// router.delete("/:id", authenticateToken, deleteProject);

// Unprotected for now (development)
router.post("/", createProject);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

module.exports = router;
