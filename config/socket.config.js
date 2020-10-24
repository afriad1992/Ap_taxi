
const socketio = require("socket.io");



const initSocketServer = (server) => {
const ios = socketio(server);

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
 */
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
  
}
module.exports = { initSocketServer };