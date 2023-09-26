const express = require('express'); 
const Router = express.Router();
const itemController = require('../controller/itemContoller')

Router
  .route('/')
  .get(itemController.getAllItems, (req, res) => {
    res.status(200).send(res.locals.items);
  });

  module.exports = Router; 