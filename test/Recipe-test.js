import { expect } from 'chai';
import Recipe from '../src/classes/Recipe';

describe('Recipe', () => {

  let ingredient1
  let ingredient2
  let ingredientData
  let recipeData
  let recipe;

  beforeEach('Instantiate recipe', () => {

    ingredient1 = {"id": 20081, "name": "wheat flour", "estimatedCostInCents": 142};
    ingredient2 = {"id": 18372, "name": "bicarbonate of soda", "estimatedCostInCents": 582};
    ingredientData = [ingredient1, ingredient2]

    recipeData = {
      'id': 595736,
      'image': 'potato.org',
      'ingredients': [{
        "id": 20081,
        "quantity": {
          "amount": 2,
          "unit": "c"
        }}, {
        "id": 18372,
        "quantity": {
          "amount": 1,
          "unit": "tsp"
        }}],
      'instructions': [{"instruction": "Preheat oven to 170 – 200°F", "number": 1},
        {"instruction": "Mix with warm water", "number": 2}],
      'name': 'Whole Grain Bread',
      'tags': ['bread']
    }

    recipe = new Recipe(recipeData);
  });

  it('Should be a function', () => {
    expect(Recipe).to.be.a('function');
  });

  it('Should be an instance of Recipe', () => {
    expect(recipe).to.be.an.instanceof(Recipe);
  });

  it('Should have an ID which is a number', () => {
    expect(recipe.id).to.equal(595736)
    expect(recipe.id).to.be.a('number')
  });

  it('Should have an image URL which is a string', () => {
    expect(recipe.image).to.equal('potato.org')
    expect(recipe.image).to.be.a('string')
  });

  it('Should have ingredients which are in an array', () => {
    expect(recipe.ingredients).to.deep.equal([{
      "id": 20081,
      "quantity": {
        "amount": 2,
        "unit": "c"
      }}, {
      "id": 18372,
      "quantity": {
        "amount": 1,
        "unit": "tsp"
      }}])
    expect(recipe.ingredients).to.be.a('array')
  });

  it('Should have instructions which are in an array', () => {
    expect(recipe.instructions).to.deep.equal([
      {"instruction": "Preheat oven to 170 – 200°F", "number": 1},
      {"instruction": "Mix with warm water", "number": 2}
    ])
    expect(recipe.instructions).to.be.a('array')
  });

  it('Should have a name which is a string', () => {
    expect(recipe.name).to.equal('Whole Grain Bread')
    expect(recipe.name).to.be.a('string')
  });

  it('Should have tags which are in an array', () => {
    expect(recipe.tags).to.deep.equal(['bread'])
    expect(recipe.tags).to.be.a('array')
  });

  it('Should be able to compile all ingredient data', () => {
    recipe.compileIngredients(ingredientData)

    expect(recipe.ingredients).to.deep.equal([{
      "estimatedCostInCents": 142,
      "id": 20081,
      "name": "wheat flour",
      "quantity": {
        "amount": 2,
        "unit": "c"
      }},
    {
      "estimatedCostInCents": 582,
      "id": 18372,
      "name": "bicarbonate of soda",
      "quantity": {
        "amount": 1,
        "unit": "tsp"
      }}
    ])
  });

  it('Should return ingredient names', () => {
    recipe.compileIngredients(ingredientData);
    expect(recipe.getIngredientNames()).to.deep.equal(["wheat flour", "bicarbonate of soda"])
  });

  it('Should return the instructions', () => {
    recipe.compileIngredients(ingredientData);
    expect(recipe.getInstructions()).to.deep.equal(["Preheat oven to 170 – 200°F", "Mix with warm water"])
  });

  it('Should return the total cost of ingredients', () => {
    recipe.compileIngredients(ingredientData);
    expect(recipe.getCost()).to.equal('8.66')
  });
});
