require('./user.model');
const mongoose = require("mongoose");
const schema = mongoose.Schema;

const passagers = schema({
  id:{type:mongoose.Types.ObjectId,ref:"user"},
  username: {
    type: String,
    unique: true,
    maxlength: [15, "username trop long"],
    minlength: [1, "username trop court"],
    required: [true, "Champ requis"],
  },
  nom: {
  type: String},
  prenom: {
  type: String},
  localisation: {
  type: String},
  avatar:{type: String, default: "/images/profile.png" },
});

const passager= mongoose.model("passager", passagers);
module.exports= passager;
