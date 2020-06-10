const router=require('express').Router();
const {tchatList, tchatNew, tchatCreate, tchatDelete, tchatEdit, tchatUpdate } = require('../controllers/tchats.controller');// appel de nos methodes controllers


//pour afficher en local les tchatter
router.get('/', tchatList); 

router.get('/new', tchatNew);

router.post('/', tchatCreate);

router.get('/edit/:tchatId', tchatEdit);

router.post('/update/:tchatId', tchatUpdate);

router.delete('/:tchatId', tchatDelete);


module.exports = router;