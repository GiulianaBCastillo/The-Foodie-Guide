////testing API // is not working at the moment,see can you reckon from the below link
// https://developer.edamam.com/edamam-docs-nutrition-api
var ingredient  = $("#search-input");
var searchButton = $("#search-button");
var searchFood=[];
$("#search-button").on("click", DisplayNutrition);

function nutrition(food){
    var queryURL= "https://api.edamam.com/api/recipes/v2?type=public&q=pasta&app_id=299b322d&app_key=c2e37f835315905a8c42461585f9c738&ingr=5" + ingredient;
    $.ajax({
        url:queryURL,
        method:"GET",
    }).then(function(response){
  
      console.log(response.food); })}
function DisplayNutrition(event){
    event.preventDefault();
    if(ingredient.val().trim()!==""){
        food=ingredient.val().trim();
        nutrition(food);
    }
    
}