const { signupP} = require('../controllers/patient.controller');
const router = require('express').Router();
const { ensureAuthenticated } = require('../config/gardes.config'); // telecharger image lorsque on est connecter
const passport = require('passport');
router.post('/signupP', signupP);
// router.get('/signupP/form', signupFormP);
/*


router.get('/signupP/form', signupFormP);
router.post('/signupP', signupP);
router.post('/update/image', ensureAuthenticated, uploadImageP);
*/
module.exports = router;


