const passport = require('passport');

exports.signinFormT = (req, res, next) => {
  res.render('auth/autht-form', { errors: null , isAuthenticated :req.isAuthenticated(),currentTaxi:req.taxi,chauffeur:true});
}

exports.signinT = (req, res, next) => {
  passport.authenticate('taxi-local', (err, taxi, info) => {
    if (err) {
      next(err);
    } else if (!taxi) {
      res.render('auth/autht-form', { errors: [ info.message ], isAuthenticated :req.isAuthenticated(),currentTaxi:req.taxi,chauffeur:true });
    } else {
      req.login(taxi, (err) => {
        
        if (err) { next(err) } else {
          res.redirect('/tchats');
        }
      })
    }
    console.log(info);
    console.log(taxi);
    console.log(req.isAuthenticated()); 
  })(req, res, next);
}

exports.signoutT = (req, res, next) => {
  req.logoutT();
  res.redirect('/auth/signinT/form');
}