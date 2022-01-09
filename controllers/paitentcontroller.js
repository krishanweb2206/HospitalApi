// Importing the modules
const Paitent = require('../models/patient');
const Doctor = require('../models/doctor');
const Report = require('../models/report');

// Register the paitent and if exists show all reports
module.exports.addPaitent = async function(req,resp){

    try
    {
        let paitent = await Paitent.findOne({
          name: req.body.name,
          mobileno: req.body.mobileno,
        });

        if(paitent)
        {
             return resp.redirect(`/patients/${paitent._id}/all_reports`);
        }

        let newpaitent = await Paitent.create({
          name: req.body.name,
          mobileno: req.body.mobileno,
        }); 
        
        return resp.status(200).json({
          message: "Paitent Register Successfully .....",
          data: {
                paitent_id:newpaitent._id
            },
        });
    }
    catch(error)
    {
        console.log(`Error comes during adding the patient is : ${error}`);

        return resp.status(500).json({
           message: "Internal Server Error",
         });
    }
}

// Create a report for paitient through doctor
module.exports.createReport = async function(req,resp)
{

  try 
  {

    let paitent = await Paitent.findById(req.params.id)

    if(!paitent)
    {
        return resp.status(404).json({
          message: "Patient Not Found in Database....",
        });
    }

    let paitentreport = await Report.create({

      created_by:req.user,
      status:req.body.status,
      patient:paitent._id

    });

    paitent.reports.push(paitentreport);
    paitent.save();

    return resp.status(200).json({
      message: "Paitent Report Created  Successfully .....",
      data: {
        Paitentreport: paitentreport,
      },
    });

  }
  catch (error) {

    console.log(`Error comes during creating the patient report is : ${error}`);

    return resp.status(500).json({
      message: "Internal Server Error",
    });
  }


}

// Show all reports of paitent 
module.exports.AllReports = async function(req,resp)
{

  try 
  {

    let paitent = await Paitent.findById(req.params.id)

    if(!paitent)
    {
        return resp.status(404).json({
          message: "Patient Not Found in Database....",
        });
    }

   let reports = await Paitent.findById(req.params.id).populate({path:'reports'});

    return resp.status(200).json({
      message: "Paitent already present in Database.......",
      data: {
        Allreport: reports,
      },
    });

  }
  catch (error) {

    console.log(`Error comes during fetching the patient all report is : ${error}`);

    return resp.status(500).json({
      message: "Internal Server Error",
    });
  }



}