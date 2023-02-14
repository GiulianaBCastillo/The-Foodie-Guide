let randomMealImage = $("#random-meal-img");
// let randomMealVideo = $("#random-meal-video");

$("#random-meal").on("click", function (e) {
  e.preventDefault();
  var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  //
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    let meals = response.meals;
    let randomMeal =
      response.meals[0].strMeal +
      " " +
      "👏" +
      "👏" +
      "😍";
    // console.log(randomMeal);
    var randomMealtitle = $("<h1></h1>");
    randomMealtitle.empty().text(randomMeal);
    randomMealtitle.appendTo("#meal-title");

    //ingredient list
    let randomMealIngredients = response.meals[0];
    // console.log(randomMealIngredients);

    let randomMealMeasurementArr = [
      randomMealIngredients.strMeasure1,
      randomMealIngredients.strMeasure2,
      randomMealIngredients.strMeasure3,
      randomMealIngredients.strMeasure4,
      randomMealIngredients.strMeasure5,
      randomMealIngredients.strMeasure6,
      randomMealIngredients.strMeasure7,
      randomMealIngredients.strMeasure8,
      randomMealIngredients.strMeasure9,
      randomMealIngredients.strMeasure10,
      randomMealIngredients.strMeasure11,
      randomMealIngredients.strMeasure12,
      randomMealIngredients.strMeasure13,
      randomMealIngredients.strMeasure14,
      randomMealIngredients.strMeasure15,
      randomMealIngredients.strMeasure16,
      randomMealIngredients.strMeasure17,
      randomMealIngredients.strMeasure18,
      randomMealIngredients.strMeasure19,
      randomMealIngredients.strMeasure20,
    ];
    let randomMealIngredientsArr = [
      randomMealIngredients.strIngredient1,
      randomMealIngredients.strIngredient2,
      randomMealIngredients.strIngredient3,
      randomMealIngredients.strIngredient4,
      randomMealIngredients.strIngredient5,
      randomMealIngredients.strIngredient6,
      randomMealIngredients.strIngredient7,
      randomMealIngredients.strIngredient8,
      randomMealIngredients.strIngredient9,
      randomMealIngredients.strIngredient10,
      randomMealIngredients.strIngredient11,
      randomMealIngredients.strIngredient12,
      randomMealIngredients.strIngredient13,
      randomMealIngredients.strIngredient14,
      randomMealIngredients.strIngredient15,
      randomMealIngredients.strIngredient16,
      randomMealIngredients.strIngredient17,
      randomMealIngredients.strIngredient18,
      randomMealIngredients.strIngredient19,
      randomMealIngredients.strIngredient20,
    ];
    randomMealMeasurementArr.forEach((measurement) => {
      if (measurement !== "" && measurement !== null) {
        $("#randomMealMeasurement").append(`<li>${measurement}</li>`);
      }
    });

    randomMealIngredientsArr.forEach((ingredient) => {
      if (ingredient !== "" && ingredient !== null) {
        $("#randomMealIngredient").append(`<li>${ingredient}</li>`);
      }
    });

    let cookingInstructions = response.meals[0].strInstructions;
    // console.log(cookingInstructions);
    let new1 = cookingInstructions.split(".");
    console.log(new1);
    $(".instructions").append(cookingInstructions);
    // console.log(cookingInstructions);

    // meal image
    let mealImage = response.meals[0].strMealThumb; // calling the image object
    // var randomMealimage = $("<img/>"); // creating an image tag for the image object
    //setting attributes for the image tags
    // randomMealimage.attr("src", mealImage);
    randomMealImage.attr("src", mealImage);
    randomMealImage.attr("width", 300);
    randomMealImage.attr("height", 300);
    // console.log(randomMealImage);
    // randomMealimage.appendTo("#images"); // adding the image to the image div in the html

    // creating video link for the meal
    
    let videoId = response.meals[0].strYoutube.split("="); //using the split function to get url and the vid id number
    // console.log(videoId);
    let vidSource = "https://www.youtube.com/embed/" + videoId[1]; // used the embeded video link url and added the videoID number to call the video
    // console.log(vidSource);
    let iFrame = $("iframe"); // an iframe element is created to display the video on to the webpage
    // iFrame.src = vidSource; // the iframe src will be the vidSource link
    // document.getElementById(".video").appendChild(iFrame)
    iFrame.attr("src", vidSource);
    iFrame.attr("width", 300);
    iFrame.attr("height", 300);
    iFrame.empty().appendTo("#ramdom-meal-video");

    // document.body.div.video.appendChild(iFrame); // appending(adding) the video source on to the html document
  });

  // $("#randomMealInfo").empty();
});
