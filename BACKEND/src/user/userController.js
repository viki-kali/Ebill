var userService = require('./userService');


var loginUserControllerFn = async (req, res) => {

        let result = await userService.loginuserDBService(req.body);
        if (result) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    }

/*
var loginUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await userService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }

    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
}*/
var getDataConntrollerfn = async (req, res) =>
{
    var empolyee = await userService.getDataFromDBService();
    res.send({ "status": true, "data": empolyee });
}

var createUserControllerFn = async (req, res) => 
{
    var status = await userService.createUserDBService(req.body);
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
     
    var result = await userService.updateUserDBService(req.params.id,req.body);

     if (result) {
        res.send({ "status": true, "message": "consumer details updated"} );
     } else {
         res.send({ "status": false, "message": "Action failed" });
     }
}

var deleteUserController = async (req, res) => 
{
     console.log(req.params.id);
     var result = await userService.removeUserDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "consumer deleted"} );
     } else {
         res.send({ "status": false, "message": "Action failed" });
     }
}

var searchfn = async (req, res) =>
{
     var result = await userService.searchService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "consumer deleted"} );
     } else {
         res.send({ "status": false, "message": "Action failed" ,"data": empolyee});
     }
}
module.exports = { searchfn, loginUserControllerFn, getDataConntrollerfn, createUserControllerFn,updateUserController,deleteUserController };
