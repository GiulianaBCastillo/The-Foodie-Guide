$("#random-meal").on("click", function () {
  //
  var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  //
  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    //response from url
    console.log(response);
    // meal array
    let meals = response.meals;
    console.log(meals);
    console.log(meals[0].strIngredient1);

    //name of the meal

    console.log(response.meals[0].strMeal);
    let randomMeal =
      "Your random meal is : " +
      response.meals[0].strMeal +
      " " +
      "👏" +
      "👏" +
      "😍";
    console.log(randomMeal);
    var randomMealtitle = $("<h1></h1>");
    randomMealtitle.text(randomMeal);
    randomMealtitle.appendTo("#food-title");

    //ingredient list

    let mealIngredient =
      response.meals[0].strMeasure1 +
      " " +
      response.meals[0].strIngredient1 +
      " ," +
      (response.meals[0].strMeasure2 +
        " " +
        response.meals[0].strIngredient2 +
        " ,") +
      (" " +
        response.meals[0].strMeasure3 +
        " " +
        response.meals[0].strIngredient3) +
      (" ," +
        response.meals[0].strMeasure4 +
        " " +
        response.meals[0].strIngredient4 +
        " ,") +
      (+ " " +
        response.meals[0].strMeasure5 +
        " " +
        response.meals[0].strIngredient5 +
        " ,") +
      (" " +
        response.meals[0].strMeasure6 +
        " " +
        response.meals[0].strIngredient6 +
        " ,") +
      (" " +
        response.meals[0].strMeasure7 +
        " " +
        response.meals[0].strIngredient7 +
        " ,") +
      (" " +
        response.meals[0].strMeasure8 +
        " " +
        response.meals[0].strIngredient8 +
        " ,") +
      (" " +
        response.meals[0].strMeasure9 +
        " " +
        response.meals[0].strIngredient9 +
        " ,") +
      (" " +response.meals[0].strMeasure10 +
        " " +
        response.meals[0].strIngredient10 +
        " ,") +
      (" " +
        response.meals[0].strMeasure11 +
        " " +
        response.meals[0].strIngredient11 + " ") +
      (" ," +
        response.meals[0].strMeasure12 +
        " " +
        response.meals[0].strIngredient12 +
        " ,") +
      (+" " +
        response.meals[0].strMeasure13 +
        " " +
        response.meals[0].strIngredient13 +
        " ,") +
      (" " +
        response.meals[0].strMeasure14 +
        " " +
        response.meals[0].strIngredient14 +
        " ,") +
      (" " +
        response.meals[0].strMeasure15 +
        " " +
        response.meals[0].strIngredient15 +
        " ,") +
      (" " +
        response.meals[0].strMeasure16 +
        " " +
        response.meals[0].strIngredient16 +
        " ,") +
      (" " +
        response.meals[0].strMeasure17 +
        " " +
        response.meals[0].strIngredient17) + 
        (" " +
        response.meals[0].strMeasure18 +
        " " +
        response.meals[0].strIngredient18 +
        " ,") +
      (" " +
        response.meals[0].strMeasure19 +
        " " +
        response.meals[0].strIngredient19 +
        " ,") +
      (" " +
        response.meals[0].strMeasure20 +
        " " +
        response.meals[0].strIngredient20 +
        " ,")

    console.log(mealIngredient);
    let ingredients = $("<secttion/>");
    ingredients.text('The ingredeients are :' + mealIngredient);
    ingredients.appendTo(".h4");

    //   // recipe steps
    //   $(function(cookingInstructions){
    //     let splitInstructions = response.meals[0].strInstructions
    //     console.log(splitInstructions);

    //     let new1 = splitInstructions.split('.');

    //     let arrayLength = new1.length;
    //     console.log(arrayLength);
    //     for (var i = 0; i < arrayLength; i++) {
    //         console.log(new1);
    //     //     //Do something

    //     }

    // });
    let cookingInstructions = response.meals[0].strInstructions;
    console.log(cookingInstructions);
    let instructions = $("<section>");
    instructions.text(cookingInstructions);
    instructions.appendTo(".p-3");
    console.log(cookingInstructions);

    // meal image
    let mealImage = response.meals[0].strMealThumb; // calling the image object
    var randomMealimage = $("<img/>"); // creating an image tag for the image object
    //setting attributes for the image tags
    randomMealimage.attr("src", mealImage);
    randomMealimage.attr("width", 300);
    randomMealimage.attr("height", 300);
    console.log(randomMealimage);
    randomMealimage.appendTo("#images"); // adding the image to the image div in the html

    // creating video link for the meal
    console.log(response.meals[0].strYoutube);
    let videoId = response.meals[0].strYoutube.split("="); //using the split function to get url and the vid id number
    console.log(videoId);
    let vidSource = "https://www.youtube.com/embed/" + videoId[1]; // used the embeded video link url and added the videoID number to call the video
    console.log(vidSource);
    let iFrame = document.createElement("iframe"); // an iframe element is created to display the video on to the webpage
    iFrame.src = vidSource; // the iframe src will be the vidSource link
    // document.getElementById(".video").appendChild(iFrame)
    document.body.div.video.appendChild(iFrame); // appending(adding) the video source on to the html document
  });
});
