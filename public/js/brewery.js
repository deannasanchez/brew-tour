// Roman's code




// 


// Dee's Code

//Side bar suff
function fillUpSideBar(response) {
  var sideBar = $("#brewery-list");
  sideBar.empty();
  sideBar.append("<button id = 'x'> X </button>")
  sideBar.append("<h6> Breweries </<h6>")
  for (var i = 0; i < response.trails.length; i++) {
      var sideBarChild = $("<div id = 'sidebar-div'>" + (parseInt(i) + 1) + "." + " Name: " + response.trails[i].name + "<br>" + "Length: " + response.trails[i].length + " mi " + "<br>" + "Difficulty: " + response.trails[i].difficulty + "<br>" + "Summary: " + response.trails[i].summary + "<br>" + "<hr style=border: 4px solid black; />" + "</div>");
      sideBarChild.css('display', 'none');
      sideBar.append(sideBarChild);
      sideBarChild.show('slow');
  }
}




// 

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

function deletePost(id) {
    $.ajax({
      method: "DELETE",
      url: "/api/breweries/" + id
    })
      .then(function() {
        getPosts(postCategorySelect.val());
      });
  }

//  Joseph's Code







// 