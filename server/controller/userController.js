const User = require('../models/userSchema');
const bcrypt = require('bcrypt');

// create informative error
const createErr = (errInfo) => {
  const { method, status, err, message } = errInfo;
  return { 
    log: `Error occurred in userController.${method}`,
    message: { error: message || `Error occurred in userController.${method}. ERROR: Check server logs for more details.` },
    status: status
  };
};

const userController = {}; 

// create new user in db
userController.createUser = async (req, res, next) => {
  try {
    console.log(`createUser`);
    const {email:username, password} = req.body
    
    user = await User.create({ username: username, password: password });

    // if no user, log message in server, pass error message to frontend
    if (!user) {
      return next(createErr({
        method: `createUser`,
        message: `Failed to create user.`
      }))
    }

    res.locals.user = user;
    next();

  } catch (err) {
    // trigger gloal error handler 
    // mongoose errors have name,
    next(createErr({
      method: `createUser`,
      message: err.name
    }));

  }
};

// check if passed in username and password match existing username and password in DB 
// if no match, redirect to signup
userController.verifyUser = async (req, res, next) => {
  try {
    console.log(`verifyUser`);
    const { username, password } = req.body;

    user = await User.findOne({ username: username, password: password });
    // if no user, log message in server, pass error message to frontend
    if (!user) {
      return next(createErr({
        method: `verifyUser`,
        status: 400,
        message: `Cannot verify user.`
      }))
    }; 

    const valid = await bcrypt.compare(password, user.password); 
    // if password is incorrect, pass error message to frontend notifying user 
    if (!valid) {
      return next({
        method: `verifyUser`, 
        status: 400, 
        message: `Incorrect Password`,
      })
    }

    // if yes user, add to response locals object
    res.locals.user = user; 
    // invoke next
    return next();
    
  } catch (err) {
    // trigger global error handler
    return next(createErr({
      method: `verifyUser`,
      message: err.message,
    }));

  }


};

module.exports = userController; 