import './styles.css';
// import apiCalls from './apiCalls';
import { ingredientsData } from "./data/ingredients";
import { recipeData } from "./data/recipes";
import { usersData } from "./data/users";

import RecipeRepository from "./classes/RecipeRepository";

// GLOBAL VARIABLE/FUNCTION
let recipeRepo = new RecipeRepository(recipeData, ingredientsData)

const greetUser = () => {
    let randomUser = usersData[Math.floor(Math.random() * usersData.length)]
    welcomeMsg.innerHTML = `Welcome ${randomUser.name}!`
}

// QUERY SELECTORS
const searchBar = document.getElementById('searchBar')
const searchResults = document.getElementById('searchResults')
const welcomeMsg = document.getElementById('welcome')
const recipeModal = document.getElementById('recipeModal')
const modalInfo = document.getElementById('modalInfo')
const closeModal = document.getElementById('closeModal')
// const favButton = document.getElementbyID('favButton')
// const menuButton = document.getElementbyID('menuButton')


// EVENT LISTENERS
searchBar.addEventListener('keyup', function(e) {
    renderRecipes(searchResults, filterText(e))
})

searchResults.addEventListener('click', function(e) {
    renderModal(e)
})

closeModal.addEventListener('click', function() {
  toggleHidden(recipeModal)
})

window.addEventListener('load', greetUser)

// favButton.addEventListener('click', addToFavRecipes)

// menuButton.addEventListener('click', addToWeekMenu)


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
        <button class="add-favorites" id='favButton'>fav me!</button>
        <button class="add-week-menu" id="menuButton">add to menu!</button>
        </section>
        `
    })
    // use this same function for search results, favs, and weekly menu
}

const toggleHidden = (element) => {
  element.classList.toggle('hidden')
}

const renderModal = (e) => {
  let eventID = parseInt(e.target.closest('section').id)
  console.log(eventID)
  console.log(recipeRepo.recipes[0].id)
  if (e.target.closest('section').classList.contains('recipe-card')) {
    let matchedRecipe = recipeRepo.recipes.find(recipe => eventID === recipe.id)
    modalInfo.innerHTML = `<p>${matchedRecipe.name}</p>
    <p><img src=${matchedRecipe.image}></p>
    <p>${matchedRecipe.getIngredientNames()}</p>
    <p>${matchedRecipe.getInstructions()}</p>
    <p>${matchedRecipe.getCost()}</p>`
    toggleHidden(recipeModal)
  }
}

// ITERATION 1
// MODAL
    // User clicks any recipe
    // ever.target.id from that click is used as a parameter in the event handler function to display the name, directions, ingredients, total cost in The modal!
    // run getIngredientNames, getInstructions, getCost - Display!
    //

// ITERATION 2

// Favorite / unfavorite recipes that I like and can easily find again


// Filter my favorited recipes by one or more tags


// Search my favorited recipes by its name or ingredients


// Add a recipe to a list of recipes to cook
