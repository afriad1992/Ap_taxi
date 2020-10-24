const Patient = require('../database/models/patient.model');
const User = require('../database/models/user.model');


exports.createPatient = async (patient) => {
  try {
    /*const hashedPassword = await User.hashPassword(patient.password);
    const newUser = new User({ local: {
      email: patient.email,
      password: hashedPassword
    },
    role:"patient"
    })
       newUser.save();*/
    const newPatient = new Patient({
      // _id:newUser._id,
      
      nom: patient.nom,
      prenom: patient.prénom,
      numeroSecurite: patient.numero_secu,
      email: patient.email,
      telephone:patient.num_tele,
      adresse: patient.adresse,
      hopital:patient.adresse1,
      date:patient.date,
      heure:patient.heure,
      imediate:false

      
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