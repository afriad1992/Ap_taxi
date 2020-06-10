const User = require('../database/models/user.model');

exports.createUser = async (user) => {
  try {
    const hashedPassword = await User.hashPassword(user.password);
    const newUser = new User({
      username: user.username,
      job: user.job,
      local: {
        email: user.email,
        password: hashedPassword
      }
    })
    return newUser.save();
  } catch(e) {
    throw e;
  }
}
exports.findUserPerEmail = async (email) => {
return User.findOne({ 'local.email': email }).exec();
}


exports.findUserPerId = (id) => {
return User.findById(id).exec();
}


