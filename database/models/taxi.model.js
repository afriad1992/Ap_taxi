const mongoose = require('mongoose');
const schema = mongoose.Schema;
require('./user.model');
const taxiSchema = schema({
  _id:{type:mongoose.Types.ObjectId,ref:"user"},
  username: {type:String, 
              unique: true, 
              maxlength: [15, 'username trop long' ], 
              minlength: [1, 'username trop court']
              // required: [true, 'Champ requis']
            },
  nom: {type:String  
 // required: [true, 'Champ requis']//
},
  prenom:{type:String 
//  required: [true, 'Champ requis']
},  
localisation:{type:String, },         
num_taxi :{ type: String
  //  required: [true, 'Champ requis']
},
licence:{ type: String },
avatar: { type: String, default: '/images/profile.png' },
carteI: { type: String, default: '/images/profile.png'}
});

const Taxi = mongoose.model('taxi', taxiSchema);

module.exports= Taxi;

