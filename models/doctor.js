// Import the module
const mongoose = require("mongoose");

// Define doctor Schema according to requirement
const doctorSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true,
    maxlength: 120,
  },

  email: {
    type: String,
    required: true,
    unique:true
  },

  password:{
      type:String,
      required:true,
      minlength:6,
      maxlength:100
  }

},{
    timestamps: true,
});

const Doctor = mongoose.model('Doctor',doctorSchema);

module.exports = Doctor;