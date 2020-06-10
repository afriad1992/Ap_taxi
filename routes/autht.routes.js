const router = require('express').Router();
const { signinFormT, signinT, signoutT } = require('../controllers/autht.controllers');

router.get('/signinT/form', signinFormT);
router.post('/signinT', signinT);
router.get('/signoutT', signoutT);

module.exports = router;