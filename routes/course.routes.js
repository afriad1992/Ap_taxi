const { CreateCoursePassager} = require('../controllers/course.controller');
const router = require('express').Router();




router.post('/',CreateCoursePassager);

/*router.post('/signupP', signupP);
router.post('/update/image', ensureAuthenticated, uploadImageP);
*/
module.exports = router;


