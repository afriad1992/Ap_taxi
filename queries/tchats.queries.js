const Tchat  = require('../database/models/tchat.model');//pour poster et recup notre model schema

exports.getTchats = () => {
  return Tchat.find({}).exec(); // return la querie de controller
}

exports.createTchat = (tchat) => {// on va recupérer en parametre contenu de tchatter qu'on veux creer
  const newTchat = new Tchat(tchat);
  return newTchat.save();
}
exports.deleteTchat = (tchatId) => {
    return Tchat.findByIdAndDelete(tchatId).exec();
}
exports.getTchat = (tchatId)=>{
    return Tchat.findOne({ _id:tchatId }).exec();
}
exports.updateTchat = (tchatId, tchat) => {
    return Tchat.findByIdAndUpdate(tchatId, { $set: tchat }, { runValidators: true });
  }