const {app}=require('../app');
const session =require('express-session');//middleware pour la session
const MongoStore=require('connect-mongo')(session);
const mongoose =require('mongoose');

app.use(session({
    secret:'impala',
    resave:false,  //sauvgarder la session meme y na pas d'utilisation 
    name:'le id',  
    saveUninitialized: false,
    cookie:{
        httpOnly:true,
        maxAge:100060602414 // session 14 jours// 
    },store:new MongoStore({  //pour stocker une nouvelle session//
      mongooseConnection:mongoose.connection, 
        ttl:60602414 //la durrée de vie de la session//
    })
    
}));


