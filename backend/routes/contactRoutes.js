const express = require("express");
const router = express.Router();
const {
  sendMessage,
  getAllMessages,
  getMessageById,
  markAsRead,
  deleteMessage,
} = require("../controllers/contactController");
const { validateContactForm } = require("../middleware/validation");

// TODO: Add authentication middleware for protected routes
// const { authenticateToken } = require("../middleware/auth");

// Public routes
router.post("/", validateContactForm, sendMessage);

// Protected routes (require admin authentication)
// router.get("/", authenticateToken, getAllMessages);
// router.get("/:id", authenticateToken, getMessageById);
// router.patch("/:id/read", authenticateToken, markAsRead);
// router.delete("/:id", authenticateToken, deleteMessage);

// Unprotected for now (development)
router.get("/", getAllMessages);
router.get("/:id", getMessageById);
router.patch("/:id/read", markAsRead);
router.delete("/:id", deleteMessage);

module.exports = router;
