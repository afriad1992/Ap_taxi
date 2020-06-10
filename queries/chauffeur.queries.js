const Chauffeur = require('../database/models/chauffeur.model');
const User = require('../database/models/user.model');


exports.create_chauffeur = async (chauffeur) => {
  try {
    const hashedPassword = await User.hashPassword(chauffeur.password);
    const newUser = new User({ local: {
      email: chauffeur.email,
      password: hashedPassword,
    },
    rôle:"chauffeur"
    })
    newUser.save();
    console.log(newUser.id+"voila l id");
    const newChauffeur = new Chauffeur({
      _id:newUser._id,
      username: chauffeur.username,
      nom: chauffeur.nom,
      prenom: chauffeur.prénom, 
      localisation:"indefined",
      num_taxi: chauffeur.num_taxi,
      licence: "yfh",
      carteI: "fgffg",

    })
    newChauffeur.save();
  } catch(e) {
    throw e;
  }
}
exports.findchauffeurPeremail = async (email) => {
return User.findOne({ 'local.email': email }).exec();
}


exports.findChauffeurPerId = (id) => {
return Chauffeur.findById(id).exec();
}
exports.listeChauffeur = () => {
  Chauffeur.find().sort('nom').exec()
         .then(chauffeur=>console.log(chauffeur))
         .catch(err=>console.log(err))};
