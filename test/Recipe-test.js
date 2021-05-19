import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';
describe('Recipe', () => {
  let imageUrl
  let recipeIngredients
  let ingredient1
  let ingredient2
  let ingredientData
  let instructions
  let instruction1
  let instruction2
  let name
  let tags
  let recipe;
  beforeEach('Instantiate recipe', () => {
    imageUrl = "Potato!"
    ingredient1 = {"id": 20081, "name": "wheat flour","estimatedCostInCents": 142};
    ingredient2 = {"id": 18372,"name": "bicarbonate of soda", "estimatedCostInCents": 582};
    ingredientData = [ingredient1, ingredient2]
// recipeIngredients = recipeData[i].ingredients
    recipeIngredients = [{
      "id": 20081,
      "quantity": {
        "amount": 1.5,
        "unit": "c"
      }}, {
        "id": 18372,
        "quantity": {
          "amount": 0.5,
          "unit": "tsp"
        }}];
    instruction1 = {"instruction": "Preheat oven to 170 – 200°F", "number": 1};
    instruction2 = {"instruction": "Mix with warm water", "number": 2};
    instructions = [instruction1, instruction2];
    name = "Whole Grain Bread";
    tags = ["bread"];
    recipe = new Recipe(1234, imageUrl, recipeIngredients, instructions, name, tags);
  });
  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });
  it('Should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });
  it('Should have an ID which is a number', () => {
    expect(recipe.id).to.equal(1234)
    expect(recipe.id).to.be.a('number')
  });
  it('Should have an image URL which is a string', () => {
    expect(recipe.imageUrl).to.equal("Potato!")
    expect(recipe.imageUrl).to.be.a('string')
  });
  it('Should have ingredients which are in an array', () => {
    // equal direct value, not a variable
    expect(recipe.ingredients).to.equal(recipeIngredients)
    expect(recipe.ingredients).to.be.a('array')
  });
  it('Should have instructions  which are in an array', () => {
    expect(recipe.instructions).to.equal(instructions)
    expect(recipe.instructions).to.be.a('array')
  });
  it('Should have a name which is a string', () => {
    expect(recipe.name).to.equal("Whole Grain Bread")
    expect(recipe.name).to.be.a('string')
  });
   it('Should have tags which are in an array', () => {
    expect(recipe.tags).to.deep.equal(["bread"])
    expect(recipe.tags).to.be.a('array')
  });
  it('Should return ingredient names', () => {
    expect(recipe.getIngredients()).to.deep.equal(["wheat flour", "bicarbonate of soda"])
  });
  it('Should return the instructions', () => {
    expect(recipe.getInstructions()).to.deep.equal(["Preheat oven to 170 – 200°F", "Mix with warm water"])
  });
  it('Should return the total cost of ingredients', () => {
    expect(recipegetCost()).to.equal(866)
  });
});