// Import the modules
const mongoose = require('mongoose');

// Define Report Schema according to requirement
const ReportSchema = new mongoose.Schema({

  created_by: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },

  status: {
    type: String,
    enum: [
      "Negative",
      "Travelled-Quarantine",
      "Symptoms-Quarantine",
      "Positive-Admit",
    ],
    required: true,
  },

  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },

},{
    timestamps: true,
});


const Report = mongoose.model("Report", ReportSchema);

module.exports = Report;