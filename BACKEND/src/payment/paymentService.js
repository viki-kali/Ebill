var paymentModel = require('./paymentModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        paymentModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

module.exports.createUserDBService = (paymentDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var paymentModelData = new paymentModel();
        paymentModelData.eid = paymentDetails.eid;
        paymentModelData.rid= paymentDetails.rid;
        paymentModelData.date = paymentDetails.date;
        paymentModelData.status = paymentDetails.status;
        paymentModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,paymentDetails) => {
    console.log(paymentDetails);
    return new Promise(function myFn(resolve, reject) {
        paymentModel.findByIdAndUpdate(id,paymentDetails, function returnData(error, result) {
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
        paymentModel.findByIdAndDelete(id, function returnData(error, result) {
 
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
