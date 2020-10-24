const { createTaxi } = require('../queries/taxis.queries');
const multer = require('multer');
const path = require('path');


const upload = multer({ storage: multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join( __dirname, '../public/images/avatars'))
  },
  filename: (req, file, cb) => {
    cb(null, `${ Date.now() }-${ file.originalname }`);
  }
}) })

exports.signupFormT = (req, res, next) => {
  res.render('taxis/taxi-form', { errors: null, isAuthenticated :req.isAuthenticated(),currentTaxi:req.taxi,chauffeur:true });
 
}

exports.signupT = async (req, res, next) => {
 
  const body = req.body;
  console.log("aaAAA");
  console.log(body);
  console.log("aaaaa");

  try {
    const taxi = await createTaxi(body);
    res.redirect('/');
  } catch(e) {
    res.render('taxis/taxi-form', { errors: [ e.message ],isAuthenticated :req.isAuthenticated(),currentTaxi:req.taxi });
  }
}

exports.uploadImageT = [ 
  upload.single('avatar'),
  async (req, res, next) => {
    try {
      const taxi = req.taxi;
      taxi.avatar = `/images/avatars/${req.file.filename}`;
      await taxi.save();
      res.redirect('/');
    } catch(e) {
      next(e);
    }
  }
]