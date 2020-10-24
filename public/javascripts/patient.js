
const socket = io();
socket.on("connect", (sock) => {
console.log(socket.id);
console.log("connected on /");});
function alertPassager(sock) {
  alert(sock);
}
function notify(a) {

  if(window.Notification && Notification.permission !== "denied") {
    Notification.requestPermission(function(status) {  // status is "granted", if accepted by user
     var vibrate=Notification.Vibrate;
     audio = new Audio('/images/course.mp4');
     audio.type = 'audio/wav';

     var n = new Notification('reponse de votre course reservé', { 
        body: a,
        icon: '/images/Capture.PNG' ,// optional
        vibrate:[200,100,200],
        image:'/images/taxii.jpg'
        
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
}



 function demande_chauf(){
  //const socket = io();
  
 var  a=document.getElementById("last_name").value;
 var  b=document.getElementById("location").value;
 var  c=document.getElementById("location-2").value;
 
  var demandeCourse={adresse:b,
  hopital:c,
nomP:a,

} 
console.log(demandeCourse);
socket.emit("demandeCourse",demandeCourse);
  }
 
 socket.on("RCourse", (sock) => {console.log(sock);
console.log(socket.id);
notify(sock);
 alertPassager(sock);
 


}
); 


function planifier(){
    $("#depart").html(" <i class='material-icons prefix' style='font-size:2.5rem!important;'> place </i><div class='row'></div><div class='row'></div><input placeholder='point de depart' id='location' type='text' class='validate marge' name='adresse' v-model='nom' v-on:blur='verifnom()'id='adresse'><label  class='marge'> point de depart </label> "
    );
    $("#arrivee").html("  <i class='material-icons prefix' style='font-size:2.5rem!important;'> place </i><div class='row'></div><div class='row'></div><input placeholder='point d'arrivée' id='location-2' type='text' class='validate marge' name='adresse1' v-model='nom' v-on:blur='verifnom()'><label ' class='marge'> point d'arrivée </label> "
    );
    $("#date").html( "<div class='input-field col s6'> <i class='material-icons prefix'> date_range </i><input placeholder='Placeholder' id='adresse' type='date'  min='2020-05-01' max='2022-12-31' class='validate' name='date' v-model='nom' v-on:blur='verifnom()' ) </div> "
    );  
    $("#heure").html("<div class='input-field col s6'><i class='material-icons prefix'> access_time </i> <input placeholder='heure' id='heure' type='time'  min='2020-05-01' max='2022-12-31' class='validate' name='heure' v-model='nom' v-on:blur='verifnom()'></div> "   
      );
      $("#button").html("<input type='submit' value='Valider ma demande de réservation'  class='btn btn-large col s5 offset-s4 ml-auto d-block'>");  
    document.getElementById("depart").style.display = "block";
    document.getElementById("arrivee").style.display = "block";
    document.getElementById("arrivee").style.display = "block";
    document.getElementById("heure").style.display = "block";
    document.getElementById("button").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("testt").style.display = "none";
    var options = {
   
      componentRestrictions: {country: 'fr'}
    }
    var option = {
     types:['geocode'],
      componentRestrictions: {country: 'fr'}
    }
    
    var input1 = document.getElementById("location");
    var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
    
    var input2 = document.getElementById("location-2");
    var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
    



}
function immediate(){
    $("#depart").html(" <i class='material-icons prefix' style='font-size:2.5rem!important;'> place </i><div class='row'></div><div class='row'></div><input placeholder='point de depart' id='location' type='text' class='validate marge' name='adresse' v-model='nom' v-on:blur='verifnom()'id='adresse'><label  class='marge'> point de depart </label> "
    );
    $("#arrivee").html("  <i class='material-icons prefix' style='font-size:2.5rem!important;'> place </i><div class='row'></div><div class='row'></div><input placeholder='point d'arrivée' id='location-2' type='text' class='validate marge' name='adresse1' v-model='nom' v-on:blur='verifnom()'><label ' class='marge'> point d'arrivée </label> "
    );
    
      $("#button").html("<input  value='choisir mon chauffeur' onclick='demande_chauf();' class='btn btn-large col s5 offset-s4 ml-auto d-block' ;>");  
    document.getElementById("depart").style.display = "block";
    document.getElementById("arrivee").style.display = "block";
    document.getElementById("arrivee").style.display = "block";
    document.getElementById("heure").style.display = "block";
    document.getElementById("button").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("testt").style.display = "none";

    var options = {
   
      componentRestrictions: {country: 'fr'}
    }
    var option = {
     types:['geocode'],
      componentRestrictions: {country: 'fr'}
    }
    
    
    var input1 = document.getElementById("location");
    var autocomplete1 = new google.maps.places.Autocomplete(input1, options);
    
    var input2 = document.getElementById("location-2");
    var autocomplete2 = new google.maps.places.Autocomplete(input2, options);
}
socket.on("connect", (sock) => {});


function demande_geolocal_chauf() {
  const socket = io();
  document.getElementById("button").style.display = "none";
  
  
  console.log("ou est la geolocation");
  socket.on("connect", (sock) => {
      
      socket.on("geolocation",(soc)=>{console.log(soc);
        if(soc==null){console.log("aucun chauffeur n'est disponible");
        $("#clarifier").html("<p class='col s10 offset-s1' style='font-size:2.5rem; border:solid 2px; border-color:orange;'>aucun chauffeur n'est disponible pour le moment; on va traiter votre demande ;veuillez patientez SVP; un taxi sera à votre disposition en quelque minute; </p> ");
        document.getElementById("clarifier").style.display = "block";}
        
        else{
          console.log(soc);
var myLatLng = { lat: 49.9, lng:  2.3 };
var mapOptions = {
  center: myLatLng,
  zoom: 5,
  mapTypeId: google.maps.MapTypeId.ROADMAP
};
const contentString =
    '<div id="content">' +
    '<div id="siteNotice">' +
    "</div>" +
    '<div id="bodyContent">' +
    "<h6><b>"+soc.nom+"</b>, est un chauffeur conventionné </br> <b>notation:1111111111</b> ,  </br><b>numero de taxi :"+soc.numeroT+"</b>" +
     
    +"</h6>"+
    '<button class="btn  col s12  ml-auto d-block" type="button" onclick="demande_chauf()" >Réservez </button>'+
    "</div>" +
    "</div>" +
    "</div>";

  const infowindow = new google.maps.InfoWindow({
    content: contentString,
    maxWidth: 400,
    maxHeight: 400
  });
var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);
       const  marker = new google.maps.Marker({
              position:{lat:soc.lat, lng: soc.lng},
              title:"aaaa",
              map:map
          });
         // marker.setMap(map);
          marker.addListener("click", () => {
            infowindow.open(map, marker);
          });
          console.log("aaaaaa");}
          console.log("je suis connecté en tant que passager");
          // marker.setMap(map);
          $("#submit").html("<input type='submit' value='Valider ma demande de réservation'  class='btn btn-large col s5 offset-s4 ml-auto d-block'>"); }); 
      
         
          
      });
      
      //socket.emit("localisation","demande de localisation");
      
  //  })
  
  }

  

  