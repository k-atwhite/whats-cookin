import './styles.css';
import { fetchApiData } from './apiCalls';

import User from "./classes/User";
import RecipeRepository from "./classes/RecipeRepository";

// GLOBAL VARIABLE/FUNCTION
let recipeRepo;
let user;


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
const menuButton = document.getElementById('menuButton')
const menuSection = document.getElementById('menuSection')


// EVENT LISTENERS
searchBar.addEventListener('keyup', function(e) {
    renderRecipes(searchResults, filterText(e))
})

searchResults.addEventListener('click', function(e) {
    addToFav(e)
    addtoWeeklyMenu(e)
    renderModal(e)
})

menuSection.addEventListener('click', function(e) {
  renderModal(e)
})

favSection.addEventListener('click', function (e) {
  renderModal(e)
})

closeModal.addEventListener('click', function() {
  toggleHidden(recipeModal)
})

favButton.addEventListener('click', function() {
  show(homeButton)
  show(menuButton)
  hide(searchResults)
  hide(menuSection)
  toggleHidden(favButton)
  toggleHidden(favSection)
  renderRecipesNoButtons(favSection, user.favoriteRecipes)
})

homeButton.addEventListener('click', function() {
  toggleHidden(homeButton)
  toggleHidden(searchResults)
  hide(favSection)
  hide(menuSection)
  show(favButton)
  show(menuButton)
})

menuButton.addEventListener('click', function() {
  show(favButton)
  show(homeButton)
  hide(searchResults)
  hide(favSection)
  toggleHidden(menuButton)
  toggleHidden(menuSection)
  renderRecipesNoButtons(menuSection, user.recipesToCook)
})

window.addEventListener('load', function() {
  setUpUser();
  setUpIngredients();
})


//EVENT HANDLERS

const setUpIngredients = () => {
  let ingredients;
  fetchApiData('ingredients')
    .then(data => {
      ingredients = data.ingredientsData;
    })
    .then(() => setUpRepo(ingredients))
}

const setUpUser = () => {
  fetchApiData('users')
    .then(data => {
      user = new User(data.usersData[Math.floor(Math.random() * data.usersData.length)]);
    })
    .then(() => greetUser())
}

const setUpRepo = (ingredientData) => {
  fetchApiData('recipes')
    .then(data => {
      recipeRepo = new RecipeRepository(data.recipeData, ingredientData);
    })
    .then(() => renderRecipes(searchResults, recipeRepo.recipes))
};

const greetUser = () => {
  welcomeMsg.innerHTML = `Welcome ${user.name}!`
};

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

const renderRecipesNoButtons = (container, dataSet) => {
  container.innerHTML = ""
  dataSet.forEach(recipe => {
    container.innerHTML +=
    `<section class="recipe-card test" id=${recipe.id}>
        ${recipe.name}
        <img src=${recipe.image} class="recipe-img">
        </section>
        `
  })
}

const toggleHidden = (element) => {
  element.classList.toggle('hidden')
}

const hide = (element) => {
  element.classList.add('hidden')
}

const show = (element) => {
  element.classList.remove('hidden')
}

const renderModal = (e) => {
  let eventID = parseInt(e.target.closest('section').id)
  if (e.target.closest('section').classList.contains('recipe-card')) {
    let matchedRecipe = recipeRepo.recipes.find(recipe => eventID === recipe.id)
    modalInfo.innerHTML = `<p>${matchedRecipe.name}</p>
    <p><img src=${matchedRecipe.image}></p>
    <p>${matchedRecipe.getIngredientNames()}</p>
    <p>${matchedRecipe.getInstructions()}</p>
    <p>$${matchedRecipe.getCost()}</p>`
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

const addtoWeeklyMenu = (e) => {
  let eventID = parseInt(e.target.closest('section').id)
  if (e.target.classList.contains('add-week-menu')) {
    let matchedRecipe = recipeRepo.recipes.find(recipe => eventID === recipe.id)
    user.addToWeeklyMenu(matchedRecipe)
  }
}


// ITERATION 2

// Favorite / unfavorite recipes that I like and can easily find again


// Filter my favorited recipes by one or more tags


// Search my favorited recipes by its name or ingredients


// Add a recipe to a list of recipes to cook
