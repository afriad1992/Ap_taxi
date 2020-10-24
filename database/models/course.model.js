require('./passager.model');
require('./taxi.model');
require('./taxi.model');
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const Course = schema({ 
  // type:mongoose.Types.ObjectId,ref:"taxi"
  // type:mongoose.Types.ObjectId,ref:"passager"
  id_chauffeur:{type:String},
  id_passager:{type:String},
  imediate: {
    type:Boolean ,
    
    
  },


  point_de_depart: {
  type: String},
  point_arrivé: {
  type: String},
  date: {
  type: String},
  heure:{type: String}
  

});

const course= mongoose.model("course", Course);
module.exports= course;
