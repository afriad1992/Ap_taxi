const Patient = require('../database/models/patient.model');
const User = require('../database/models/user.model');


exports.createPatient = async (patient) => {
  try {
    const hashedPassword = await User.hashPassword(patient.password);
    const newUser = new User({ local: {
      email: patient.email,
      password: hashedPassword
    },
    role:"patient"
    })
    newUser.save();
    const newPatient = new Patient({
      _id:newUser._id,
      username: patient.username,
      nom: patient.nom,
      prenom: patient.prénom,
      num_secu: patient.num_secu,
      adresse: patient.adresse,
      localisation:"indefined",
      
    })
    newPatient.save();
  } catch(e) {
    throw e;
  }
}
exports.findchauffeurPeremail = async (email) => {
return User.findOne({ 'local.email': email }).exec();
}


exports.findPatientPerId = (id) => {
return Patient.findById(id).exec();
}