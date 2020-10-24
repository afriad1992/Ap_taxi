const { create_course } = require('../queries/course.queries');
const path = require('path');

exports.CreateCoursePassager = async (req, res, next) => {
  const body = req.body;
  console.log("aaa"+body+"aaa");
  try {
    const taxi = await create_course(body);
    console.log("A");
    res.redirect('/');
  } catch(e) {
    res.render('taxis/taxi-form', { errors: [ e.message ],isAuthenticated :req.isAuthenticated(),currentTaxi:req.taxi });
  }
}
/*exports.ListeChauffeur = async (req, res, next) => {
  try {
    const listechauff = await listeChauffeur();
    res.redirect('/admin');
  } catch(e) {

  }
}*/