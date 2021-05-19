import { expect } from 'chai';
import RecipeRepository from '../src/classes/RecipeRepository';

describe('Recipe Repository', () => {

  beforeEach('Instantiate recipeRepository', () => {

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
  })
  
  it('Should be a function', () => {
    expect(RecipeRepository).to.be.a('function');
  });
})

it('Should be an instance of RecipeRepository', () => {
    expect(recipeRepository).to.be.an.instanceOf(RecipeRepository);
});

it('', () => {
    expect().to.equal();
});


