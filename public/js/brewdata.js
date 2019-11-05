

$(document).ready(function () {



  $(".saved-brew-button").click(function (event) {
    event.preventDefault();
    $.get("/api/saved", function (data) {
      data.map(datum=>{
        console.log(datum)
        $("#search-results").append(`<h4>${datum.name}</h4><p>${datum.address}</p><p>${datum.city}</p><p>${datum.state}</p><p><a href="${datum.website}">${datum.website}</a></p><hr>`)
      })
      
      console.log("breweryinfo", data);
      // for (let i = 0; i < data.length; i++) {
      //   const brewery = data[i];
    
    })
  })
});