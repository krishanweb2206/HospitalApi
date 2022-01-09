// Importing the modules
const Doctor = require('../models/doctor');
const bcrypt = require('bcrypt');
const jsonwebtoken = require("jsonwebtoken");

// Create a doctor credentials.
module.exports.CreateDoctor =  async function(req,resp){

    try
    {
        let doctor = await Doctor.findOne({email:req.body.email});

        if(doctor){
            
            return resp.status(400).json({
                message: "E-mail already exists"
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashpassword = await bcrypt.hash(req.body.password, salt);

        let newDoctor = await Doctor.create({
          name: req.body.name,
          email: req.body.email,
          password:hashpassword,
        });

        return resp.status(200).json({
            message: "Doctor you are added into database ...Please try login now",
        });
    }
    catch(error)
    {
        console.log(`Error comes on registering the doctor is : ${error}`);
         return resp.status(500).json({
           message: "Internal Server Error"
         });
    }
}

// Create a session and create the token which is valid only for 1 hrs
module.exports.createSession = async function(req,resp){

    try {

        let doctor = await Doctor.findOne({ email: req.body.email });

        if (doctor) {
         
            const validpassword = await bcrypt.compare(req.body.password,doctor.password);

            if(validpassword){

                return resp.status(200).json({
                  message: "Successfully login ......",
                  data: {
                    token: jsonwebtoken.sign({ _id: doctor._id },"klopiyihospitalapi",{ expiresIn:'3600000' }),
                  }

                });

            }
        }

         return resp.status(422).json({
           message: "Invalid Username or Password.......",
         });

    }
    catch (error)
    {
      console.log(`Error comes during loging the doctor is : ${error}`);

      return resp.status(500).json({
        message: "Internal Server Error",
      });
    }
}