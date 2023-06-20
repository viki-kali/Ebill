var express = require('express');

const router = express.Router();

var userController = require('../src/user/userController');
router.route('/user/login').post(userController.loginUserControllerFn);
router.route('/user/getAll').get(userController.getDataConntrollerfn);
router.route('/user/search/:id').get(userController.searchfn);
router.route('/user/create').post(userController.createUserControllerFn);
router.route('/user/update/:id').patch(userController.updateUserController);
router.route('/user/delete/:id').delete(userController.deleteUserController);

var breakController = require('../src/break/breakController');
router.route('/break/getAll').get(breakController.getDataConntrollerfn);
router.route('/break/create').post(breakController.createUserControllerFn);
router.route('/break/update/:id').patch(breakController.updateUserController);
router.route('/break/delete/:id').delete(breakController.deleteUserController);

var readingController = require('../src/reading/readingController');
router.route('/reading/getAll').get(readingController.getDataConntrollerfn);
router.route('/reading/create').post(readingController.createUserControllerFn);
router.route('/reading/update/:id').patch(readingController.updateUserController);
router.route('/reading/delete/:id').delete(readingController.deleteUserController);

var serviceController = require('../src/service/serviceController');
router.route('/service/getAll').get(serviceController.getDataConntrollerfn);
router.route('/service/create').post(serviceController.createUserControllerFn);
router.route('/service/update/:id').patch(serviceController.updateUserController);
router.route('/service/delete/:id').delete(serviceController.deleteUserController);

var feedController = require('../src/feed/feedController');
router.route('/feed/getAll').get(feedController.getDataConntrollerfn);
router.route('/feed/create').post(feedController.createUserControllerFn);
router.route('/feed/update/:id').patch(feedController.updateUserController);
router.route('/feed/delete/:id').delete(feedController.deleteUserController);

var paymentController = require('../src/payment/paymentController');
router.route('/payment/getAll').get(paymentController.getDataConntrollerfn);
router.route('/payment/create').post(paymentController.createUserControllerFn);
router.route('/payment/update/:id').patch(paymentController.updateUserController);
router.route('/payment/delete/:id').delete(paymentController.deleteUserController);


module.exports = router;
