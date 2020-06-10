const { signupT, signupFormT, uploadImageT} = require('../controllers/taxis.controller');
const router = require('express').Router();
const { ensureAuthenticated } = require('../config/gardes.config'); // telecharger image lorsque on est connecter
const passport = require('passport');



router.get('/signupT/form', signupFormT);
router.post('/signupT', signupT);
router.post('/update/image', ensureAuthenticated, uploadImageT);

module.exports = router;



