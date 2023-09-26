const User = require('../models/userSchema');

const userController = {}; 

// create new user in db
userController.createUser = async (req, res, next) => {
  try {
    const { username, password } = req.body; 
    
    user = await User.create({ username: username, password: password });


    

  } catch (err) {
    next(err);

  }
}

// check if passed in username and password match existing username and password in DB 
// if no match, redirect to signup
userController.verifyUser = async (req, res, next) => {
  try {
    
    const { username, password } = req.body; 

    user = await User.findOne({ username: username, password: password });

    // if no user, redirect to signup
    // to redirect to signup send message to frontend
    if (!user) {
      return res.status().send()
    }

    // if yes user, invoke next middleware
    return next();
    
  } catch (err) {
    return next(err); 

  }


}

module.exports = userController; 