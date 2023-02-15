let randomMealImage = $("#random-meal-img");
// let randomMealVideo = $("#random-meal-video");

$("#random-meal").on("click", function (e) {
  e.preventDefault();
  var queryURL = "https://www.themealdb.com/api/json/v1/1/random.php";

  //
  $.ajax({
    url: queryURL,
    method: "GET", // method to get the url
  }).then(function (response) {
    let meals = response.meals;
    let randomMeal = response.meals[0].strMeal + " " + "👏" + "👏" + "😍";
    // console.log(randomMeal);
    var randomMealtitle = $("h2");
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
// //Recipe API
// $("#random-meal").on("click", function() {
//     var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=299b322d&app_key=c2e37f835315905a8c42461585f9c738&ingr=5";
//     $.ajax({
//       url: queryURL,
//       method: "GET"
//     })
//       .then(function(response) {
//         console.log(response);
//         console.log(response.hits);
//         console.log(response.hits[0].recipe.label);
//       });
//   });

/////////Nutrition section///////
var typeFoodInput = $("foodInput");
var submitBtn = $("nutrition-valueBtn");
var food = "";
var searchFood = [];

///Check the search in local storage
function find(food) {
  for (var i = 0; i < searchFood.length; i++) {
    if (food.toUpperCase() === searchFood[i]) {
      return -1;
    }
  }
  return 1;
}

// Display the search
function displaySearch(event) {
  event.preventDefault();
  if (searchFood.val().trim() !== "") {
    food = searchFood.val().trim();
    searchResult(food);
  }
}

/// Create the AJAX call
$("#nutrition-valueBtn").on("click", function searchResult(food) {
  const settings = {
    async: true,
    crossDomain: true,
    url: "https://edamam-edamam-nutrition-analysis.p.rapidapi.com/api/nutrition-data?ingr=1%20large%20apple",
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "e9088b6dd1mshbce6125990c4c50p1bf0cbjsnf9da49524d18",
      "X-RapidAPI-Host": "edamam-edamam-nutrition-analysis.p.rapidapi.com",
    },
  };

  $.ajax(settings).done(function (response) {
    console.log(response);

    //Display the result
    const calorie = response.calorie;
    const dietLables = response.dietLables;
    $("#DisplayCalorie").html(response.calorie);
    $("#DisplayDietLables").html(response.dietLables);
  });
});

// //Create the AJAX call
// $("#nutrition-valueBtn").on("click", function searchResult(food) {
//   var queryURL = "https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=pasta&app_id=36865b74&app_key=9cf0e140b88b31c2052ee297822d09de";
//   $.ajax({
//       url: queryURL,
//       method: "GET"
//   })
//   .then(function(response) {
//       console.log(response);
//       console.log(response.hits);
//       console.log(response.hits[0].recipe);
//       console.log(response.hits[0].recipe.calories);
//   })
// })

let favouriteFood;
//example = pizza
function addFavouriteFood() {
  let food = document.getElementById("foodInput").value;
  favouriteFood.push(food);
  //document.index[0].reset(); //to clear the input from next entries

  localStorage.setItem("foodItems", JSON.stringify(favouriteFood));
}
// Retrieve
//document.getElementById("foodInput").innerHTML =
//localStorage.getItem("foodInput");

document.addEventListener("DOMContentLoaded", () => {
  document
    .getElementById("nutrition-valueBtn")
    .addEventListener("click", addFavouriteFood);
});

function getFromLocalStorage() {
  localStorageItems = JSON.parse(localStorage.getItem("foodItems"));
  if (localStorageItems) {
    console.log(localStorageItems);
    favouriteFood = localStorageItems;
  } else {
    favouriteFood = [];
  }
  renderLocalStorage ()
}
getFromLocalStorage();
function renderLocalStorage () {

}