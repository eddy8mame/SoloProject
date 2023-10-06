const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Schema = mongoose.Schema; 

const SALT_WORK_FACTOR = 10; 

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: false }, 
  oauthProviders: [
    {

    }
  ],
});

userSchema.pre('save', async (next) => {
  if (this.isModified('password')) {
    this.password = await bcrypt.hashSync(this.password, SALT_WORK_FACTOR)
  }

  return next(); 
})

const User = mongoose.model('User', userSchema); 

module.exports = User; 
