const Passager = require('../database/models/passager.model');
const User = require('../database/models/user.model');


exports.createPassager = async (passager) => {
  try {
    const hashedPassword = await User.hashPassword(passager.password);
    const newUser = new User({ local: {
      email: passager.email,
      password: hashedPassword
    },
    role:"passager"
    })
    newUser.save();
    const newPassager = new Passager({
      _id:newUser._id,
      username: passager.username,
      nom: passager.nom,
      prenom: passager.prénom,
      localisation:"indefined",
      
    })
    newPassager.save();
    console.log(newPassager._id);
  } catch(e) {
    throw e;
  }
}
exports.findPassagerPerId = (id) => {
  return Passager.findById(id).exec();
  }