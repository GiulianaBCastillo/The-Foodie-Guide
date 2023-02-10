$("#random-meal").on("click", function () {
  //
  var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  //
  $.ajax({
    url: queryURL,
    method: "GET".then(function (response) {
      console.log(response); //response from url
      console.log(response.meals[0]); // meal array
      console.log(response.meals[0].strMeal); //name of the meal
      console.log(response.meals[0].strInstructions); // recipe steps
      console.log(response.meals[0].strYoutube); // video link for the meal
      let videoId = response.meals[0].strYoutube.split("=");
      console.log(videoId);
      let vidSource = "https://www.youtube.com/embed/" + videoId[1];
      console.log(vidSource);
      let iFrame = document.createElement("iframe");
      iFrame.src = vidSource;
      document.body.appendChild(iFrame);
    }),
  });
});
