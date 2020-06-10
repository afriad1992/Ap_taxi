const mongoose = require('mongoose');
const schema = mongoose.Schema;//  definit le modele schema

const tchatSchema = schema({
  content: {
    type: String,
    maxlength: [140, 'Tweet trop long' ], 
    minlength: [1, 'Tweet trop court'],
    required: [true, 'Champ requis'] 
  },
  author: { type: schema.Types.ObjectId, ref: 'user', required: true }
});

const Tchat = mongoose.model('tchat', tchatSchema);//creation du modele tchatter

module.exports = Tchat;