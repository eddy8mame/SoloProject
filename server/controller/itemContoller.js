const { readFileSync } = require('fs');
const Item = require('../models/itemSchema');
const fs = require('fs')

const itemController = {};

itemController.getAllItems = (req, res, next) => {
  console.log('getAllItems');
  const items = JSON.parse(fs.readFileSync('/Users/edvinmorlu/Codesmith/SoloProject/server/utils/data.json'));
  res.locals.items = items; 
  next(); 
}

itemController.addItem = (req, res, next) => {

}; 

itemController.deleteItem = (req, res, next) => {

}; 

itemController.updateItem = (req, res, next) => {
  
};

module.exports = itemController; 