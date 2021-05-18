import { expect } from 'chai';
import IngredientRepository from '../src/classes/IngredientRepository';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient Repository', () => {

  let ingredientRepo;
  let ingredient1;
  let ingredient2;

  beforeEach('Instantiate classes', () => {
    ingredient1 = new Ingredient(20081, 'wheat flour', 142);
    ingredient2 = new Ingredient(18372, 'bicarbonate of soda', 582);
    ingredientRepo = new IngredientRepository([ingredient1, ingredient2]);
  })

  it('Should be a function', () => {
    expect(IngredientRepository).to.be.a('function');
  });

  it('Should be an instance of IngredientRepository', () => {
    expect(ingredientRepo).to.be.an.instanceof(IngredientRepository);
  });

  it('Should contain instances of Ingredient', () => {
    expect(ingredientRepo.ingredients[0]).to.be.an.instanceof(Ingredient);
  });
})
