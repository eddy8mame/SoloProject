const express = require('express');
const Router = express.Router();
const userController = require('../controller/userController');

// receive user information, 
// if user is in DB login user
// if user is not in DB redirect to signup
Router
  .route('/login')
  .post((req, res) => {
    // confirm successful login, retrieve send user data
    res.status(200).send();
})


module.exports = Router; 