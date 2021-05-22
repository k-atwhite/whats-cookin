import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';
import Recipe from '../src/classes/Recipe';
import Ingredient from '../src/classes/Ingredient';
import { recipeTestData } from '../src/data/test-recipe-data.js';
import { ingredientTestData } from '../src/data/test-ingredient-data';
import { ingredientsData } from "../src/data/ingredients";


describe('Recipe Repository', () => {
  let recipeRepository

  beforeEach('Instantiate recipeRepository', () => {
    recipeRepository = new RecipeRepository(recipeTestData, ingredientTestData)
  });

  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });

  it('Should be an instance of RecipeRepository', () => {
      expect(recipeRepository).to.be.an.instanceOf(RecipeRepository);
  });

  it('Should take recipeData as an argument', () => {
      expect(recipeRepository.recipes).to.deep.equal([{
    'id': 595736,
    'image': 'potato.org',
    'ingredients': [{
    "id": 20081,
    'estimatedCostInCents': 142,
    'name': 'wheat flour',
    "quantity": {
        "amount": 2,
        "unit": "c"
    }}, {
        "id": 18372,
        'estimatedCostInCents': 582,
        'name': 'bicarbonate of soda',
        "quantity": {
        "amount": 1,
        "unit": "tsp"
        }}],
    'instructions': [{"instruction": "Preheat oven to 170 – 200°F", "number": 1},
        {"instruction": "Mix with warm water", "number": 2}],
    'name': 'Whole Grain Bread',
    'tags': ['bread']
},{'id': 98765,
    'image': 'crablover.org',
    'ingredients': [{
    "id": 12345,
    'estimatedCostInCents': 213,
    'name': 'fake crab',
    "quantity": {
        "amount": 1,
        "unit": "c"
    }}, {
        "id": 54321,
        'estimatedCostInCents': 300,
        'name': 'ritz crackers',
        "quantity": {
        "amount": 4,
        "unit": "crackers"
        }}],
    'instructions': [{"instruction": "Open package", "number": 1},
        {"instruction": "combine", "number": 2}],
    'name': 'Crabs on Crackers',
    'tags': ["Hors d\'oeuvre", "dinner", "crab"]
  }]);
});

it('Should take ingredient data as an argument', () => {
  expect(recipeRepository.ingredients).to.deep.equal([
    {"id": 20081, "name": "wheat flour","estimatedCostInCents": 142, 'quantity': { 'amount': 2, 'unit': 'c'}},
    {"id": 18372,"name": "bicarbonate of soda", "estimatedCostInCents": 582, 'quantity': { 'amount': 1, 'unit': 'tsp'}},
    {"id": 12345,"name": "fake crab", "estimatedCostInCents": 213, 'quantity': { 'amount': 1, 'unit': 'c'}},
    {"id": 54321,"name": "ritz crackers", "estimatedCostInCents": 300, 'quantity': { 'amount': 4, 'unit': 'crackers'}}
  ]);
})

 it('Should filter recipes by tags', () => {
   let result = recipeRepository.filterTags('crab')
    expect(result).to.deep.equal([{'id': 98765,
    'image': 'crablover.org',
    'ingredients': [{
    "id": 12345,
    'estimatedCostInCents': 213,
    'name': 'fake crab',
    "quantity": {
        "amount": 1,
        "unit": "c"
    }}, {
        "id": 54321,
        'estimatedCostInCents': 300,
        'name': 'ritz crackers',
        "quantity": {
        "amount": 4,
        "unit": "crackers"
        }}],
    'instructions': [{"instruction": "Open package", "number": 1},
        {"instruction": "combine", "number": 2}],
    'name': 'Crabs on Crackers',
    'tags': ["Hors d\'oeuvre", "dinner", "crab"]
    }]);
  });

  it('Should filter recipes by name', () => {
    const result = recipeRepository.filterName('Whole Grain Bread')
    expect(result).to.deep.equal([{
      'id': 595736,
      'image': 'potato.org',
      'ingredients': [{
      "id": 20081,
      'estimatedCostInCents': 142,
      'name': 'wheat flour',
      "quantity": {
          "amount": 2,
          "unit": "c"
      }}, {
          "id": 18372,
          'estimatedCostInCents': 582,
          'name': 'bicarbonate of soda',
          "quantity": {
          "amount": 1,
          "unit": "tsp"
          }}],
      'instructions': [{"instruction": "Preheat oven to 170 – 200°F", "number": 1},
          {"instruction": "Mix with warm water", "number": 2}],
      'name': 'Whole Grain Bread',
      'tags': ['bread']
    }]);
  });

  it('Should filter recipes by ingredient', () => {
    const result = recipeRepository.filterIngredients('bicarbonate of soda')
    expect(result).to.deep.equal([{
      'id': 595736,
      'image': 'potato.org',
      'ingredients': [{
      "id": 20081,
      'estimatedCostInCents': 142,
      'name': 'wheat flour',
      "quantity": {
          "amount": 2,
          "unit": "c"
      }}, {
          "id": 18372,
          'estimatedCostInCents': 582,
          'name': 'bicarbonate of soda',
          "quantity": {
          "amount": 1,
          "unit": "tsp"
          }}],
      'instructions': [{"instruction": "Preheat oven to 170 – 200°F", "number": 1},
          {"instruction": "Mix with warm water", "number": 2}],
      'name': 'Whole Grain Bread',
      'tags': ['bread']
    }]);
  });

});
