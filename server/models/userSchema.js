const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  username: { type: String, required: true },
  password: { type: String, required: false },
  email: { type: String, required: false }, 
  oauthProviders: [
    {

    }
  ],
});

const User = mongoose.model('User', userSchema); 

module.exports = userSchema; 
