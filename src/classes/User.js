// import { users } from '../data/users';

class User {
  constructor(user) {
    this.name = user.name
    this.id = user.id
    this.pantry = user.pantry
    this.favoriteRecipes = []
    this.recipesToCook = []
  }

  addFavoriteRecipe(recipe) {
    if (!this.favoriteRecipes.includes(recipe)) {
      this.favoriteRecipes.push(recipe);
    }
  }

  removeFavoriteRecipe(recipe) {
    if (this.favoriteRecipes.includes(recipe)) {
      const deleteIndex = this.favoriteRecipes.indexOf(recipe);

      this.favoriteRecipes.splice(deleteIndex, 1);
    }
  }

  addToWeeklyMenu(recipe) {
      // can we just pass in recipe as an arument?
     // add whole object during event handling
     // easy to change to "foundID" method if necessary
    if (!this.recipesToCook.includes(recipe)) {
      this.recipesToCook.push(recipe)
    }
  }

  removeFromWeeklyMenu(recipe) {
    if (this.recipesToCook.includes(recipe)) {
      const deleteIndex = this.recipesToCook.indexOf(recipe);

      this.recipesToCook.splice(deleteIndex, 1);
    }
  }

  filterFavoriteRecipeByTag(searchText) {
    const searchedTags = this.favoriteRecipes.filter(recipe => recipe.tags.includes(searchText))
    return searchedTags;
    // need to return but brackets are getting fucky
  }
  //
  // filterFavoriteRecipeByName(searchText) {
  //   const searchedNames = this.favoriteRecipes.filter(recipe => this.favoriteRecipes.name.includes(searchText))
  //   // need to return but brackets are getting fucky
  // }
  //
  // filterFavoriteRecipeByIngredients() {
  //
  // }
}

export default User
