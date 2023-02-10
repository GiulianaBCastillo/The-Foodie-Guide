$("#random-meal").on("click", function () {
  //
  var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  //
  $.ajax({
    url: queryURL,
    method: "GET"
  })
    .then(function (response) {
      console.log(response); //response from url
      console.log(response.meals[0]); // meal array
      console.log(response.meals[0].strMeal); //name of the meal
      console.log(response.meals[0].strInstructions); // recipe steps
      console.log(response.meals[0].strYoutube); // video link for the meal
      let videoId = response.meals[0].strYoutube.split("="); //using the split function to get url and the vid id number
      console.log(videoId);
      let vidSource = "https://www.youtube.com/embed/" + videoId[1]; // used the embeded video link url and added the videoID number to call the video
      console.log(vidSource);
      let iFrame = document.createElement("iframe"); // an iframe element is created to display the video on to the webpage 
      iFrame.src = vidSource; // the iframe src will be the vidSource link 
      document.body.appendChild(iFrame); // appending(adding) the video source on to the html document 
    
  });
});
