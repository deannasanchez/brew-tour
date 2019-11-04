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
      for (var i = 0; i < response.length; i++) {
        var sideBarChild = $("<div id = 'sidebar-div'>" + (parseInt(i) + 1) + "." + " Name: " + response[i].name + "<br>" + "Address: " + response[i].street + "<br>" + response[i].city + "<br>" + response[i].state + "<br>" + "Website: " + "<a href=" + response[i].website_url + ">" + response[i].website_url + "</a>" + "</div> <br>");
        sideBarChild.css('display', 'none');
        sideBar.append(sideBarChild);
        sideBarChild.show('slow');
        /////////////////////
        var lat =+ response[i].latitude;

        var lon =+ response[i].longitude;
        console.log(lon)
        //moves map to area
        var center = new google.maps.LatLng(lat, lon);
        map.setZoom(11);
        map.panTo(center);
        
        // Add markers to locations
        var tLocaton = new google.maps.LatLng(parseFloat(response[i].latitude), parseFloat(response[i].longitude));
        var tMarker = new google.maps.Marker({
            position: tLocaton,
            map: map,
            //icon: "img/beer.png"
        });
        gmarkers.push(tMarker)
      }
      


      // for (var i = 0; i < response.length; i++) {
      //   console.log(response[i].name);
      //   //$("#search-results").append(response.forms[0].city);
      // }
      // .catch(function (error) {
      //   return error
      // });
    }
    )
}



  // axios.get('/', {
  //   params: {
  //     id: 299,
  //     name: "Almanac Beer Company",
  //     brewery_type: "micro",
  //     street: "651B W Tower Ave",
  //     city: "input",
  //     state: "California",
  //     postal_code: "94501-5047",
  //     longitude: "-122.306283180899",
  //     latitude: "37.7834497667258",
  //     website_url: "http://almanacbeer.com",
  //   }
  // })
  // .then(function (response) {
  //   console.log(response);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });