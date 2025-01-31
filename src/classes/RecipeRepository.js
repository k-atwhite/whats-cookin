import Recipe from './Recipe';
import Ingredient from './Ingredient';

class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe));
    this.ingredients = ingredientsData;

    this.recipes.forEach(recipe => recipe.compileIngredients(ingredientsData));
  }

  filterTags(searchText) {
    const formattedSearch = searchText.toLowerCase().split(' ');
    const searchedTags = this.recipes.filter(recipe => recipe.tags.some(tag => formattedSearch.includes(tag)))
    return searchedTags;
  }

  filterName(searchText) {
    return this.recipes.filter((recipe) => recipe.name.toLowerCase().includes(searchText.toLowerCase()))
  }

  filterIngredients(searchText) {
    let ingMatch = this.ingredients.find(ingredient => ingredient.name.toLowerCase().includes(searchText.toLowerCase()));
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
