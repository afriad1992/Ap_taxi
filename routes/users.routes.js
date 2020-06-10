const { signup, signupForm, uploadImage} = require('../controllers/users.controller');
const router = require('express').Router();
const { ensureAuthenticated } = require('../config/gardes.config'); // telecharger image lorsque on est connecter
const passport = require('passport');


router.get('/signup/form', signupForm);
router.post('/signup' , signup);
router.post('/update/image', ensureAuthenticated, uploadImage);

module.exports = router;



