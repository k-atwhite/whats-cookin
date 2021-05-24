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
    const searchedTags = this.favoriteRecipes.filter(recipe => recipe.tags.includes(searchText.toLowerCase()))
    return searchedTags;
  }

  filterFavoriteRecipeByName(searchText) {
    const searchedNames = this.favoriteRecipes.filter(recipe => recipe.name.toLowerCase().includes(searchText.toLowerCase()))
    return searchedNames;
  }

  // filterIngredients(searchText) {
  //   let ingMatch = this.ingredients.find(ingredient => ingredient.name.includes(searchText));
  //   return this.recipes.filter(recipe => {
  //     return recipe.ingredients.reduce((acc, ingredient) => {
  //       if (ingMatch.id === ingredient.id) {
  //         acc = true;
  //       }
  //       return acc;
  //     }, false)
  //   })
  // }

  // filterFavoriteRecipeByIngredients(searchText) {
  //   let recipeMatch = this.favoriteRecipes.filter(recipe => recipe.ingredients.id )
  // }
}

export default User;
