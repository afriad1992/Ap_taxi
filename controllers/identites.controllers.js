exports.uploadImage = [ 
    upload.single('identite'),
    async (req, res, next) => {
      try {
        const identite = req.user;
        identite.carteI = `/images/identites/${req.file.filename}`;
        await user.save();
        res.redirect('/');
      } catch(e) {
        next(e);
      }
    }
  ]
  exports.uploadImage = [ 
    upload.single('identite'),
    async (req, res, next) => {
      try {
        const identite = req.user;
        identite.licence = `/images/identites/${req.file.filename}`;
        await user.save();
        res.redirect('/');
      } catch(e) {
        next(e);
      }
    }
  ]