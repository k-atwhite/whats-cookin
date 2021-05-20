import { ingredientsData } from "../data/ingredients";

class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.image = recipe.image;
        this.ingredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
    }

    compileIngredients() {
      const matchedIngredients = this.ingredients.map(ingredient => {
        const foundIngredient = ingredientsData.find(dataIngredient => dataIngredient.id === ingredient.id)
        const fullIngredient = Object.assign(foundIngredient, ingredient)
        return fullIngredient
      })
      this.ingredients = matchedIngredients
    }

    getIngredientNames() {
      return this.ingredients.map(ingredient => ingredient.name)
    }

    getInstructions() {
      return this.instructions.map(instruction => instruction.instruction);
    }

    getCost() {
      return this.ingredients.reduce((acc, ingredient) => {
        acc += ingredient.estimatedCostInCents * ingredient.quantity.amount
        return acc
      }, 0)
    }
}
export default Recipe
