import { ingredientsData } from "../data/ingredients";

class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.imageUrl = recipe.image;
        this.ingredients = recipe.ingredients;
        this.instructions = recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
        this.ingredientCost = 0;
    }

    compileIngredients() {

      const matchedIngredients = this.ingredients.map(ingredient => {
        const foundIngredient = ingredientsData.find(dataIngredient => dataIngredient.id === ingredient.id)
        const fullIngredient = Object.assign(foundIngredient, ingredient)
        return fullIngredient
      })
      this.ingredients = matchedIngredients

    }

    

    getInstructions() {
      return this.instructions.map(instruction => instruction.instruction);
    }
    // getCost() {
    //     this.ingredients.map(ingredient) => {
    //         let idMatch = ingredient.id;
    //         ingredientsData.forEach((ingredientDataElement) => {
    //             if (idMatch === ingredientDataElement.id) {
    //                 this.ingredientCost += ingredientDataElement.estimatedCostInCents * ingredient.quantity.amount
    //             }
    //         })
    //     }
    // }
}
export default Recipe
