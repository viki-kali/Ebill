var paymentService = require('./paymentService');


var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await paymentService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createUserControllerFn = async (req, res) => 
{
    var status = await paymentService.createUserDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "consumer added successfully" });
    } else {
        res.send({ "status": false, "message": "Action failed" });
    }
}

var updateUserController = async (req, res) => 
{
    console.log(req.params.id);
    console.log(req.body);
     
    var result = await paymentService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "consumer details updated"} );
     } else {
         res.send({ "status": false, "message": "Action failed" });
     }
}

var deleteUserController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await paymentService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "consumer deleted"} );
     } else {
         res.send({ "status": false, "message": "Action failed" });
     }
}

module.exports = { getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController };
