var breakModel = require('./breakModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        breakModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (breakDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var breakModelData = new breakModel();
        breakModelData.eid = breakDetails.eid;
        breakModelData.did = breakDetails.did;
        breakModelData.date = breakDetails.date;
        breakModelData.time = breakDetails.time;
        breakModelData.reason = breakDetails.reason;
        breakModelData.penalityamt = breakDetails.penalityamt;
        breakModelData.status = breakDetails.status;
        breakModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,breakDetails) => {
    console.log(breakDetails);
    return new Promise(function myFn(resolve, reject) {
        breakModel.findByIdAndUpdate(id,breakDetails, function returnData(error, result) {
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
        breakModel.findByIdAndDelete(id, function returnData(error, result) {
 
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

