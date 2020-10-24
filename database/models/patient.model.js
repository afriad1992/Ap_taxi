const mongoose = require("mongoose");
const schema = mongoose.Schema;
//type:mongoose.Types.ObjectId,ref:"taxi"
const patient = schema({
  id_chauffeur:{type:String},
  
  nom : {
    type: String 
  },
  prenom : {
    type: String 
  },
  adresse: {
    type: String  
  },
  telephone: {
    type: Number },
  hopital: {
    type: String 
  },
  email: {
    type: String
  },
  date: {
    type: String },
 numeroSecurite :{type: Number},

 heure: {
  type: String },
  imediate: {
    type: Boolean },
  
});

const Patient = mongoose.model("patient",patient);
module.exports = Patient;
