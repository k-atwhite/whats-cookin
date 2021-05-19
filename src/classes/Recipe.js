import { ingredientsData } from "../data/ingredients";

class Recipe {
    constructor(recipe) {
        this.id = recipe.id;
        this.imageUrl = recipe.image;
        this.ingredients = recipe.ingredients;
        this.instructions =  recipe.instructions;
        this.name = recipe.name;
        this.tags = recipe.tags;
        this.ingredientCost = 0;
    }

    getInstructions() {
        return this.instructions.map(instruction => instruction.instruction);
    }

// trying the other way
    getIngredients() {
        this.recipeData.ingredients.forEach()
        const ingredients = ingredientdsData.map(ingredient => new Ingredient(item))
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

    getIngredients() {
        new
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
