// require
// const getData = require("./axioscode")

// 

// Roman's code

// $(document).on("click", ".save-button", function(event) {
// event.preventDefault();
// alert("Added")
// });


// 


// Dee's Code

//Side bar suff



// $("#save-button").on("click", function(event) {
//   event.preventDefault();

//   // Make a newChirp object
//   var newChirp = {
//     author: $("#author").val().trim(),
//     body: $("#chirp-box").val().trim(),
//     created_at: moment().format("YYYY-MM-DD HH:mm:ss")
//   };

//   console.log(newChirp);


// Dillon's Code

var latitude = 33.6461
var longitute = -117.8425

// Initialize and add the map
function initMap() {
    // The location of Uluru
    var uluru = { lat: latitude, lng: longitute };
    // The map, centered at Uluru
    map = new google.maps.Map(
        document.getElementById('map'), { zoom: 10, center: uluru });
    // The marker, positioned at Uluru
    var marker = new google.maps.Marker({ position: uluru, map: map });
    // gmarkers.push(marker)
}

$( "#user-search" ).submit(function( event ) {
  event.preventDefault();
  var input = $("#user-input").val()
  console.log(input)
  getBreweryData(input);
});





