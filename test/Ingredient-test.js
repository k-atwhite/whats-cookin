import { expect } from 'chai';
import Ingredient from '../src/classes/Ingredient';

describe('Ingredient', () => {

  let ingredient;

  beforeEach('Instantiate ingredient', () => {
    ingredient = new Ingredient(1123, 'eggs', 472);
  });

  it('Should be a function', () => {
    expect(Ingredient).to.be.a('function');
  });

  it('Should be an instance of Ingredient', () => {
    expect(ingredient).to.be.an.instanceof(Ingredient);
  });

})
