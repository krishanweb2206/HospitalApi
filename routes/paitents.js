// Importing the modules
const express = require("express");
const router = express.Router();

// Importing the paitent controller
const PaitientController = require('../controllers/paitentcontroller');

// Middleware for verify the JsonWebToken(doctor)
const validatetoken = require('../config/validatewebtoken');

// route for /patients/register
router.post("/register", validatetoken,PaitientController.addPaitent);

// route for /patients/id/create_report
router.post("/:id/create_report", validatetoken, PaitientController.createReport);

// route for /patients/id/all_reports
router.get("/:id/all_reports", validatetoken, PaitientController.AllReports);

module.exports = router;