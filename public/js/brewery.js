// require
// const getData = require("./axioscode")

// 

// Roman's code




// 


// Dee's Code

//Side bar suff

function fillUpSideBar(response) {
  var sideBar = $("#search-results");
  sideBar.empty();
  sideBar.append("<button id = 'x'> X </button>")
  for (var i = 0; i < response.length; i++) {
      var sideBarChild = $("<div id = 'sidebar-div'>" + (parseInt(i) + 1) + "." + " Name: " + response[i].name + "<br>" + "Address: " + response[i].street + "<br>" + response[i].city + "<br>" + response[i].state + "<br>" + "Website" + + response[i].website_url + "</div>");
      sideBarChild.css('display', 'none');
      sideBar.append(sideBarChild);
      sideBarChild.show('slow');
  }

}




// Dillon's Code

var latitude = 33.6461
var longitute = -117.8425

var gmarkers = [];
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
    map.setZoom(11);
}

$( "#user-search" ).submit(function( event ) {
  event.preventDefault();
  var input = $("#user-input").val()
  console.log(input)
  getBreweryData(input);
});




//  Joseph's Code







// 