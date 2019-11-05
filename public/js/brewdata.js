$(document).ready(function() {
    /* global moment */
  
    // blogContainer holds all of our posts
    var brewConatiner = $("#brewery-list");
    var url = window.location.search;
    var breweryId;
    if (url.indexOf("?breweries_id=") !== -1) {
      breweryId = url.split("=")[1];
      getBreweryInfo(breweryId);
    }
    // If there's no breweryId we just get all posts as usual
    else {
      getBreweryInfo();
    }
  
  
    // This function grabs posts from the database and updates the view
    function getBreweryInfo(author) {
      breweryId = breweries || "";
      if (breweryId) {
        breweryId = "/?breweries_id=" + breweryId;
      }
      $.get("/api/posts" + breweryId, function(data) {
        console.log("BreweryInfo", data);
        breweryinfo = data;
        if (!breweryinfo || !breweryinfo.length) {
          displayEmpty(breweryinfo);
        }
        else {
          initializeRows();
        }
      });
    }
  
    // This function does an API call to delete posts
    function deletePost(id) {
      $.ajax({
        method: "DELETE",
        url: "/api/posts/" + id
      })
        .then(function() {
          getBreweryInfo(postCategorySelect.val());
        });
    }
  
    // InitializeRows handles appending all of our constructed post HTML inside blogContainer
    function initializeRows() {
      brewConatiner.empty();
      var breweriesToAdd = [];
      for (var i = 0; i < breweryinfo.length; i++) {
        breweriesToAdd.push(createNewRow(posts[i]));
      }
      brewConatiner.append(breweriesToAdd);
    }
  
  
    // This function displays a message when there are no posts
    function displayEmpty(id) {
      var query = window.location.search;
      var partial = "";
      if (id) {
        partial = " for Brewery #" + id;
      }
      brewConatiner.empty();
      var messageH2 = $("<h2>");
      messageH2.css({ "text-align": "center", "margin-top": "50px" });
      messageH2.html("No breweries yet" + partial + ", navigate <a href='/" + query +
      "'>here</a> in order to get started.");
      brewConatiner.append(messageH2);
    }
  
  });
  