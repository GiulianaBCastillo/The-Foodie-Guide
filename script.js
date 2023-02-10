//Recipe API
$("#random-meal").on("click", function() {
    var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=299b322d&app_key=c2e37f835315905a8c42461585f9c738&ingr=5";
    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        console.log(response);
        console.log(response.hits);
        console.log(response.hits[0].recipe.label);
      });
  });

  //Nutrition values API
  $("#nutrition-value").on("click", function () {
    var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=pasta&app_id=36865b74&app_key=9cf0e140b88b31c2052ee297822d09de";
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    .then(function(response) {
        console.log(response);
        console.log(response.hits);
        console.log(response.hits[0].recipe);
        console.log(response.hits[0].recipe.calories);
    })
  })