const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const item = new Schema({

}); 

const itemSchema = new Schema({
  uID: { type: Schema.Types.ObjectId, ref: 'user', required: true },
  items: [item], 
})

const User = mongoose.model('item', itemSchema); 
module.exports = User; 