class Recipe {
    constructor(id, imageUrl, ingredients, instructions, name, tags) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.instructions =  instructions;
        this.name = name;
        this.tags = tags;
    }

    getIngredients() {

    }

    getInstructions() {
      return this.instructions.map(instruction => instruction.instruction);
    }

    getCost(ingredientData) {
      // Input: ingredient.estimatedCostInCents * recipe.quantity.amount
      // Output: number that is correct
      console.log(this.ingredients);
    }
}

export default Recipe

    // getIngredients()
// Determine the names of ingredients needed
// map ingredients array; return ingredient names? ingredient.name

    // getInstructions()
// Return its directions / instructions
// return array; recipe.instructions

   // getCost()
// Get the cost of its ingredients
// reduce ingredients array
// add each ingredient.estimatedCostInCents to accumulator
// return accumulator
