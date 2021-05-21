import { users } from '../data/users';

class User {
  constructor(user) {
    this.name = user.name
    this.id = user.id
    this.pantry = user.pantry
    this.favoriteRecipes = []
    this.recipesToCook = []
  }

  addFavoriteRecipe() {

  }

  filterFavoriteRecipe() {
    // by name, ingredient, tags
  }

  addToWeeklyMenu() {

  }
}
