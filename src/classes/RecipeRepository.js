import Recipe from './Recipe';


class RecipeRepository {
  constructor(recipeData, ingredientsData) {
    this.recipes = recipeData.map(recipe => new Recipe(recipe))

    this.ingredients = ingredientsData;
  }

  filterTags(searchText) {
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
