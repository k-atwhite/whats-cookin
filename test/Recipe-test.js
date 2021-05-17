import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {
    let ingredients
    let ingredient1
    let ingredient2
    let instructions
    let instruction1
    let instruction2
    let name
    let tags
    let recipe;

    beforeEach('Instantiate recipe', () => {
        ingredient1 = {"id": 20081, "name": "wheat flour","estimatedCostInCents": 142}
        ingredient2 = {"id": 18372,"name": "bicarbonate of soda", "estimatedCostInCents": 582}
        ingredients = [ingredient1, ingredient2]
        instruction1 = {"instruction": "Preheat oven to 170 – 200°F", "number": 1},
        instruction2 = {"Mix warm water with brown rice syrup, molasses", "number": 2}
        instructions = [instruction1, instruction2]
        name = "Whole Grain Bread"
        tags = ["bread"]
        recipe = new Recipe(1234, "https://spoonacular.com/recipeImages/741603-556x370.jpeg", ingredients, instructions, name, tags)
    });

    it('Should be a function', () => {
     expect(Recipe).to.be.a('function');
    });

    it('Should be an instance of Recipe', () => {
     expect(recipe).to.be.an.instanceof(Recipe);
    });

    


    
// id: number
// image: url
// ingredients: array of ingredient objects
// instructions: array of instruction objects
// name: recipe name
// tags: array of string tags