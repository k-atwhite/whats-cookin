import './styles.css';
import { fetchApiData } from './apiCalls';

import User from "./classes/User";
import RecipeRepository from "./classes/RecipeRepository";

// GLOBAL VARIABLE/FUNCTION
let recipeRepo;
let user;


// QUERY SELECTORS
const closeModal = document.getElementById('closeModal')
const favBar = document.getElementById('favBar')
const favButton = document.getElementById('favButton')
const favSection = document.getElementById('favSection')
const homeButton = document.getElementById('homeButton')
const menuButton = document.getElementById('menuButton')
const menuSection = document.getElementById('menuSection')
const modalInfo = document.getElementById('modalInfo')
const recipeModal = document.getElementById('recipeModal')
const searchBar = document.getElementById('searchBar')
const searchResults = document.getElementById('searchResults')
const welcomeMsg = document.getElementById('welcome')


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

favSection.addEventListener('contextmenu', function (e) {
  e.preventDefault()
  removeRecipe(e)
})

favSection.addEventListener('click', function (e) {
  renderModal(e)
})

favBar.addEventListener('keyup', function (e) {
  renderRecipesNoButtons(favSection, filterFavText(e))
})

closeModal.addEventListener('click', function() {
  toggleHidden(recipeModal)
})

favButton.addEventListener('click', function() {
  show(homeButton)
  show(menuButton)
  show(favBar)
  hide(searchResults)
  hide(menuSection)
  hide(searchBar)
  toggleHidden(favButton)
  toggleHidden(favSection)
  renderRecipesNoButtons(favSection, user.favoriteRecipes)
})

homeButton.addEventListener('click', function() {
  toggleHidden(homeButton)
  toggleHidden(searchResults)
  hide(favSection)
  hide(menuSection)
  hide(favBar)
  show(favButton)
  show(menuButton)
  show(searchBar)
})

menuButton.addEventListener('click', function() {
  show(favButton)
  show(homeButton)
  hide(searchResults)
  hide(favSection)
  hide(searchBar)
  hide(favBar)
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
      recipeRepo = new RecipeRepository(data.recipeData, ingredientData)
    })
    .then(() => renderRecipes(searchResults, recipeRepo.recipes))
};

const greetUser = () => {
  welcomeMsg.innerHTML = `Welcome, ${user.name}!`
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

const filterFavText = (e) => {
  let searchText = e.target.value.toLowerCase();
  let names = user.filterFavoriteRecipeByName(searchText);
  let ingredients = user.filterFavoriteRecipeByIngredients(searchText);
  let tags = user.filterFavoriteRecipeByTag(searchText);
  let flattenedRecipes = [names, ingredients, tags].flat()
  let filteredRecipes = removeDuplicates(flattenedRecipes)
  return filteredRecipes
}

const renderRecipes = (container, dataSet) => {
  container.innerHTML = ""
  dataSet.forEach(recipe => {
    container.innerHTML += `
      <section class="recipe-card" id=${recipe.id}>
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
    container.innerHTML += `
      <section class="recipe-card test" id=${recipe.id}>
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
    modalInfo.innerHTML = `<p class="modal-headers">${matchedRecipe.name}</p>
    <p><img src=${matchedRecipe.image}></p>
    <p class="modal-headers">Ingredients:</p>
    <p>${matchedRecipe.getIngredientNames()}</p>
    <p class="modal-headers">Instructions:</p>
    <p>${matchedRecipe.getInstructions()}</p>
    <p class="modal-headers">Cost:</p>
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

const removeRecipe = (e) => {
  let eventID = parseInt(e.target.closest('section').id)
  let matchedRecipe = recipeRepo.recipes.find(recipe => eventID === recipe.id)
  user.removeFavoriteRecipe(matchedRecipe)
  renderRecipesNoButtons(favSection, user.favoriteRecipes)
}
