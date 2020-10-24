const passport = require('passport');
const { createUser } = require('../queries/users.queries');



exports.signinForm = (req, res, next) => {
  res.render('auth/auth-form', { errors: null , isAuthenticated :req.isAuthenticated(), currentUser:req.user,chauffeur:false});
  console.log(req.isAuthenticated +" "+'auth')
  console.log(req.user +" "+'auth')
  next
}

exports.signin = (req, res, next) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      next(err);
    } else if (!user) {
      res.render('auth/auth-form', { errors: [ info.message ],isAuthenticated :req.isAuthenticated(), currentUser:req.user,chauffeur:false });
    } else {
      req.login(user, (err) => {
        if (err) { next(err) } 
        else {
          res.redirect('/login');
        }
      });
    }console.log("info"+info+" "+'auth');
    console.log("info"+" "+req.authInfo+" "+'auth');
    console.log(req.isAuthenticated()); 

  })(req, res, next);
}

exports.signout = (req, res, next) => {
  req.logout();
  res.redirect('/auth/signin/form');
}