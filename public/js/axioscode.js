var queryString = "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=California"
$.ajax({
  method: "GET",
  url: queryString,
  headers: {
    "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
    "x-rapidapi-key": "4c2c648dcfmsh26fbd934be4b150p1a0be1jsn56e7feae726d"
  },
}).then(
  function (response) {
    console.log(response)
  });


var apiUrl = "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_city="


function getBreweryData(input) {
  $.ajax(apiUrl + input, {
    method: "GET",
    headers: {
      "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
      "x-rapidapi-key": "4c2c648dcfmsh26fbd934be4b150p1a0be1jsn56e7feae726d"
    }
  })
    .then(function (response) {
      var sideBar = $("#search-results");
      sideBar.empty();
      var obj = {
        name: response[0].name,
        addy: response[0].street,
        city: response[0].city,
        state: response[0].state,
        web: response[0].website_url
      }
      console.log(obj)
      for (let i = 0; i < response.length; i++) {
        const brewery = response[i];
        var sideBarChild = $("<li class='list-group-item d-flex justify-content-between align-items-center'>" + (parseInt(i) + 1) + "." + " Name: " + response[i].name + "<br>" + "Address: " + response[i].street + "<br>" + response[i].city + "<br>" + response[i].state + "<br>" + "<a href=" + response[i].website_url + ">" + response[i].website_url + "</a><br></li>");
        var button = $("<button class='save-button' data.> Save </button>");
        button.click(function (event) {
          event.preventDefault();
          $.ajax({
            method: "POST",
            url: "/api/saved",
            data: {
              name: brewery.name,
              addy: brewery.street,
              city: brewery.city,
              state: brewery.state,
              web: brewery.website_url
          },
          }); console.log(brewery)
        })
        sideBarChild.append(button);
        var br = $("<br>")
        sideBarChild.css('display', 'none');
        sideBar.append(sideBarChild, br);
        sideBarChild.show('slow');
        /////////////////////
        // Add markers to locations
        var tLocaton = new google.maps.LatLng(parseFloat(response[i].latitude), parseFloat(response[i].longitude));
        var tMarker = new google.maps.Marker({
          position: tLocaton,
          map: map,
          icon: "/public/img/beer.png"
        });
        // Info window
        (function (tMarker, i) {
          google.maps.event.addListener(tMarker, 'mouseover', function () {
            infowindow = new google.maps.InfoWindow({
              content: "<div class=zIndexUp>" + response[i].name + "</div>" + "<br>" +
                "<div>" + "City: " + response[i].city + "<br>" + "State: " + response[i].state + "<br>" +
                "Website: " + response[i].website_url + "</div>" + "<br>"
            });
            infowindow.open(map, tMarker);

            google.maps.event.addListener(tMarker, 'mouseout', function () {
              infowindow.close(map, tMarker);
            });
          });
        })(tMarker, i);
      }
      //moves map to area
      var center = new google.maps.LatLng(response[0].latitude, response[0].longitude);
      map.setZoom(11);
      map.panTo(center);
      marker = new google.maps.Marker({
        position: center,
        map: map
      });
    })
}



      // for (var i = 0; i < response.length; i++) {
      //   console.log(response[i].name);
      //   //$("#search-results").append(response.forms[0].city);
      // }
      // .catch(function (error) {
      //   return error
      // });
  // }
