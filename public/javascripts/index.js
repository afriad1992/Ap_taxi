


const socket = io();
// const admin = io("/admin");
// elt=document.getElementById("nomch");
 // nomch=elt.innerText || elt.textContent;
 // console.log(nomch);
 
 function ConfirmMessage(PositionP) {
  if (confirm("le patient:"+" "+PositionP.soc.nomP+" "+"\n son point de depart est : "+" "+PositionP.soc.adresse+" "+"\n son point d'arrivée est:"+" "+PositionP.soc.hopital+" "+"\n cherche un chauffeurs \n Voulez-vous accepter cette course ?")) {
      // Clic sur OK
  console.log(3);
  console.log(PositionP);
  var x = document.getElementById("nomch").getAttribute("nom"); 
  var y = document.getElementById("numT").getAttribute("numeroTaxi"); 
  var Course={a:"le chauffeur "+" "+x+" "+" ayant le numuro de taxi "+" "+y+" "+" vous attend dans deux minutes à votre adresse",
              c: PositionP.b  };
      console.log("le chauffeur confirme la course")
      socket.emit("reponsecourse",Course);
  }
  
}
 function notifyMe(a) {

  if(window.Notification && Notification.permission !== "denied") {
    Notification.requestPermission(function(status) {  // status is "granted", if accepted by user
     var vibrate=Notification.Vibrate;
     audio = new Audio('/images/course.mp4');
     audio.type = 'audio/wav';

     var n = new Notification('une nouvelle course vous est proposée', { 
        body: 'le passager :'+' ' +a+' '+' vous attend veuillez accepter la course',
        icon: '/images/Capture.PNG' ,// optional
        vibrate:[200,100,200],
        image:'/images/passagers.jpg'
        
      });
      n.onclick = function() { 
        var myWindow = window.open(theLink,"https://www.w3schools.com");
        console.log("j'ai cliqué sur la notification");
        myWindow.focus();
      };
      audio.play();
      console.log("l'audio doit etre play");

    });
  }
  // Let's check if the browser supports notifications
 /* console.log("a");
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
    console.log("b");
  }

  // Let's check whether notification permissions have already been granted
  else if (Notification.permission === "granted") {
    // If it's okay let's create a notification
    var notification = new Notification("Hi there!");
    console.log("c");
  }
  // Otherwise, we need to ask the user for permission
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      // If the user accepts, let's create a notification
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
        console.log("d");
      }
    });
    console.log("e");
  }

  // At last, if the user has denied notifications, and you 
  // want to be respectful there is no need to bother them any more.
   
*/
 }


function compareGeoChP(PositionP,PositionCh){
  var origin1 = new google.maps.LatLng(PositionCh.lat,PositionCh.lng); 
  var destinationA = PositionP.soc.adresse;
  console.log("1");
  console.log(PositionP.soc.adresse);
  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(
     {
      // origins: [origin1, origin2],
      // destinations: [destinationA, destinationB],
      origins: [origin1],
      destinations: [destinationA],
      travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC,
        avoidHighways: false,
        avoidTolls: false,
      //avoidHighways: Boolean,
     // avoidTolls: Boolean,
    }, callback);
  
  function callback(response, status) {
    if (status == 'OK') {
      if(response.rows[0].elements[0].distance.value<2000){console.log("yes");
      notifyMe(PositionP.soc.nomP);
      ConfirmMessage(PositionP)
      console.log("yes");
      console.log(response.rows[0].elements[0].distance.value);
    }
      else{console.log("no");
      console.log(response.rows[0].elements[0].distance.value);}
     
    }
  } 





    }
    function comparer(PositionP){ 
      if (navigator.geolocation) {
       
        /*  Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).
        permet de manipuler une fonction appelée automatiquement à chaque fois que la position de l'appareil change*/
          navigator.geolocation.watchPosition(function(position) {
            var PositionCh = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
              
            };
    console.log(PositionCh);        
    compareGeoChP(PositionP,PositionCh);
    console.log("1");
      
        });
      }
    }

socket.on("connect", (sock) => {
console.log("connected on /");})
  
  socket.on("nouveauCourse",(sock)=>{
  console.log(sock);
  console.log(socket.id);

  
  comparer(sock);
   
    });
   /* function success(pos) {
      var crd = pos.coords;
    
      console.log('Votre position actuelle est :');
      console.log(`Latitude : ${crd.latitude}`);
      console.log(`Longitude : ${crd.longitude}`);
      console.log(`La précision est de ${crd.accuracy} mètres.`);
    }
    function error(err) {
      console.warn(`ERREUR (${err.code}): ${err.message}`);
    }
    
    navigator.geolocation.getCurrentPosition(success, error, options);*/  


      // if ( confirm("un nouveau patient"+ soc.nomP+"ayant l adresse"+soc.adresse+"et la destination"+soc.hopitale ) ) {console.log("c est confirmé");}

    // socket.on("trajet",(soc)=>{console.log(soc);});
  /*function success(pos,sock) {
    var crd = pos.coords;
  
    console.log('Votre position actuelle est :');
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude : ${crd.longitude}`);
    console.log(`La précision est de ${crd.accuracy} mètres.`);

  }
  
  function error(err) {
    console.warn(`ERREUR (${err.code}): ${err.message}`);
  }
  
  navigator.geolocation.getCurrentPosition(success, error, options); */
  /*function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.watchPosition(showPosition);
    } else { 
      x.innerHTML = "Geolocation is not supported by this browser.";
    }
  }
      
  function showPosition(position) {
      x.innerHTML="Latitude: " + position.coords.latitude + 
      "<br>Longitude: " + position.coords.longitude;
  }
  </script>*/
  
  /*
if (navigator.geolocation) {
  var x = document.getElementById("nomch").getAttribute("nom"); 
  var y = document.getElementById("numT").getAttribute("numeroTaxi"); 
  console.log(x);
    Returns the current position of the user and continues to return updated position as the user moves (like the GPS in a car).
  permet de manipuler une fonction appelée automatiquement à chaque fois que la position de l'appareil change


    navigator.geolocation.watchPosition(function(position) {
      var geolocation = {
     
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        nom:x,
        numeroT:y
      };
    socket.emit("position",geolocation);
console.log(geolocation);
  }); 
}*/

