var serviceModel = require('./serviceModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        serviceModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (serviceDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var serviceModelData = new serviceModel();
        serviceModelData.eid = serviceDetails.eid;
        serviceModelData.sid= serviceDetails.sid;
        serviceModelData.complaintdate = serviceDetails.complaintdate;
        serviceModelData.desc = serviceDetails.desc;
        serviceModelData.resolvedate = serviceDetails.resolvedate;
        serviceModelData.status = serviceDetails.status;
        serviceModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,serviceDetails) => {
    console.log(serviceDetails);
    return new Promise(function myFn(resolve, reject) {
        serviceModel.findByIdAndUpdate(id,serviceDetails, function returnData(error, result) {
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }
        });
 
    });
 }

 module.exports.removeUserDBService = (id) => { 
    return new Promise(function myFn(resolve, reject) {
        serviceModel.findByIdAndDelete(id, function returnData(error, result) {
 
          if(error)
          {
                reject(false);
          }
          else
          {
             resolve(result);
          }          
        });
    });
 
 }
