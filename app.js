console.log(process.env.NODE_ENV);
const express = require('express');     //appel  express
const path = require('path');
require('./database');
const morgan = require('morgan');
const app = express();       //lance appelication avec express
     // variable envirenment 
const index = require('./routes'); // appel routes pour utiliser index , import de la route , sinon il vas chercher file par default
const errorhandler = require('errorhandler');
module.exports=app;
require('./config/session.config');
require('./config/passport.config');
//require('./configt/sessiont.configt');
//require('./configt/passportt.config');



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






