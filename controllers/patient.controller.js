const { createPatient } = require('../queries/patient.queries');
const path = require('path');

exports.signupP = async (req, res, next) => {
  const body = req.body;
 console.log("ccccccccccc");
  try {
    console.log("ddddddd");
    const Malade = await createPatient(body);
    res.redirect('/');
  } catch(e) {
    res.render('Patient/patient-form', { errors: [ e.message ],isAuthenticated :req.isAuthenticated(),currentTaxi:req.taxi });
  }
}