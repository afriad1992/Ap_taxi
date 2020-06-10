const mongoose = require("mongoose");
const schema = mongoose.Schema;

const patient = schema({
  
  
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
  rendez_vous: {
    type: String },
 numeroSecurite :{type: Number}  ,

  
  
});

const Patient = mongoose.model("patient",patient);
module.exports = Patient;
