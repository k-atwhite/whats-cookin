import Recipe from './Recipe';

class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe))
  }

  filterTags(searchText) {
    this.recipes.forEach(recipe => recipe.compileIngredients())
    
    this.recipes.filter((recipe) => {
      if (recipe.ingredients.include(searchText) || recipe.name.include(searchText) || recipe.tags.include(searchText)) {
        return recipe
      }
    })
  }
}

export default RecipeRepository;