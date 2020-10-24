const Taxi = require('../database/models/taxi.model');
const User= require('../database/models/user.model');

exports.createTaxi = async (chauffeur) => {
  try {
    // console.log(chauffeur.password);
    // console.log(chauffeur.email);
    console.log(chauffeur);
    const hashedPassword = await User.hashPassword(chauffeur.password);
    const newUser = new User({ local: {
      email: chauffeur.email,
      password: hashedPassword,
    },
    role:"chauffeur"
    })
    newUser.save();
    console.log(newUser.id+"voila l id");
    const newChauffeur = new Taxi({
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
exports.findTaxiPerEmail = async (email) => {
return Taxi.findOne({ 'local.email': email }).exec();
}


exports.findTaxiPerId = (id) => {
  console.log("aaaaaaa");
return Taxi.findById(id).exec()
.then(taxi=>console.log(taxi))
           .catch(err=>console.log(err));
}