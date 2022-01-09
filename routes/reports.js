// Importing the modules
const express = require("express");
const router = express.Router();

// Importing the Report Controller
const ReportController = require("../controllers/reportcontroller");

// route for /reports/status
router.get("/:status", ReportController.fetchreports);

module.exports = router;
