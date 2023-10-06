const express = require('express'); 
const Router = express.Router();
const itemController = require('../controller/itemContoller')

Router
  .route('/')
  .get(itemController.getAllItems, (req, res) => {
    res.status(200).send(res.locals.items);
  });

Router
  .route('/:id')
  .post((req, res) => {

  });

Router
  .route('/:id')
  .patch((req, res) => {

  });

Router
  .route('/:id')
  .delete((req, res) => {
  
  });




  module.exports = Router; 