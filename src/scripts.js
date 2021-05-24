import './styles.css';
// import apiCalls from './apiCalls';
import { ingredientsData } from "./data/ingredients";
import { recipeData } from "./data/recipes";
import { usersData } from "./data/users";

import User from "./classes/User";
import RecipeRepository from "./classes/RecipeRepository";

// GLOBAL VARIABLE/FUNCTION
let recipeRepo = new RecipeRepository(recipeData, ingredientsData)
let user = new User(usersData[Math.floor(Math.random() * usersData.length)])

const greetUser = () => {
    // let randomUser = usersData[Math.floor(Math.random() * usersData.length)]
    welcomeMsg.innerHTML = `Welcome ${user.name}!`
}

// QUERY SELECTORS
const searchBar = document.getElementById('searchBar')
const searchResults = document.getElementById('searchResults')
const welcomeMsg = document.getElementById('welcome')
const recipeModal = document.getElementById('recipeModal')
const modalInfo = document.getElementById('modalInfo')
const closeModal = document.getElementById('closeModal')
const favButton = document.getElementById('favButton')
const homeButton = document.getElementById('homeButton')
const favSection = document.getElementById('favSection')
// const menuButton = document.getElementbyID('menuButton')


// EVENT LISTENERS
searchBar.addEventListener('keyup', function(e) {
    renderRecipes(searchResults, filterText(e))
})

searchResults.addEventListener('click', function(e) {
    addToFav(e)
    renderModal(e)
})

closeModal.addEventListener('click', function() {
  toggleHidden(recipeModal)
})

favButton.addEventListener('click', function() {
  toggleHidden(favButton)
  toggleHidden(searchResults)
  toggleHidden(homeButton)
  toggleHidden(favSection)
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
    let names = recipeRepo.filterName(searchText);
    let ingredients = recipeRepo.filterIngredients(searchText);
    let tags = recipeRepo.filterTags(searchText);
    let flattenedRecipes = [names, ingredients, tags].flat()
    let filteredRecipes = removeDuplicates(flattenedRecipes)
    return filteredRecipes
}

const renderRecipes = (container, dataSet) => {
    container.innerHTML = ""
    dataSet.forEach(recipe => {container.innerHTML +=
        `<section class="recipe-card test" id=${recipe.id}>
        ${recipe.name}
        <img src=${recipe.image} class="recipe-img">
        <button class="add-favorites" id='addFav'>fav me!</button>
        <button class="add-week-menu" id="addToMenu">add to menu!</button>
        </section>
        `
    })
}

const toggleHidden = (element) => {
  element.classList.toggle('hidden')
}

const renderModal = (e) => {
  let eventID = parseInt(e.target.closest('section').id)
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

const addToFav = (e) => {
  let eventID = parseInt(e.target.closest('section').id)
  if (e.target.classList.contains('add-favorites')) {
    let matchedRecipe = recipeRepo.recipes.find(recipe => eventID === recipe.id)
    user.addFavoriteRecipe(matchedRecipe)
  }
}

//separate handler looks for fav button click, else looks for menu button click, else renderModal

// ITERATION 2

// Favorite / unfavorite recipes that I like and can easily find again


// Filter my favorited recipes by one or more tags


// Search my favorited recipes by its name or ingredients


// Add a recipe to a list of recipes to cook
