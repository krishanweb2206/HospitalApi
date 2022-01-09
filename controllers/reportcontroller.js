// Importing the modules
const Report = require('../models/report');

// Dispaly all paitent reports by status
module.exports.fetchreports = async function(req,resp)
{
    try
    {
        let statusreports = await Report.find({'status':req.body.status});
         return resp.status(200).json({statusreports});
    }
    catch(error)
    {
        console.log(`Error comes during fetching the report by status is : ${error}`);

        return resp.status(500).json({
          message: "Internal Server Error",
        });
    }


}