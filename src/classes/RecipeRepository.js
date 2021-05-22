import Recipe from './Recipe';
import Ingredient from './Ingredient';

class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
    this.ingredients = ingredientsData;

    this.recipes.forEach(recipe => recipe.compileIngredients(ingredientsData));
  }

  filterTags(searchText) {
    console.log(this.recipes[0].ingredients);
    return this.recipes.filter((recipe) => recipe.tags.includes(searchText))
  }

  filterName(searchText) {
    return this.recipes.filter((recipe) => recipe.name.includes(searchText))
  }

  filterIngredients(searchText) {
    let ingMatch = this.ingredients.find(ingredient => ingredient.name.includes(searchText));
    return this.recipes.filter(recipe => {
      return recipe.ingredients.reduce((acc, ingredient) => {
        if (ingMatch.id === ingredient.id) {
          acc = true;
        }
        return acc;
      }, false)
    })
  }
}

export default RecipeRepository;
