import { ingredientsData } from "../data/ingredients";

class Recipe {
    constructor(id, imageUrl, ingredients, instructions, name, tags) {
        this.id = id;
        this.imageUrl = imageUrl;
        this.ingredients = ingredients;
        this.instructions =  instructions;
        this.name = name;
        this.tags = tags;
        this.ingredientCost = 0;
    }

    getInstructions() {
        return this.instructions.map(instruction => instruction.instruction);
    }

    getIngredients() {
        let ingredientNames = []
        this.ingredients.map(ingredient) => {
            let idMatch = ingredient.id;
            ingredientsData.forEach((ingredientDataElement) => {
                if (idMatch === ingredientDataElement.id) {
                    ingredientNames.push(ingredientDataElement.name);
                }
            })
        }
    }
    getCost() {
        this.ingredients.map(ingredient) => {
            let idMatch = ingredient.id;
            ingredientsData.forEach((ingredientDataElement) => {
                if (idMatch === ingredientDataElement.id) {
                    this.ingredientCost += ingredientDataElement.estimatedCostInCents * ingredient.quantity.amount
                }
            })
        }
    }
}
export default Recipe