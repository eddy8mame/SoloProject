const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

Router
  .route('/login')
  .post(userController.verifyUser, (req, res) => {
    console.log('verifyUser');
    res.status(200).json('SUCCESS!');
  })

Router
  .route('/register')
  .post(userController.createUser, (req, res) => {
    console.log('createUser');
    res.status(200).json(res.locals.user);
  });


module.exports = Router; 