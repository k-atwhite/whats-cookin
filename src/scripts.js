import './styles.css';
import apiCalls from './apiCalls';




console.log('Hello world');

// User Stories
// Use the scripts.js file to add information to the DOM.
// ITERATION 1
// As a user, I should be able to view a list of all recipes.
    // User clicks All Recipes Button (or dropdown) - 
    // click event listener runs event hander + hide/show function
    // HTML already has an "all recipe container' where all the recipes will appear
    // event handler - a render function, where ALL recipe data is displayed in the "all recipe container" via innerHTML

// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
    // User clicks any recipe
    // ever.target.id from that click is used as a parameter in the event handler function to display the name, directions, ingredients, total cost in The modal! 
    // run getIngredientNames, getInstructions, getCost - Display!
// As a user, I should be able to filter recipes by a single tags.
// As a user, I should be able to search recipes by their name or ingredients.
    // User types in something that perfectly matches our dataset
    // Clicks search
    // search event listner runs event handler that holds all three search functions (name, ingredients, tag)
    // (can we just have ONE render function?) - render like that harry potter video, render matching results with each key up?


// ITERATION 2
// random index of usersData

// show splash screen with welcome message, setTimeout to main screen User should be able to:


// Favorite / unfavorite recipes that I like and can easily find again


// Filter my favorited recipes by one or more tags


// Search my favorited recipes by its name or ingredients


// Add a recipe to a list of recipes to cook
