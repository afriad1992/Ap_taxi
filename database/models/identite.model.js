const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const schema = mongoose.Schema;

const identiteSchema = schema({
 
  carteI: { type: String },
  licence: { type: String }
});


const Taxi = mongoose.model('taxi', taxiSchema);

module.exports= Taxi;
