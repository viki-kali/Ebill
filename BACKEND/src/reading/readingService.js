var readingModel = require('./readingModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        readingModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (readingDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var readingModelData = new readingModel();
        readingModelData.eid = readingDetails.eid;
        readingModelData.rid = readingDetails.rid;
        readingModelData.readingdate = readingDetails.readingdate;
        readingModelData.duedate = readingDetails.duedate;
        readingModelData.units = readingDetails.units;
        readingModelData.bill = readingDetails.bill;
        readingModelData.status = readingDetails.status;
        readingModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,readingDetails) => {
    console.log(readingDetails);
    return new Promise(function myFn(resolve, reject) {
        readingModel.findByIdAndUpdate(id,readingDetails, function returnData(error, result) {
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
        readingModel.findByIdAndDelete(id, function returnData(error, result) {
 
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
