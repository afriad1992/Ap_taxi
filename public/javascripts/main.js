var myLatLng = { lat: 49.9, lng:  2.3 };
var mapOptions = {
    center: myLatLng,
    zoom: 13,
    mapTypeId: google.maps.MapTypeId.ROADMAP
};

// Hide result box
document.getElementById("output").style.display = "none";

// Create/Init map
var map = new google.maps.Map(document.getElementById('google-map'), mapOptions);

// Create a DirectionsService object to use the route method and get a result for our request
var directionsService = new google.maps.DirectionsService();

// Create a DirectionsRenderer object which we will use to display the route
var directionsDisplay = new google.maps.DirectionsRenderer();

// Bind the DirectionsRenderer to the map


// Define calcRoute function
function calcRoute() {
    //create request
    var request = {
        origin: document.getElementById("location").value,
        destination: document.getElementById("location-2").value,
        travelMode: google.maps.TravelMode.DRIVING,
        unitSystem: google.maps.UnitSystem.METRIC
    }

    // Routing
    directionsService.route(request, function (result, status) {
        if (status == google.maps.DirectionsStatus.OK) {

            //Get distance and time            
            var today = new Date();
/*var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();*/

var options = { weekday: 'long' }
day=today.toLocaleDateString('en-US', options);
hour=today.getHours();
console.log(hour); 
console.log(day);
console.log(typeof result.routes[0].legs[0].distance.text);

var prix=0; 
if(day=="Sunday"||day=="Saturday"|| hour>=19 || hour<=7){prix=2*parseInt(result.routes[0].legs[0].distance.text);
    console.log(prix);
    console.log("aaaa");
}
else{prix=1.4*parseInt(result.routes[0].legs[0].distance.text);
console.log(prix);}

            $("#output").html("<div class='result-table'> la distance de votre trajet: " + result.routes[0].legs[0].distance.text + ".<br />Duration: " + result.routes[0].legs[0].duration.text+".<br />Prix estimé: " + prix +" " +"€"+".<br />" +"<button class='button' type='button' onclick='clearRoute();' style='background-color:red;'>Valider mon trajet</button>"+ ".</div>"
            ) ;
            document.getElementById("output").style.display = "block";

            //display route
            directionsDisplay.setDirections(result);
        } else {
            //delete route from map
            directionsDisplay.setDirections({ routes: [] });
            //center map in London
            map.setCenter(myLatLng);

            //Show error message           
           
            alert("Can't find road! Please try again!");
            clearRoute();
        }
    });

}

// Clear results

function clearRoute(){
    document.getElementById("output").style.display = "none";
    document.getElementById("location").value = "";
    document.getElementById("location-2").value = "";
    directionsDisplay.setDirections({ routes: [] });
    
}

// Create autocomplete objects for all inputs

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
directionsDisplay.setMap(map);
function geolocate() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var geolocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        var geocoder = new google.maps.Geocoder;

        geocoder.geocode({'location': geolocation}, function(results, status) {
            if (status === 'OK') {
              if (results[0]) {

                console.log(results[0].formatted_address);
               
              } } });
            





















        var circle = new google.maps.Circle(
            {center: geolocation, radius: position.coords.accuracy});
            autocomplete1.setBounds(circle.getBounds());
      });
    }
  }
