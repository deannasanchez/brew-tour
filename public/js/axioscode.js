const axios = require("axios");

var breweryName;

var queryString = "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_name=" + name
 axios({
  method: "GET",
  url: queryString,
  headers: {
    "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
    "x-rapidapi-key": "4c2c648dcfmsh26fbd934be4b150p1a0be1jsn56e7feae726d"
  },
}).then(
  function(response) {
    console.log(response.name)
  });

  axios.get('/', {
    params: {
      id: 299,
      name: "Almanac Beer Company",
      brewery_type: "micro",
      street: "651B W Tower Ave",
      city: "Alameda",
      state: "California",
      postal_code: "94501-5047",
      country: "United States",
      longitude: "-122.306283180899",
      latitude: "37.7834497667258",
      phone: "4159326531",
      website_url: "http://almanacbeer.com",
      updated_at: "2018-08-23T23:24:11.758Z",
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

  // for (var i = 0; i < response.length; i++) {
  //   //Adding Locations of breweries brewMarkers array
  //   brewMarkers.push(response.result.breweries[i].name);
  // function brewerydiv(i){

  // }
