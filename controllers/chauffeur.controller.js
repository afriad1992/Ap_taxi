const { create_chauffeur,listeChauffeur } = require('../queries/chauffeur.queries');
const path = require('path');

exports.signupT = async (req, res, next) => {
  const body = req.body;
  try {
    const taxi = await create_chauffeur(body);
    res.redirect('/');
  } catch(e) {
    res.render('taxis/taxi-form', { errors: [ e.message ],isAuthenticated :req.isAuthenticated(),currentTaxi:req.taxi });
  }
}
exports.ListeChauffeur = async (req, res, next) => {
  try {
    const listechauff = await listeChauffeur();
    res.redirect('/admin');
  } catch(e) {

  }
}