// Importing the modules
const express = require("express");
const router = express.Router();


console.log("Router index file is loaded");

// route for /doctors
router.use("/doctors", require("./doctors"));

// route for /patients
router.use("/patients", require("./paitents"));

// route for /reports
router.use("/reports", require('./reports'));

module.exports = router;