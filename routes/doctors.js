// Importing the modules
const express = require("express");
const router = express.Router();

// Importing the doctor controller
const DoctorControllers = require("../controllers/doctorcontrollers");

// route for /doctors/register
router.post("/register", DoctorControllers.CreateDoctor);

// route for /doctors/login
router.post("/login", DoctorControllers.createSession);

module.exports = router;
