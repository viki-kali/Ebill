var feedModel = require('./feedModel');

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        feedModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (feedDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var feedModelData = new feedModel();
        feedModelData.eid = feedDetails.eid;
        feedModelData.friendly= feedDetails.friendly;
        feedModelData.design = feedDetails.design;
        feedModelData.desc = feedDetails.desc;
        feedModelData.rating = feedDetails.rating;
        feedModelData.desc = feedDetails.desc;
        feedModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,feedDetails) => {
    console.log(feedDetails);
    return new Promise(function myFn(resolve, reject) {
        feedModel.findByIdAndUpdate(id,feedDetails, function returnData(error, result) {
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
        feedModel.findByIdAndDelete(id, function returnData(error, result) {
 
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
