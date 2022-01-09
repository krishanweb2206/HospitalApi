// Import the module
const mongoose = require("mongoose");

// Define Patient Schema according to requirement
const PatientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    mobileno: {
      type: String,
      required: true,
      min: 1000000000,
      max: 9999999999,
    },

    reports: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Report",
      },
    ],
  },
  {
    timestamps: true,
  }
);

// indexing in patient collection with unique name and mobile number pair
PatientSchema.index({ name: 1, mobileno: 1 }, { unique: true });

const Patient = mongoose.model("Patient", PatientSchema);

module.exports = Patient;
