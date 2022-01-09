
// Importing the modules
const jsonwebtoken = require('jsonwebtoken');
const Doctor = require('../models/doctor');

// Middleware for decoding the JsonWebToken and set the doctor in request
module.exports = async function(req,resp,next){

    const token = req.header("Authorization");

    if(!token)
    {
        return resp.status(401).json({
          message: "Unauthorized",
        });
    }

    try 
    {
      // Decoding the token
      var decodedtoken = jsonwebtoken.verify(token,"klopiyihospitalapi");

      // Find the doctor decoded_id
      let doctor = await Doctor.findById(decodedtoken._id);

      if(doctor)
      {
        // Set the doctor id in request
            req.user = doctor;
            next();
      }
      else
      {
          return resp.status(400).json({
            message: "Invalid token",
          });
      }
      
    }
    catch (err) {
        return resp.status(400).json({
         message: "Invalid token",
        });
    }



}