import './styles.css';
// import apiCalls from './apiCalls';
import { ingredientsData } from "./data/ingredients";
import { recipeData } from "./data/recipes";
import RecipeRepository from "./classes/RecipeRepository";

// GLOBAL VARIABLE
let recipeRepo = new RecipeRepository(recipeData, ingredientsData)

// QUERY SELECTORS
const searchBar = document.getElementById('searchBar')
const searchResults = document.getElementById('searchResults')

// EVENT LISTENERS
searchBar.addEventListener('keyup', function(e) {
    renderRecipes(searchResults, filterText(e))
})


//EVENT HANDLERS
const removeDuplicates = (duplicateList) => {
    let flag = {}
    let uniqueRecipes = []
    duplicateList.forEach(recipe => {
        if (!flag[recipe.id]) {
            flag[recipe.id] = true
            uniqueRecipes.push(recipe)
        }
    })
    return uniqueRecipes
}

const filterText = (e) => {
    let searchText = e.target.value.toLowerCase();
    // console.log(e.target.value)
    let names = recipeRepo.filterName(searchText);
    let ingredients = recipeRepo.filterIngredients(searchText);
    let tags = recipeRepo.filterTags(searchText);
    let flattenedRecipes = [names, ingredients, tags].flat()
    // console.log(filteredRecipes.flat())
    let filteredRecipes = removeDuplicates(flattenedRecipes)
    return filteredRecipes
}

const renderRecipes = (container, dataSet) => {
    container.innerHTML = ""
    dataSet.forEach(recipe => {container.innerHTML +=
        `<section class="recipe-card test" id=${recipe.id}>
        ${recipe.name} 
        <img src=${recipe.image} class="recipe-img">
        <button class="add-favorites">fav me!</button>
        <button class="add-week-menu">add to menu!</button>
        </section>
        `
    })
    // use this same function for search results, favs, and weekly menu
}

console.log('Hello world');

// User Stories
// Use the scripts.js file to add information to the DOM.
// ITERATION 1
// As a user, I should be able to view a list of all recipes.
    //OPEN WINDOW - have all the necessary buttons. But also - just show all the recipes at once WITH the searchbar on top
    // have a displayCharacters function - use map for each recipe object. And convert each object into innerHTML.  
    // event handler - a render function, where ALL recipe data is displayed in the "all recipe container" via innerHTML

// As a user, I should be able to click on a recipe to view more information including directions, ingredients needed, and total cost.
    // User clicks any recipe
    // ever.target.id from that click is used as a parameter in the event handler function to display the name, directions, ingredients, total cost in The modal! 
    // run getIngredientNames, getInstructions, getCost - Display!
// As a user, I should be able to filter recipes by a single tags.
// As a user, I should be able to search recipes by their name or ingredients.
    // Create an unpopulated unordered list in HTML to dynamically fill with our search result recipes
    // add littler search icon?
    // jsFile is loaded
    // load up all recipes (to where, recipe repo)
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
