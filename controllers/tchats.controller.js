// execution des methodes reliees aux routes

const {getTchats, createTchat, deleteTchat, editTchat, updateTchat ,getTchat }=require('../queries/tchats.queries');

exports.tchatList = async(req, res, next) => {
   try {
        const tchats=await getTchats();
        res.render('tchats/tchat', { tchats, isAuthenticated :req.isAuthenticated(),currentUser:req.user,chauffeur:true})// requete afficher liste de tchate
    }catch(e){
        next(e);
    }


}
exports.tchatNew = (req, res, next) => {
    res.render('tchats/tchat-form',{ tchat: {}, isAuthenticated :req.isAuthenticated(),currentUser:req.user,chauffeur:true });
}


exports.tchatCreate = async(req, res, next) => {

    try{
    const body = req.body;

     await createTchat({...body, author: req.user._id }); 
     res.redirect('/tchats')
    }catch(e)  {
    const errors = Object.keys(e.errors).map(key => e.errors[key].message);
            res.status(400).render('tchats/tchat-form', { errors , isAuthenticated :req.isAuthenticated(),currentUser:req.user,chauffeur:true});



    }
}

exports.tchatDelete = async (req, res, next) => {
    try {
      const tchatId = req.params.tchatId;
      await deleteTchat(tchatId);
      const tchats = await getTchats();
      res.render('tchats/tchat-list', { tchats });
    } catch(e) {
      next(e);
    }
    }

exports.tchatEdit = async(req,res,next)=>{
    try{
        const tchatId = req.params.tchatId;
        const tchat = await getTchat(tchatId);
        res.render('tchats/tchat-form', {tchat,isAuthenticated :req.isAuthenticated(),currentUser:req.user,chauffeur:true});
    }catch(e){
        next(e);
    }
}
exports.tchatUpdate = async (req, res, next) => {
  const tchatId = req.params.tchatId;
  try {
    const body = req.body;
    await updateTchat(tchatId, body);
    res.redirect('/tchats');
  } catch(e) {
    const errors = Object.keys(e.errors).map( key => e.errors[key].message );
    const tchat = await getTchat(tchatId);
    res.status(400).render('tchats/tchat-form', { errors, tchat ,isAuthenticated :req.isAuthenticated(),currentUser:req.user,chauffeur:true});
  }
}
