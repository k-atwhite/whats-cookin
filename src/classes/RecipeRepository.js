import Recipe from "./Recipe"
import Ingredient from "./Ingredient";
import { ingredientsData } from "../data/ingredients.js";
import { recipeData } from "../data/recipes.js";
// import recipeTestData from './test-recipe-data.js';

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe))
  }

  filterTags(searchText) {
    return this.recipes.filter((recipe) => recipe.tags.includes(searchText))
  }

   filterName(searchText) {
    return this.recipes.filter((recipe) => recipe.name.includes(searchText))
   }

  filterIngredients(searchText) {
     ingId = this.ingredientsData.find((ingredient) => ingredient.name.includes(searchText))
     console.log(ingId)

    //  this.recipes.filter((recipe) => recipe.n)

    // search through ingredients.js for searchText
    // then use that associated id to search recipes
    // w/in recipes.js return recipe.name


    // const compiledIng = this.recipes.forEach(recipe => recipe.compileIngredients())
    // return compiledIng.filter(recipe => recipe.getIngredientNames().includes(searchText))
  }
}

export default RecipeRepository;