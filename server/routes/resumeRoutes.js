const express = require("express");
const router = express.Router();
const resumeController = require("../controllers/resumeController");
const { upload } = require("../controllers/resumeController");

// Upload resume route
router.post("/", upload.single("resume"), resumeController.createResume);

// Get user's resume route
router.get("/", resumeController.getResumesByEmail);

module.exports = router;
