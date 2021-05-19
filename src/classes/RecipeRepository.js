class RecipeRepository {
  constructor(recipeData) {
    this.recipes = recipeData.map((recipe => return new Recipe(recipe)))
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


// It should have methods to determine:
  // A filtered list of recipes based on one or more tags - Dynamic, works for favorites & toCook?
    // filter recipe.tags.includes
// A filtered list of recipes based on its name or ingredients - dynamic
    // filter name.includes
    // filter ingredients array, ingredient.name.includes