
const express = require('express');     //appel  express
const path = require('path');
require('./database');

const morgan = require('morgan');
const app = express(); 
          //lance appelication avec express
     // variable envirenment 
const index = require('./routes'); // appel routes pour utiliser index , import de la route , sinon il vas chercher file par default
const errorhandler = require('errorhandler');

require('./config/session.config');
require('./config/passport.config');
//midellwere general
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');     // pour eviter d'ecrire ext pug ( pour définir l'exenssion) , utilisation de pug comme tamplate engine
app.use(morgan('short'));
app.use(express.static(path.join(__dirname, 'public')));     // pour recuperer c quil ya dans folder public
//il permet de parser le body
app.use(express.json());        // recup data en json
app.use(express.urlencoded({ extended: true }));         //recup data en autre format
app.use(index);
if (process.env.NODE_ENV === 'development') {
    app.use(errorHandler());//methode qui return le midllewere
} else {
    app.use((err, req, res, next) => {
        const code = err.code || 500;
        res.status(code).json({
            code: code,
            message: code === 500 ? null : err.message
            
        });
    })
}

module.exports = {
   
    app,
  };

/*const ios = socketio(server);

ios.on('connection', (socket) => {
    
    /* socket.on("position",(soc)=>{console.log(soc);
    localisation=soc;
    console.log(localisation);

    });
    console.log(localisation+"gfhn");
    socket.emit("geolocation",localisation);  
    console.log("abcabc");
    socket.emit('news', { hello: 'world' });
    socket.on('my other event',(data) => {
    console.log(data);
    });
    var m;
    socket.on("trajet",(soc)=>{socket.emit('trajet', soc);});
 
    socket.on("demandeCourse",(soc)=>{
        b=socket.id;
        ios.emit('nouveauCourse', {soc,b});
    console.log(socket.id);
//  m=soc;
});
socket.on("reponsecourse",(soc)=>{ios.to(soc.c).emit('RCourse', soc.a);
console.log(soc.id);});
    

// socket.emit('nouveauCourse', m);  
  });
  */
  
