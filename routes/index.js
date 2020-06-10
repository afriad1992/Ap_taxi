const Passager = require('../database/models/passager.model');
const Taxi = require('../database/models/taxi.model');
const Patient = require('../database/models/patient.model');
//const Chauffeur = require('../database/models/chauffeur.model');
const router = require("express").Router();
const { ensureAuthenticated } = require("../config/gardes.config");
const { findPatientPerId } = require('../queries/patient.queries');
const { findTaxiPerId } = require('../queries/taxis.queries');
const { findPassagerPerId } = require('../queries/passagers.queries');
//const {ensureAuthenticatedT} =require('../configt/gardest.config')
const tchats = require("./tchats");
const users = require("./users.routes");
const taxis = require("./taxis.routes");
const auth = require("./auth.routes");
const autht = require("./autht.routes");
const patients = require("./patient.routes");
const Tchat = require("../database/models/tchat.model"); // appel fichier schema de model mongoose

router.use("/tchats", ensureAuthenticated, tchats);
router.use("/users", users);
router.use("/auth", auth);
router.use("/taxis", taxis);
router.use("/auth", autht);
router.use("/patient", patients);
router.get("/", (req, res) => {
  res.render("accueil");
  //  res.redirect('tchats');
});
router.get("/choix", (req, res) => {
  res.render("passagers/choix");
});

  router.get("/login", (req, res) => {
    if(req.user.role=="chauffeur")
     {const id=req.user._id;
      console.log(id);
      Taxi.findById(id).exec()
      .then( docs=>res.render("course/course-formCH",{users:docs.nom})
       // res.render("course/course-formM")
        )
      .catch(err=>console.log(err));
      //res.render("course/course-formM")
      
}
       //const Chauffeur =  findTaxiPerId(id);
      // console.log(chauffeur);
    
    
     else if(req.user.role=="patient")
     {const id=req.user._id;
      console.log(id);
      Patient.findById(id).exec()
      .then( docs=>res.render("course/course-formM",{users:docs.nom})
       // res.render("course/course-formM")
        )
      .catch(err=>console.log(err));}
     else if(req.user.role=="admin")
     {res.render("admin/admin");}
     else if(req.user.role=="passager")
     {const id=req.user._id;
      console.log(id);
      Passager.findById(id).exec()
      .then( docs=>res.render("course/course-formP",{users:docs.nom})
       // res.render("course/course-formM")
        )
      .catch(err=>console.log(err));}
 
});
router.get("/tchat/new", (req, res) => {
  res.render("tchats/tchat-form",{chauffeur:true});
});
router.get("/passagers", (req, res) => {
  res.render("users/user-form",{chauffeur:false});
});
router.get("/chauffeurs", (req, res) => {
  res.render("taxis/taxi-form",{chauffeur:true});
});
router.get("/patient", (req, res) => {
  res.render("patient/patient-form",{chauffeur:true});
});

/*router.get('/complements',(req,res)=>{
    res.render('taxis/complements');
});*/
router.get("/tchat", (req, res) => {
  res.redirect("tchats/tchat");
});

module.exports = router;
