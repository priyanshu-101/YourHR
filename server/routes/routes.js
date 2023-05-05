const express = require("express");
const router = express.Router();

// Import routes
const authRoutes = require("./authRoutes");
const resumeRoutes = require("./resumeRoutes");

// Routes
router.use("/auth", authRoutes);
router.use("/resume", resumeRoutes);

module.exports = router;
