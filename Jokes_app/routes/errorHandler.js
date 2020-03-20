var fs = require('fs');

//Function to handle errors 
var errorHandler = function(err,req,res,next){
    if(err){
        fs.appendFile("errorLogger.txt",err.stack,err=>{
            if(err){
                console.log("Error in writing to error logger");
            }
        })

        //Setting status code for error response
        res.status(500);

        //Sending response in JSON
        res.send({"Message":err.message});
        next();
    }
}

module.exports = errorHandler;