// Import the modules
const express = require('express');
const app = express();
const port = 8991;

// DATABASE CONFIG
const db = require('./config/mongoose');

// FORM DATA ENCODERS
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use("/", require("./routes"));


app.listen(port, function (error) {
  if (error) {
    console.log(`Error in connecting with server: ${error}`);
  }
  console.log(`Successfully connecting with server ${port}`);
});
