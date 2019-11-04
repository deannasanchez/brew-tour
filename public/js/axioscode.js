const axios = require("axios");


var queryString = "https://brianiswu-open-brewery-db-v1.p.rapidapi.com/breweries?by_state=new_york"
 axios({
  method: "GET",
  url: queryString,
  headers: {
    "x-rapidapi-host": "brianiswu-open-brewery-db-v1.p.rapidapi.com",
    "x-rapidapi-key": "4c2c648dcfmsh26fbd934be4b150p1a0be1jsn56e7feae726d"
  },
}).then(
  function(response) {
    console.log(response)
  });

