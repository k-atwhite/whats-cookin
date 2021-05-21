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
    // pass in idea
    // find in recipe repo, a recipe with the correct idea
    // push that recipe to favoriteRecipes
    const foundRecipe = dataSet.find(recipe => recipe.id === id);

    if (!this.favoriteRecipes.includes(foundRecipe)) {
      this.favoriteRecipes.push(foundRecipe);
    }

  }

  removeFavoriteRecipe(id) {

    const deleteIndex = this.favoriteRecipes.findIndex(recipe => recipe.id === id)

    this.favoriteRecipes.splice(deleteIndex, 1);
  }

  filterFavoriteRecipe() {
    // by name, ingredient, tags
  }

  addToWeeklyMenu() {

  }
}

export default User
