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
var gmarkers = [];


  function getBreweryData(input) {
    $.ajax(apiUrl + input, {method:"GET",
    headers: {
      "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
      "x-rapidapi-key": "4c2c648dcfmsh26fbd934be4b150p1a0be1jsn56e7feae726d"
    }})
      .then(function (response) {
        for(var i = 0; i < response.length; i++){
            console.log(response[i].name);
            ///////////////////////////////
            var sideBar = $("#search-results");
            sideBar.empty();
            sideBar.append("<button id = 'x'> X </button>")
            sideBar.append("<h6> Trail Listing </<h6>")
            var sideBarChild = $("<div id = 'sidebar-div'>" + (parseInt(i) + 1) + "." + " Name: " + response[i].name + "<br>" + "Length: " + response[i].name.length + " mi " + "<br>" + "Difficulty: " + response[i].state + "<br>" + "Summary: " + response[i].city + "<br>" + "<hr style=border: 4px solid black; />" + "</div>");
            sideBarChild.css('display', 'none');
            sideBar.append(sideBarChild);
            sideBarChild.show('slow');
            console.log(response)
        }
      })
      // .catch(function (error) {
      //   return error
      // });
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