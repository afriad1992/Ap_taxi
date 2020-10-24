const { createPatient } = require('../queries/patient.queries');
const path = require('path');

exports.signupP = async (req, res, next) => {
  const body = req.body;
  console.log("aaa");
  console.log(body.nom);
  console.log("bbb");
 
  try {
    console.log("ddddddd");
    const Malade = await createPatient(body);
    console.log("aaabbb");
    res.redirect('/');
  } catch(e) {
    res.render('Patient/patient-form', { errors: [ e.message ],isAuthenticated :req.isAuthenticated(),currentTaxi:req.taxi });
  }
}
exports.signupFormPatient = (req, res, next) => {
  res.render("patient/Patient-form", {
    errors: null,
    isAuthenticated: req.isAuthenticated(),
    currentUser: req.user,
    chauffeur:false
  });
};