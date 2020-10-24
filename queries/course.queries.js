const Course = require('../database/models/course.model');



exports.create_course = async (course) => {
  try {
    
    const newCourse = new Course({
      id_chauffeur:course.idc,
      id_passager:course.idp,
      imediate:false,
      point_de_depart: course.adresse,
      point_arrivé: course.adresse1,
      date: course.date,
      heure: course.heure

    })
    newCourse.save();
    console.log("b");
  } catch(e) {
    throw e;
  }
}
/* exports.findchauffeurPeremail = async (email) => {
return User.findOne({ 'local.email': email }).exec();
}


exports.findChauffeurPerId = (id) => {
return Chauffeur.findById(id).exec();
}
exports.listeChauffeur = () => {
  Chauffeur.find().sort('nom').exec()
         .then(chauffeur=>console.log(chauffeur))
         .catch(err=>console.log(err))}; */
