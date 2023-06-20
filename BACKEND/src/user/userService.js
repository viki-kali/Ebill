var userModel = require('./userModel');

module.exports.loginuserDBService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      userModel.findOne({ eid: userDetails.eid},function getresult(errorvalue, result)
      {
         if(errorvalue)
         {
            reject({status: false, msg: "Invaild Data"});
         }
         else
         {
            if(result !=undefined &&  result !=null)
            {
               if(userDetails.eid ==result.eid && userDetails.password == result.password)
               {
                  resolve({status: true,msg: "Validated Successfully"});
               }
               else
               {
                  reject({status: false,msg: "Validation failed"});
               }
            }
            else
            {
               reject({status: false,msg: "Action failed."});
            }
         }
      });

   });
}

module.exports.getDataFromDBService = () => {

    return new Promise(function checkURL(resolve, reject) {
 
        userModel.find({}, function returnData(error, result) {
 
            if (error) {
                reject(false);
            } else {
         
                resolve(result);
            }
        });
 
    });
 
 }

 module.exports.createUserDBService = (userDetails) => {


    return new Promise(function myFn(resolve, reject) {
 
        var userModelData = new userModel();
        userModelData.eid = userDetails.eid;
        userModelData.password = userDetails.password;
        userModelData.name = userDetails.name;
        userModelData.address = userDetails.address;
        userModelData.phone = userDetails.phone;
        userModelData.save(function resultHandle(error, result) {
 
            if (error) {
                reject(false);
            } else {
                resolve(true);
            }
        });
 
    });
 
 }


 module.exports.updateUserDBService = (id,userDetails) => {     
    console.log(userDetails);
    return new Promise(function myFn(resolve, reject) {
        userModel.findByIdAndUpdate(id,userDetails, function returnData(error, result) {
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
        userModel.findByIdAndDelete(id, function returnData(error, result) {
 
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

module.exports.searchService = (userDetails)=>
{
   return new Promise(function myFn(resolve, reject)
   {
      userModel.findById({ eid: userDetails.eid},function returnData(errorvalue, result)
      {

         if(errorvalue)
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


