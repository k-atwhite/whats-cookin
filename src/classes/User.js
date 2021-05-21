// import { users } from '../data/users';

class User {
  constructor(user) {
    this.name = user.name
    this.id = user.id
    this.pantry = user.pantry
    this.favoriteRecipes = []
    this.recipesToCook = []
  }

  addFavoriteRecipe(id, dataSet) {
    const foundRecipe = dataSet.find(recipe => recipe.id === id);

    if (!this.favoriteRecipes.includes(foundRecipe)) {
      this.favoriteRecipes.push(foundRecipe);
    }
  }

  removeFavoriteRecipe(id) {
    const deleteIndex = this.favoriteRecipes.findIndex(recipe => recipe.id === id)

    this.favoriteRecipes.splice(deleteIndex, 1);
  }

  addToWeeklyMenu(recipe) {
      // can we just pass in recipe as an arument?
     // add whole object during event handling
     // easy to change to "foundID" method if necessary
    if (!this.favoriteRecipes.includes(recipe)) {
      this.recipesToCook.push(recipe)
    }
  }

  filterFavoriteRecipeByTag(searchText) {
    const searchedTags = this.favoriteRecipes.filter((recipe) => this.favoriteRecipes.tags.includes(searchText))
    // need to return but brackets are getting fucky
  }

  filterFavoriteRecipeByName(searchText) {
    const searchedNames = this.favoriteRecipes.filter(recipe => this.favoriteRecipes.name.includes(searchText))
    // need to return but brackets are getting fucky
  }

  filterFavoriteRecipeByIngredients() {

  }
}

export default User
